import { userContext } from "../context/UserContext";
import { useContext } from "react";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(userContext);
  return user ? children : <> Error 403 </>;
};
