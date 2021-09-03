import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/global";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Api from "../../api";
import { useStyles } from "./style";
import { toastConfig } from "../../util/toast";
import PlatformAccessIllustration from "../../components/platform-access-illustration";
import ActivationIllustrationContainer from "../../components/activation-illustration-container";
import PageContainer from "../../components/page-container";
import ActivationContainer from "../../components/activation-container";
import ActivationFormContainer from "../../components/activation-form-container";
import FormHeader from "../../components/form-header";
import FormFieldContainer from "../../components/form-field-container";
import CheckboxAndTextContainer from "../../components/checkbox-and-text-container/index.js";
import FormField from "../../components/form-field";
import SubmitButton from "../../components/submit-button";
import Recaptcha from "../../components/recaptcha";
import Checkbox from "../../components/checkbox";
import { SET_USER_AND_AUTH } from "../../context/global/constants";

const Activation = () => {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const [tenantParam, usernameParam, activationCodeParam] =
    router.query.slug || [];

  const styles = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GlobalContext);
  const api = new Api();

  const [companyId, setCompanyId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCaptchaOkay, setIsCaptchaOkay] = useState(false);
  const [error, setError] = useState(false);
  const [termsConditionsAgreed, setTermsConditionsAgreed] = useState(false);

  const formInputsAreValid = Boolean(
    !username ||
      !termsConditionsAgreed ||
      !password ||
      !companyId ||
      !isCaptchaOkay
  );

  useEffect(() => {
    if (error) {
      toast.error(
        "An error occured during activation. Please try again.",
        toastConfig
      );
      setError(false);
    }
  }, [error]);

  const onSubmit = async () => {
    try {
      const authRes = await api.login({
        username,
        password,
        tenant: companyId,
        remember_me: false,
      });

      const res = await api.activateUser({
        activationCode: activationCodeParam,
      });

      dispatch({
        type: SET_USER_AND_AUTH,
        payload: {
          user: { ...res, activationCode: activationCodeParam },
          auth: authRes,
        },
      });

      toast.success("User successfully activated.", toastConfig);

      router.push("/reset-password");
      return () => {
        setCompanyId("");
        setUsername("");
        setPassword("");
        setTermsConditionsAgreed(false);
      };
    } catch (err) {
      setError(true);
    }
  };

  return (
    <PageContainer>
      <ActivationContainer>
        <ActivationIllustrationContainer>
          <PlatformAccessIllustration />
        </ActivationIllustrationContainer>

        <ActivationFormContainer>
          <FormHeader>Activate your account</FormHeader>

          <FormFieldContainer>
            <FormField
              value={companyId}
              handleChange={(v) => setCompanyId(v.target.value)}
              label="Company ID"
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <FormField
              value={username}
              handleChange={(v) => setUsername(v.target.value)}
              label="Username"
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <FormField
              value={password}
              handleChange={(v) => setPassword(v.target.value)}
              label="Password"
              type="password"
              variant="outlined"
            />
          </FormFieldContainer>

          <CheckboxAndTextContainer>
            <Checkbox
              value={termsConditionsAgreed}
              handleChange={setTermsConditionsAgreed}
            />
            <div className={styles.termsAndConditions}>
              I agree to{" "}
              <span className={styles.termsAndConditionsLink}>
                the Terms & Conditions
              </span>
            </div>
          </CheckboxAndTextContainer>

          <Recaptcha handleChange={setIsCaptchaOkay} />

          <SubmitButton disabled={formInputsAreValid} handleClick={onSubmit}>
            Activate
          </SubmitButton>
        </ActivationFormContainer>
      </ActivationContainer>
    </PageContainer>
  );
};

export default Activation;
