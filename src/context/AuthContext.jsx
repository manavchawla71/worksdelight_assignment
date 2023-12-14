import { createContext, useState, useContext } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isuserloggedin, setisuserloggedin] = useState(false);
  const value = { isuserloggedin, setisuserloggedin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
