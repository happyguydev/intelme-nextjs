import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  title: {
    marginBottom: '16px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '24px',
    color: '#089BAB',
  },
  checkbox: {
    padding: '0',
  },
  selectionColumn: {
    width: '20px',
    background: '#000',
  },
  headerSpan: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.1px',
    color: '#A5A5A5',
  },

  updatedSpan: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.1px',
    color: '#A5A5A5',
    display: 'flex',
    alignItems: 'baseline',
    '& svg': {
      marginLeft: '6.67px',
    },
  },
  link: {
    '& a': {
      transition: '0.3s ease',
      '&:hover': {
        color: '#089BAB',
      },
      '&:focus': {
        color: '#089BAB',
      },
    },
  },
  arrow: {
    width: '20px',
    height: '20px',
    color: '#858383',
  },
  inChargeContainer: {
    textAlign: 'center',
  },
  updatedContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
});

export const projectStyles = makeStyles({
  projectHeader: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '32px',
    marginTop: '15px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '24px',
    color: '#089bab',
    marginBottom: '32px',
  },
  projectName: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '32px',
    color: '#089BAB',

    paddingRight: '8px',
  },
  projectNo: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#089BAB',
  },
  arrow: {
    width: '20px',
    height: '20px',
    color: '#858383',
  },
  type: {
    color: '#A5A5A5',
    width: '24px',
    height: '24px',
  },
  checkbox: {
    padding: '0',
  },
  revision: {
    padding: '0px 13px',
  },
  prioritySpan: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.1px',
    color: '#A5A5A5',
  },
  headerSpan: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.1px',
    color: '#A5A5A5',
  },
  dateColumn: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    letterSpacing: '-0.1px',
    color: '#A5A5A5',
    display: 'flex',
    alignItems: 'baseline',
    '& svg': {
      marginLeft: '6.67px',
    },
  },
});

export default useStyles;
