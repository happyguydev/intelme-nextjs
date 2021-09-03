import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
import CheckboxAndTextContainer from '../../components/checkbox-and-text-container';
import Recaptcha from '../../components/recaptcha';
import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';
import Checkbox from '../../components/checkbox';

import { USER_IS_ACTIVATED } from './constants';
import { SET_AUTH_DETAILS, SET_USER_ROLES } from '../../store/types';
import { authLogin } from '../../store/actions/auth';

const Login = () => {
  const styles = useStyles();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['intelme']);
  const api = new Api();
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isCaptchaOkay, setIsCaptchaOkay] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [error, setError] = useState('');

  const formInputsAreValid = Boolean(
    !username || !password || !companyId || !isCaptchaOkay
  );

  useEffect(() => {
    if (error) {
      toast.error(error, toastConfig);
      setError(false);
    }
  }, [error]);

  const onSubmit = async () => {
    try {
      const res = await api.login({
        tenant: companyId,
        username: username,
        password: password,
        remember_me: rememberMe,
      });

      const userStatus = await api.checkUserStatus();

      if (userStatus.state === USER_IS_ACTIVATED) {
        dispatch({
          type: SET_AUTH_DETAILS,
          payload: res,
        });

        localStorage.setItem('accessToken', res.access_token);
        localStorage.setItem('refreshToken', res.refresh_token);

        const userRoles = await api.getUserRoles({ username });

        dispatch({
          type: SET_USER_ROLES,
          payload: userRoles,
        });

        setCookie('username', username, { path: '/' });
        router.push('/dashboard');

        return () => {
          setUsername('');
          setCompanyId('');
          setPassword('');
        };
      } else {
        setError('Your account is inactive. Please contact your manager.');
      }
    } catch (err) {
      setError(
        'Sorry, your company ID, username or password is incorrect. Please try again.'
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
          <FormHeader>Login</FormHeader>

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
              error={error.passwordDoesNotMatch}
              helperText={
                error.passwordDoesNotMatch && 'Passwords do not match'
              }
              FormHelperTextProps={{
                className: styles.helperText,
              }}
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <div className="flex justify-between items-center platform-access-field">
              <CheckboxAndTextContainer isLogin={true}>
                <Checkbox
                  value={rememberMe}
                  handleChange={() => setRememberMe(!rememberMe)}
                />
                <div className={styles.rememberMe}>Remember me</div>
              </CheckboxAndTextContainer>

              <div
                className={styles.forgotPassword}
                onClick={() => router.push('/forgot-password')}
              >
                Forgot Password?
              </div>
            </div>
          </FormFieldContainer>

          <Recaptcha handleChange={setIsCaptchaOkay} />

          <SubmitButton disabled={formInputsAreValid} handleClick={onSubmit}>
            LOGIN
          </SubmitButton>
        </ActivationFormContainer>
      </ActivationContainer>
    </PageContainer>
  );
};

export default Login;
