import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButtons from "../auth/AuthButtons";

export default function Root() {
  const { isLoading } = useAuth0();

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

          {isLoading ? "" : <AuthButtons />}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
