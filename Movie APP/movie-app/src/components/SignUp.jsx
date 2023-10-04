import React, { useState } from "react";
import { auth } from "../firebase/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/"); 
    } catch (error) {
      setError("Hesap oluşturma başarısız. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="formWrapper">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSignUp}>
        <div className="inputWrapper">
          <input
            className="formInput"
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <input
            className="formInput"
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <button type="submit">Kayıt Ol</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <div className="pWrapper">
      <p>
        Zaten bir hesabınız var mı?{" "}
        <button onClick={() => navigate("/login")}>Giriş Yap</button>
      </p>
      </div>
    </div>
  );
}

export default SignUp;
