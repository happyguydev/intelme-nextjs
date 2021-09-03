import { makeStyles } from '@material-ui/core/styles';

const statusCheckbox = makeStyles({
  checkboxContainer: {
    display: ' flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    padding: 0,
    '&:hover': {
      '& svg': {
        '& circle': {
          stroke: '#4d4d4d!important',
        },
        '& path': {
          fill: '#4d4d4d!important',
        },
      },
    },
  },
  arrow: {
    width: '20px',
    height: '20px',
    color: '#858383',
  },

  dateColumn: {
    maxWidth: '100px',
    display: 'flex',
    alignItems: 'baseline',
    '& svg': {
      marginLeft: '6.67px',
    },
  },
  status: {},
  title: {},
  project: {},
  priority: {
    textAlign: 'center',
  },
  assignee: {
    textAlign: 'center',
  },
});

export default statusCheckbox;
