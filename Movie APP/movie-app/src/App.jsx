import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase"; 
import { signOut } from "firebase/auth";
import './App.css'
import Login from "./components/Login";
import Home from "./components/Home";
import FavoriteMovies from "./components/FavoriteMovies";
import SignUp from "./components/SignUp";
import { useNavigate } from "react-router-dom";

function App() {
  const user = auth.currentUser; 
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Çıkış yaparken bir hata oluştu", error);
    }
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Çıkış Yap</button>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
      {user && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorite"
            element={user ? <FavoriteMovies /> : <Navigate to="/login" />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
