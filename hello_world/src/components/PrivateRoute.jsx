import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (status === "authenticated") {
    return children;
  }
  navigate("/");
};
