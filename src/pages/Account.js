import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";


export default function Account() {
  const navigate = useNavigate();

  return (   
    <div className="auth-wrap">
      <div className="auth-card">
        <h1 className="auth-title">Welcome 👋</h1>
        <p className="auth-sub">Choose how you want to continue</p>

        <button className="auth-btn" onClick={() => navigate("/login")}>
          Log In
        </button>

        <button className="auth-btn outline" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
