import { makeStyles } from '@material-ui/core/styles';

const dateStyles = makeStyles({
  pastDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#DE6262',
  },
  todayDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#2E9B39',
  },
  upcomingDate: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#4D4D4D',
  },
});

export default dateStyles;
