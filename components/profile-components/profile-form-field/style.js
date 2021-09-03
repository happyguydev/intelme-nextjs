import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  requiredTick: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#089BAB',
    marginRight: '8px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid rgba(81, 92, 111, 0.16)',
    borderRadius: '5px',
    height: '40px',
    fontSize: '15px',
    color: '#4D4D4D',
    '& > div': {
      fontFamily: 'Poppins',
    },
    '&::placeholder': {
      color: '#DBDBDB',
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 'normal',
    },
    '&:focus': {
      border: '1px solid #089BAB',
    },
    '&:hover': {
      border: '1px solid #089BAB',
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
  helperText: {
    fontFamily: 'Poppins',
    color: '#DE6262',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    margin: '8px 0 0',
  },
});

export default useStyles;
