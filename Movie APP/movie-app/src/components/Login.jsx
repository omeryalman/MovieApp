import React, { useState } from "react";
import { auth } from "../firebase/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        navigate("/");
      } else {
        setError("Giriş başarısız. Kullanıcı adı veya şifre hatalı.");
      }
    } catch (error) {
      setError("Giriş başarısız. Kullanıcı adı veya şifre hatalı.");
    }
  };

  return (
    <div className="formWrapper">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
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
          <button type="submit">Giriş Yap</button>
        </div>
        <div className="pWrapper">
        <p>
          Hesabınız yok mu? <Link to="/signup">Kayıt Ol</Link>
        </p>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
