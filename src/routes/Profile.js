import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <li>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-circle"
            width="150"
          />
        </li>
      )}
    </>
  );
}
