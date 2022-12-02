import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { db } from "../../firebase";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";

function Plans() {
  const user = useSelector(selectUser);
  const [products, setProducts] = useState({});

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // redirect to checkout
        const stripe = await loadStripe(
          "pk_test_51MAKC0EGyrjD5vD8xJlIddCASYUXld99pKK0dOUTVateLzgLU0e9f5F7ynbKJEggNOL0HnJhEoTvf0JP0ZK3ROUj00akCuO5ao"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        // add logic to ensure user's subscription is active
        return (
          <div className="plans__plan">
            <div className="plan_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
