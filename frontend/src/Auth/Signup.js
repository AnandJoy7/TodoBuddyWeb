import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
      } else {
        // Registration successful, redirect or show success message
        window.location.href = "/signin"; // Redirect to signin page
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="login-box">
      <p>Signup</p>
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
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
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
        <button type="submit" className="a1" href="/signin">
          Submit
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="" className="a2">
          Sign in!
        </a>
      </p>
    </div>
  );
}

export default Signup;
