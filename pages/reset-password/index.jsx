import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { GlobalContext } from '../../context/global';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Api from '../../api';
import { useStyles } from './style';
import { toastConfig } from '../../util/toast';
import PlatformAccessIllustration from '../../components/platform-access-illustration';
import ActivationIllustrationContainer from '../../components/activation-illustration-container';
import ActivationContainer from '../../components/activation-container';
import PageContainer from '../../components/page-container';
import ActivationFormContainer from '../../components/activation-form-container';
import FormHeader from '../../components/form-header';
import FormFieldContainer from '../../components/form-field-container';
import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';

const ResetPassword = () => {
  const styles = useStyles();
  const router = useRouter();
  const [state] = useContext(GlobalContext);
  const api = new Api();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValidations, setPasswordvalidations] = useState({
    atleast8CharactersLong: false,
    oneLowerCaseLetter: false,
    oneUpperCaseLetter: false,
    oneNumberSymbolSpecialChar: false,
    passwordsMatch: false,
  });
  const [error, setError] = useState({
    passwordDoesNotMatch: false,
    general: false,
  });

  const formInputsAreValid = Boolean(
    !passwordValidations.atleast8CharactersLong ||
      !passwordValidations.oneLowerCaseLetter ||
      !passwordValidations.oneUpperCaseLetter ||
      !confirmPassword ||
      !passwordValidations.oneNumberSymbolSpecialChar
  );

  useEffect(() => {
    if (error.general) {
      toast.error('Unable to set new password. Please try again.', toastConfig);
      setError({});
    }
  }, [error]);

  const onSubmit = async () => {
    const { username } = state.user;

    if (password !== confirmPassword) {
      return setError((error) => ({ ...error, passwordDoesNotMatch: true }));
    } else {
      setError((error) => ({ ...error, passwordDoesNotMatch: false }));
    }

    try {
      await api.resetPassword({
        username: username,
        password: password,
      });

      toast.success('Password successfuly reset', toastConfig);

      setPassword('');
      setConfirmPassword('');

      router.push('/dashboard');
    } catch (err) {
      setError({ general: true });
    }
  };

  const handleNewPasswordChange = (v) => {
    const password = v.target.value;

    if (password.length >= 8) {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        atleast8CharactersLong: true,
      }));
    } else {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        atleast8CharactersLong: false,
      }));
    }

    // checks for lower case in password
    if (password.match(/[a-z]/)) {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneLowerCaseLetter: true,
      }));
    } else {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneLowerCaseLetter: false,
      }));
    }

    // checks for upper case in password
    if (password.match(/[A-Z]/)) {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneUpperCaseLetter: true,
      }));
    } else {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneUpperCaseLetter: false,
      }));
    }

    // check for number, symbol or special character
    if (
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password) ||
      /\d/.test(password)
    ) {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneNumberSymbolSpecialChar: true,
      }));
    } else {
      setPasswordvalidations((passwordValidations) => ({
        ...passwordValidations,
        oneNumberSymbolSpecialChar: false,
      }));
    }

    setPassword(password);
  };

  return (
    <PageContainer>
      <ActivationContainer>
        <ActivationIllustrationContainer>
          <PlatformAccessIllustration />
        </ActivationIllustrationContainer>

        <ActivationFormContainer>
          <FormHeader>Set a new password</FormHeader>

          <FormFieldContainer>
            <FormField
              value={password}
              handleChange={handleNewPasswordChange}
              label="New password"
              type="password"
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <FormField
              value={confirmPassword}
              handleChange={(v) => setConfirmPassword(v.target.value)}
              label="Confirm new password"
              type="password"
              error={error.passwordDoesNotMatch}
              helperText={
                error.passwordDoesNotMatch && 'Passwords do not match'
              }
              FormHelperTextProps={{
                className: styles.helperText,
              }}
            />
          </FormFieldContainer>

          <SubmitButton disabled={!formInputsAreValid} handleClick={onSubmit}>
            Set new password
          </SubmitButton>

          <div
            className={cx(
              'flex justify-start flex-col w-full',
              styles.passwordRequirementContainer
            )}
          >
            <div className={styles.passwordRequirement}>
              PASSWORD REQUIREMENTS
            </div>
            <div className="flex  py-2">
              <Image
                height="7.33px"
                width="10.67px"
                src={
                  passwordValidations.atleast8CharactersLong
                    ? '/frontend-dev/CheckSuccess.svg'
                    : '/frontend-dev/CheckNeutral.svg'
                }
              />
              <Typography
                classes={{
                  root: styles.passwordGuidelines,
                }}
                className="px-2"
              >
                At least 8 characters long
              </Typography>
            </div>
            <div className="flex py-2">
              <Image
                height="7.33px"
                width="10.67px"
                src={
                  passwordValidations.oneLowerCaseLetter
                    ? '/frontend-dev/CheckSuccess.svg'
                    : '/frontend-dev/CheckNeutral.svg'
                }
              />
              <Typography
                classes={{
                  root: styles.passwordGuidelines,
                }}
                className="px-2"
              >
                One lower case letter
              </Typography>
            </div>
            <div className="flex  py-2">
              <Image
                height="7.33px"
                width="10.67px"
                src={
                  passwordValidations.oneUpperCaseLetter
                    ? '/frontend-dev/CheckSuccess.svg'
                    : '/frontend-dev/CheckNeutral.svg'
                }
              />
              <Typography
                classes={{
                  root: styles.passwordGuidelines,
                }}
                className="px-2"
              >
                One upper case letter
              </Typography>
            </div>
            <div className="flex  py-2">
              <Image
                height="7.33px"
                width="10.67px"
                src={
                  passwordValidations.oneNumberSymbolSpecialChar
                    ? '/frontend-dev/CheckSuccess.svg'
                    : '/frontend-dev/CheckNeutral.svg'
                }
              />
              <Typography
                classes={{
                  root: styles.passwordGuidelines,
                }}
                className="px-2"
              >
                One number, symbol or special character
              </Typography>
            </div>
          </div>
        </ActivationFormContainer>
      </ActivationContainer>
    </PageContainer>
  );
};

export default ResetPassword;
