import { useState, useContext } from "react";
import { MyContext } from "./Context";

export const UserProfile = () => {
  const { user } = useContext(MyContext);

  return <h3>Usuario logueado: {user}</h3>;
};
