import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    // If no errors, simulate submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", {
        username,
        email,
        password,
      });

      alert("User registered successfully!");

      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;