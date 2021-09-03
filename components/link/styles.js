import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const linkStyles = makeStyles({
  primary: {
    display: 'flex',
    alignItems: 'center',
    color: (props) => (props.disabled ? '#DBDBDB' : '#FF8A47'),
    outline: 'none !important',
    cursor: (props) => (props.disabled ? 'not-allowed' : 'pointer'),
    flexDirection: (props) =>
      !props.iconPosition || props.iconPosition === 'left'
        ? 'row'
        : 'row-reverse',
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    '&:hover': {
      color: (props) => (props.disabled ? '#DBDBDB' : '#DF7131'),
      '& svg': {
        color: (props) => (props.disabled ? '#DBDBDB' : '#DF7131'),
      },
    },
  },
  iconStyle: {
    color: (props) => (props.disabled ? '#DBDBDB' : '#FF8A47'),
    fontSize: (props) => (props.children ? '14px' : '20px'),
    width: (props) => (props.children ? '14px' : '20px'),
    height: (props) => (props.children ? '14px' : '20px'),
    cursor: (props) => (props.disabled ? 'not-allowed' : 'pointer'),
  },
  linkText: {
    marginLeft: (props) =>
      !props.iconPosition || props.iconPosition === 'left' ? '10px' : '0',
    paddingRight: (props) => (props.iconPosition === 'right' ? '10px' : '0'),
  },
});

export const LinkComponent = styled.div``;
