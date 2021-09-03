import React from 'react';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const editProfileStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Poppins',
    letterSpacing: '-0.2px',
  },
  tabContainer: {
    minWidth: '736px',
    width: '736px',
    backgroundColor: '#ffffff',
    padding: '32px 24px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    borderRadius: '0px 10px 10px 10px',
    '& > p': {
      fontFamily: 'Poppins',
    },
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > button': {
      marginLeft: '24px',
      padding: '10px 16px',
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

export default editProfileStyles;

const AntTabs = withStyles({
  root: {
    borderBottom: 'transparent',
    backgroundColor: 'transparent',
    fontFamily: 'Poppins',
    '& button:first-child': {
      marginLeft: '0px',
    },
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: 400,
    fontFamily: 'Poppins',
    minWidth: '154px',
    color: '#A5A5A5',
    backgroundColor: '#F8FEFF',
    borderRadius: '10px 20px 0px 0px',
    marginLeft: '-22px',
    fontSize: '16px',
    lineHeight: '16px',
    '&$selected': {
      minWidth: '120px',
      color: '#4D4D4D',
      backgroundColor: '#ffffff',
      borderRadius: '10px 20px 0px 0px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      zIndex: '99',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export { AntTabs, AntTab };
