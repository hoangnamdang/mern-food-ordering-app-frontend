import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log({ appState, user });
  };
  if (!domain || !clientID || !redirectUrl) {
    throw new Error("unstable to initial auth");
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: redirectUrl,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
