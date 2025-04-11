import React, { useState } from "react";

import { Registro } from "../components/Registro.jsx";
import { Login } from "../components/Login.jsx";

export const AuthPage = () => {
  const [authProcess, setAuthProcess] = useState("loginWithEmail");

  return (
    <>
      {authProcess == "loginWithEmail" ? (
        <Login changestateAuth={setAuthProcess} />
      ) : null}
      {authProcess == "loginWithGoogle" ? (
        <LoginWithGoogle changestateAuth={setAuthProcess} />
      ) : null}
      {authProcess == "createAccount" ? (
        <Registro changestateAuth={setAuthProcess} />
      ) : null}
    </>
  );
};

export default AuthPage;
