import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: '40px',
    width: '735px',
  },
  input: {
    borderRadius: '20px',
    border: '1px solid #fff',
    height: '40px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    transition: '0.5s all',
    fontSize: '15px',
    lineHeight: '22px',
    color: '#4D4D4D',
    width: '735px',
    position: 'absolute',
    padding: '12px',
    paddingLeft: '48px',
    top: 0,
    outline: 'none',
    '&:hover': {
      border: '1px solid #089bab',
    },
  },
  eyeglass: {
    height: '100%',
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    left: '650px',
    top: '8px',
    height: '24px',
    width: '66px',
    borderRadius: '16px',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EDF5F6',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    color: '#089BAB',
    fontWeight: 400,
    lineHeight: '16px',
  },
});

export default useStyles;
