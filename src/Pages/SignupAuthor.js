import { useState } from "react";
import { useSignupAuthor } from "../hooks/useSignupAuthor";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignupAuthor();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    if (password === confirmPassword) {
      await signup(email, username, password, confirmPassword);
    } else {
      console.error("Password do not match");
      // You can also set an error state to display the message to the user
    }
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign Up Author</h3>
      <label>Username:</label>
      <input
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label>Email address:</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label>Confirm Password:</label>
      <input
        type='password'
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <button disabled={isLoading}>Sign up</button> Already have an account?
      <Link to='/login'>Sign in</Link>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Signup;
