import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import "./../styles/SignIn.css";

function SignIn() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      login(res.user, res.token);
      alert("Logged in successfully!");
    } catch {
      alert("Login failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </form>
    </div>
  );
}

export default SignIn;
