import React, { useState } from "react";

import { Registro } from "../components/Registro.jsx";
import { LoginWithEmail } from "../components/LoginWithEmail.jsx";
import { LoginWithGoogle } from "../components/LoginWithGoogle.jsx";

export const AuthPage = () => {
  const [authProcess, setAuthProcess] = useState("loginWithEmail");

  return (
    <>
      {authProcess == "loginWithEmail" ? (
        <LoginWithEmail changestateAuth={setAuthProcess} />
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
