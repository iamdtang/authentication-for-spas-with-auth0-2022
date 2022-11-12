import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Root() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {isAuthenticated ? (
            <li>
              <button
                type="button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button type="button" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
