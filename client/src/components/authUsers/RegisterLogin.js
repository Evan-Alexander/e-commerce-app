import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AuthForm from "./AuthForm";

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toggleFormType = () => {
    setFormType(!formType);
  };
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            {formType ? (
              <>
                <h1>New customers</h1>
                <p>
                  Satoshi Nakamoto launched lots of decentralisation when
                  Litecoin required many decentralised application, for Augur
                  limited some public key behind lots of multi signature.
                </p>
              </>
            ) : (
              <>
                <h1>Welcome Back!</h1>
                <p>
                  Blockchain thought some robust smart contract in a algorithm!
                  Since OmiseGo bought few double spend, Augur could be many
                  algo-traded vaporware, but Decred data mining trusted hard!
                </p>
              </>
            )}
            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => toggleFormType()}
            >
              {formType ? "Already registered?" : "Register now"}
            </Button>
          </div>
          <div className="right">
            <h2>{formType ? "Register" : "Sign In"}</h2>
            <AuthForm formType={formType} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
