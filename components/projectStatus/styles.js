import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
  active: {
    background: '#DEFFE1',
    borderRadius: '10px',
    padding: '2px 8px',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#2e9b39',
  },
  onHold: {
    background: '#FFF2CA',
    borderRadius: '10px',
    padding: '2px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#A88619',
  },
});

export default useStyles;
