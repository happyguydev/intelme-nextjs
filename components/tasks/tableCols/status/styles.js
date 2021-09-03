import { makeStyles } from '@material-ui/core/styles';

const statusCheckbox = makeStyles({
  checkbox: {
    display: 'flex',
    transition: '0.3s all',
    height: '18px',
    background: '#fff',
    position: 'relative',
    alignItems: 'center',
    width: '18px',
    borderRadius: '50%',
    border: '1px solid #dbdbdb',
    color: 'rgb(219, 219, 219)',
    cursor: 'pointer',
    justifyContent: 'center',
    '& svg': {
      width: '80%',
      height: '80%',
    },
    '&:hover': {
      border: '1px solid #4d4d4d!important',
      '& svg': {
        fill: '#4d4d4d!important',
      },
    },
  },
  activeCheckbox: {
    background: '#2E9B39',
    display: 'flex',
    height: '18px',
    position: 'relative',
    alignItems: 'center',
    width: '18px',
    borderRadius: '50%',
    border: '1px solid #dbdbdb',
    color: 'rgb(219, 219, 219)',
    cursor: 'pointer',
    justifyContent: 'center',
    '& svg': {
      width: '80%',
      height: '80%',

      fill: '#FFFFFF!important',
    },
  },
});

export default statusCheckbox;
