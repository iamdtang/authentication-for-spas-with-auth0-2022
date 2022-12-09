import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <li>
        <button
          type="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </>
  ) : (
    <li>
      <button type="button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </li>
  );
}
