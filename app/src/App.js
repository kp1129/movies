import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./screens/Home/Home";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";
import Landing from "./screens/Landing/Landing";
import Profile from "./screens/Profile/Profile";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/profile"
            element={user ? <Profile /> : <Landing />}
          />
          <Route exact path="/" element={user ? <Home /> : <Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
