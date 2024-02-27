import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Authentication successful, redirect or set authentication state
        window.location.href = "/todo"; // Redirect to todo page
      } else {
        setError(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            required
            name=""
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            required
            name=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="a1" href="/todo">
          Submit
          <span></span>
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/signup" className="a2">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Login;
