import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const teamListItemStyles = makeStyles(() => ({
  teamColor: {
    backgroundColor: (props) => props.color,
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    flex: '0 0 20px',
  },
  teamName: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    color: '#000000',
    letterSpacing: '-0.2px',
    flex: '0 0 248px',
    marginLeft: '16px',
  },
  teamGroup: {
    marginLeft: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > p': {
      fontFamily: 'Poppins',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '400',
      marginLeft: '4px',
    },
  },
  avatarGroup: {
    '& > div:not(:first-child)': {
      marginLeft: '-8px',
    },
  },
  teamAction: {
    flex: '0 0 79px',
    height: '24px',
    position: 'absolute',
    right: '0',
  },
  teamActionBtnIcon: {
    width: '10px',
    height: '10px',
    marginRight: '5px',
  },
}));

export default teamListItemStyles;

export const TeamListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 32px;
  position: relative;
`;
