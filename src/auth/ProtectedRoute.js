import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRoute(props) {
  const Component = withAuthenticationRequired(props.component, {
    onRedirecting: () => <div>Redirecting you to the login...</div>,
  });
  return <Component />;
}
