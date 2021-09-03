import { makeStyles } from '@material-ui/core';

const accountPanelStyles = makeStyles((theme) => ({
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > button': {
      marginLeft: '24px',
      padding: '10px 16px',
    },
  },
  changePasswordButton: {
    width: '133px',
    height: '32px',
    borderRadius: '20px',
    padding: '8px 12px 8px 12px',
    backgroundColor: '#EDF5F6',
    color: '#089BAB',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    textTransform: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  submitButton: {
    width: '136px',
    height: '36px',
    borderRadius: '10px',
    padding: '10px 16px 10px 16px',
    backgroundColor: '#FF8A47',
    color: '#ffffff !important',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#FF8A47',
    },
    '&:focus': {
      outline: 'none',
    },
    '&[disabled]': {
      backgroundColor: '#DBDBDB',
    },
  },
  formFieldLabel: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    color: '#495057',
    marginBottom: '8px',
    fontFamily: 'Poppins',
  },
  mobileTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileNoRequiredTick: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#089BAB',
    marginRight: '8px',
    marginBottom: '8px',
  },
  mobileNoError: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#DE6262',
    fontFamily: 'Poppins',
    marginTop: '8px',
  },
  userAvatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    color: '#000000',
    '& > span': {
      marginLeft: '8px',
    },
  },
  lineStyle: {
    width: '304px',
    marginTop: '32px',
    marginBottom: '16px',
  },
  teamsTitle: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#4D4D4D',
    marginBottom: '42px',
  },
}));

export default accountPanelStyles;
