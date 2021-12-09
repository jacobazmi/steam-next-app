import { createContext } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    netlifyIdentity.open();
  };

  const context = { user: user, login: login };

  useEffect(() => {
    netlifyIdentity.on("login", () => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });
    //init netlify idendity connection
    netlifyIdentity.init();
  }, []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
