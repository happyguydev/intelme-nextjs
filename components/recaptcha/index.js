import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../../env";

const Recaptcha = ({ handleChange }) => (
  <div className="flex justify-center items-center pb-6">
    <ReCAPTCHA
      onChange={() => handleChange(true)}
      sitekey={config.captchaSiteKey}
    />
  </div>
);

export default Recaptcha;
