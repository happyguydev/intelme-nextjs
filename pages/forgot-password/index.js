import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Api from "../../api";
import { toastConfig } from "../../util/toast";
import PlatformAccessIllustration from "../../components/platform-access-illustration";
import ActivationIllustrationContainer from "../../components/activation-illustration-container";
import ActivationContainer from "../../components/activation-container";
import PageContainer from "../../components/page-container";
import ActivationFormContainer from "../../components/activation-form-container";
import FormHeader from "../../components/form-header";
import FormFieldContainer from "../../components/form-field-container";
import FormField from "../../components/form-field";
import SubmitButton from "../../components/submit-button";
import Recaptcha from "../../components/recaptcha";
import useStyles from "./styles";

const ForgotPassword = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isCaptchaOkay, setIsCaptchaOkay] = useState(false);
  const api = new Api();
  const [companyID, setCompanyID] = useState("");
  const [email, setEmail] = useState("");
  const styles = useStyles();

  const formInputsAreValid = Boolean(
    !username || !isCaptchaOkay || !companyID || !email
  );

  useEffect(() => {
    if (error) {
      toast.error(error, toastConfig);
      setError(false);
    }
  }, [error]);

  const onSubmit = async () => {
    try {
      await api.forgotPassword({
        tenantId: companyID,
        username: username,
        email: email,
        isReset: "yes",
      });

      toast.success("SUCCESS MESSAGE PLACEHOLDER", toastConfig);
      router.push("/");
    } catch (err) {
      setError(
        "We have encountered a technical error on the platform. please try again later or contact your administrator."
      );
    }
  };

  return (
    <PageContainer>
      <ActivationContainer>
        <ActivationIllustrationContainer>
          <PlatformAccessIllustration />
        </ActivationIllustrationContainer>

        <ActivationFormContainer>
          <FormHeader>Forgot Password</FormHeader>
          <div className={styles.forgotPasswordSubtitle}>
            {`Please enter your username and we'll send you instruction on how
              to reset your password`}
          </div>
          <FormFieldContainer>
            <FormField
              value={companyID}
              handleChange={(v) => setCompanyID(v.target.value)}
              label="Company ID"
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <FormField
              value={email}
              handleChange={(v) => setEmail(v.target.value)}
              label="Email"
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <FormField
              value={username}
              handleChange={(v) => setUsername(v.target.value)}
              label="Username"
            />
          </FormFieldContainer>

          <Recaptcha handleChange={setIsCaptchaOkay} />

          <SubmitButton disabled={formInputsAreValid} handleClick={onSubmit}>
            SEND EMAIL
          </SubmitButton>
        </ActivationFormContainer>
      </ActivationContainer>
    </PageContainer>
  );
};

export default ForgotPassword;
