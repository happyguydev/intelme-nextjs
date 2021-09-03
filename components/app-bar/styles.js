import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  appBar: {
    padding: '24px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionBar: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '5px',
    borderRadius: '40px',
    position: 'relative',
    minWidth: 'auto',
    color: '#858383',
    marginRight: '30px',
    transition: '0.5s all',
    '&:hover': {
      color: '#089BAB',
    },
    '&:focus': {
      outline: 'none',
      color: '#089BAB',
    },
    '&:active': {
      outline: 'none',
      color: '#089BAB',
    },
  },
  bellIcon: {
    width: '24px',
    height: '24px',
  },
  messageIcon: {
    width: '24px',
    height: '24px',
  },
  starIcon: {
    width: '24px',
    height: '23.02px',
  },
  profile: {
    padding: '5px',
    borderRadius: '40px',
    position: 'relative',
    minWidth: 'auto',
    marginLeft: '10px',
    transition: '0.5s all',
    '&:hover': {
      background: 'none',
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  },
  profileMenu: {
    color: '#4d4d4d',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.2px',
    outline: 'none',
  },
  menuItem: {
    '&:hover': {
      background: '#F7F7F7',
    },
  },
  notification: {
    position: 'absolute',
    borderRadius: '20px',
    top: '0px',
    right: '0px',
    height: '16px',
    width: '16px',
    background: '#DE6262',
    fontFamily: 'Poppins',
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '17px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
  },
}));

export const Menu = styled.div`
  min-width: 146px;
  min-height: 100px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  cursor: default;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: #4d4d4d;
  top: 120%;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 5%);

  z-index: 10012391923912039102;
  text-transform: none;
  text-align: left;
  svg {
    color: #fff;
    position: absolute;
    bottom: 90%;
    left: 41%;
  }
`;

export const MenuItem = styled.h1`
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.5s all;
  &:hover,
  &:focus {
    background: #f7f7f7;
  }
`;

export const AvatarIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  outline: none;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  background-color: ${(props) => props.color};
`;

export default useStyles;
