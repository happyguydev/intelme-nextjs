import { makeStyles } from '@material-ui/core/styles';

const fileStatusStyles = makeStyles({
  approved: {
    background: '#DEFFE1',
    borderRadius: '10px',
    padding: '2px 8px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#2e9b39',
    display: 'inline-block',
  },
  tender: {
    background: '#fff2ca',
    borderRadius: '10px',
    padding: '2px 8px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#A88619',
    display: 'inline-block',
  },
  forReview: {
    background: '#FFD8D8',
    color: '#C03E3E',
    borderRadius: '10px',
    padding: '2px 8px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    display: 'inline-block',
  },
});

export default fileStatusStyles;
