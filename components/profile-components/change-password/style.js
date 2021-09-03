import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const changePasswordStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    color: '#089BAB',
    marginBottom: '32px',
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  fieldsContainer: {
    width: '330px',
    '& > div': {
      marginTop: '24px',
    },
    '& > div:first-child': {
      marginTop: '0',
    },
  },
  textContainer: {
    marginLeft: '56px',
  },
  helperText: {
    backgroundColor: '#edf5f6',
    margin: 0,
    paddingLeft: '14px',
    paddingTop: '4px',
    paddingRight: '14px',
  },
  lineStyle: {
    marginBottom: '24px',
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    marginLeft: '8px',
    color: '#858383',
  },
  textDetail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '16px',
    '& > p ': {
      fontFamily: 'Poppins',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '400',
      marginLeft: '8px',
    },
  },
  actionBtns: {
    marginTop: '98px',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > button': {
      marginLeft: '24px',
      padding: '10px 16px',
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
}));

export default changePasswordStyles;
