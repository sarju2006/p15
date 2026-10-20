
import { useRef, useState } from "react";

export default function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submittedUser, setSubmittedUser] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;

    setSubmittedUser(username);
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          ref={usernameRef}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {submittedUser && (
        <h3>Form submitted successfully for: {submittedUser}</h3>
      )}
    </div>
  );
}
