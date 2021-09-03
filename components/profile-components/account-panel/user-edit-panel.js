import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Api from '../../../api';
import Link from '../../link';
import Line from '../../line';
import { USER_PROFILE } from '../../../store/types';

import FormField from '../profile-form-field';
import TeamListItem from '../team-list-item';

import accountPanelStyles from './style';
import { toast } from 'react-toastify';
import { toastConfig } from '../../../util/toast';

const UserEditPanel = ({ userDetail, onClick }) => {
  const accountPanelStyle = accountPanelStyles();
  const dispatch = useDispatch();

  const api = new Api();

  const [firstName, setFirstName] = useState(
    userDetail ? userDetail.firstName : ''
  );
  const [lastName, setLastName] = useState(
    userDetail ? userDetail.lastName : ''
  );
  const [email, setEmail] = useState(userDetail ? userDetail.email : '');
  const [mobileNo, setMobileNo] = useState(
    userDetail ? userDetail.settings.mobileNo : ''
  );
  const [jobTitle, setJobTitle] = useState(
    userDetail ? userDetail.settings.jobTitle : ''
  );
  const [teamList, setTeamList] = useState(userDetail.settings.teams);

  const [userEditValidations, setUserEditValidations] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    emailTypeError: false,
    mobileNoError: false,
    jobTitleError: false,
  });

  const formInputsAreValid = Boolean(
    userEditValidations.firstNameError ||
      userEditValidations.lastNameError ||
      userEditValidations.emailError ||
      userEditValidations.emailTypeError ||
      userEditValidations.mobileNoError ||
      userEditValidations.jobTitleError
  );

  const handleChange = (v, fieldName) => {
    let value = v.target.value;

    if (value.length > 0) {
      switch (fieldName) {
        case 'firstName':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            firstNameError: false,
          }));
          break;
        case 'lastName':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            lastNameError: false,
          }));
          break;
        case 'email':
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setUserEditValidations((userEditValidations) => ({
              ...userEditValidations,
              emailTypeError: true,
            }));
          } else {
            setUserEditValidations((userEditValidations) => ({
              ...userEditValidations,
              emailTypeError: false,
              emailError: false,
            }));
          }
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            emailError: false,
          }));
          break;
        case 'jobTitle':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            jobTitleError: false,
          }));
          break;
        default:
          break;
      }
    } else {
      switch (fieldName) {
        case 'firstName':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            firstNameError: true,
          }));
          break;
        case 'lastName':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            lastNameError: true,
          }));
          break;
        case 'email':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            emailTypeError: false,
            emailError: true,
          }));
          break;
        case 'jobTitle':
          setUserEditValidations((userEditValidations) => ({
            ...userEditValidations,
            jobTitleError: true,
          }));
          break;
        default:
          break;
      }
    }

    switch (fieldName) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'jobTitle':
        setJobTitle(value);
        break;
      default:
        break;
    }
  };

  const handleMobileNoChange = (mobileNo) => {
    if (mobileNo.length > 0) {
      setUserEditValidations((userEditValidations) => ({
        ...userEditValidations,
        mobileNoError: false,
      }));
    } else {
      setUserEditValidations((userEditValidations) => ({
        ...userEditValidations,
        mobileNoError: true,
      }));
    }

    setMobileNo(mobileNo);
  };

  const onSubmit = async () => {
    try {
      const username = userDetail.username;
      const body = {
        userId: userDetail.settings.userId,
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        enabled: true,
        emailVerified: true,
        requiredActions: {},
      };

      await api.updateUserProfile({ username }, body);

      const userData = {
        jobTitle: jobTitle,
        mobileNo: mobileNo,
        location: userDetail.settings.location,
        keywords: userDetail.settings.keywords,
      };
      await api.updateUserSetting(userData);

      api.getUserProfile({ username }).then((res) => {
        dispatch({
          type: USER_PROFILE,
          payload: res,
        });
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setEmail(res.email);
        setMobileNo(res.settings.mobileNo);
        setJobTitle(res.settings.jobTitle);
        setTeamList(res.settings.teams);
      });

      toast.success('Profile changes are saved!', toastConfig);
    } catch (error) {
      toast.error('Unable to update user profile.', toastConfig);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <FormField
            label="First name"
            value={firstName}
            handleChange={(v) => handleChange(v, 'firstName')}
            error={userEditValidations.firstNameError}
            helperText={
              userEditValidations.firstNameError &&
              'Please indicate your first name.'
            }
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormField
            label="Last name"
            value={lastName}
            handleChange={(v) => handleChange(v, 'lastName')}
            error={userEditValidations.lastNameError}
            helperText={
              userEditValidations.lastNameError &&
              'Please indicate your last name.'
            }
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormField
            label="Email"
            value={email}
            handleChange={(v) => handleChange(v, 'email')}
            error={
              !userEditValidations.emailError
                ? userEditValidations.emailTypeError
                : true
            }
            helperText={
              !userEditValidations.emailTypeError
                ? userEditValidations.emailError
                  ? 'Please indicate your email.'
                  : ''
                : 'Please indicate your valid email.'
            }
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography className={accountPanelStyle.formFieldLabel}>
            <span>Reporting to</span>
          </Typography>
          <div className={accountPanelStyle.userAvatar}>
            <Avatar src="/frontend-dev/user-2.svg" width="40px" height="40px" />
            <span>Miriam Grisham</span>
          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <div className={accountPanelStyle.mobileTitleContainer}>
            {userEditValidations.mobileNoError && (
              <div className={accountPanelStyle.mobileNoRequiredTick} />
            )}
            <Typography className={accountPanelStyle.formFieldLabel}>
              Mobile
            </Typography>
          </div>
          <PhoneInput
            country={'au'}
            value={mobileNo}
            enableAreaCodeStretch
            disableCountryCode="true"
            placeholder="(04)123 456 78"
            masks={{ au: '(..)... ... ..' }}
            containerClass="profilePhone"
            inputClass={
              userEditValidations.mobileNoError
                ? 'profilePhoneInput profilePhoneInput-error'
                : 'profilePhoneInput'
            }
            buttonClass={
              userEditValidations.mobileNoError
                ? 'profilePhoneButton profilePhoneButton-error'
                : 'profilePhoneButton'
            }
            onChange={handleMobileNoChange}
          />
          {userEditValidations.mobileNoError && (
            <Typography className={accountPanelStyle.mobileNoError}>
              <span>Please indicate your mobile number.</span>
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography className={accountPanelStyle.formFieldLabel}>
            <span>Password</span>
          </Typography>
          <Button
            className={accountPanelStyle.changePasswordButton}
            onClick={onClick}
          >
            <span>Change password</span>
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormField
            label="Job Title"
            value={jobTitle}
            handleChange={(v) => handleChange(v, 'jobTitle')}
            error={userEditValidations.jobTitleError}
            helperText={
              userEditValidations.jobTitleError &&
              'Please indicate your job title.'
            }
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <FormField
            label="Discipline"
            disabled
            value={
              userDetail &&
              userDetail.settings.disciplines.length > 0 &&
              userDetail.settings.disciplines[0].name
            }
          />
        </Grid>
        <Grid item xs={6} sm={6} />
        <Grid item xs={6} sm={6}>
          <div className={accountPanelStyle.actionButtons}>
            <Link>Cancel</Link>
            <Button
              className={accountPanelStyle.submitButton}
              disabled={formInputsAreValid}
              onClick={onSubmit}
            >
              Save changes
            </Button>
          </div>
        </Grid>
      </Grid>

      <div className={accountPanelStyle.lineStyle}>
        <Line />
      </div>

      <Typography className={accountPanelStyle.teamsTitle}>
        <span>My Teams</span>
      </Typography>

      {teamList.map((team) => {
        return <TeamListItem teamDetail={team} key={team.teamId} />;
      })}
    </>
  );
};

export default UserEditPanel;
