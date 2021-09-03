import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const buttonStyles = makeStyles({
  primary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: (props) => props.background,
    borderRadius: '10px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    padding: '8px 12px',
    color: '#fff',
    outline: 'none !important',
  },
  primarySmall: {},
  secondary: {
    background: (props) => props.background,
    borderRadius: '20px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    color: '#FF8A47',
    outline: 'none',
  },
  secondarySmall: {
    height: '24px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    background: (props) => props.background,
    borderRadius: '16px',
    color: (props) => props.color,
    outline: 'none',
    '&:hover': {
      color: '#DF7131',
    },
    '& svg': {
      fontSize: ' 12px',
      marginRight: '6.5px',
    },
  },
  custom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: (props) => props.background,
    borderRadius: (props) => props.borderRadius,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    padding: '8px 12px',
    color: (props) => props.color,
    outline: 'none !important',
    width: (props) => (!props.width ? '24px' : props.width),
    height: (props) => (!props.height ? '24px' : props.height),
  },
});

export const ButtonComponent = styled.button``;
