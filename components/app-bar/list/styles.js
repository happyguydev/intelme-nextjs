import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  Item: {
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '24px',
    background: '#FFFFFF',
    marginBottom: '6px',
    transition: '0.7s ease-in-out',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      background: '#F7F7F7',
    },
  },
  unreadItem: {
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px',
    paddingRight: '24px',
    background: '#EDF5F6',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: '0.3s ease-in-out',
    '&:hover': {
      background: '#F7F7F7',
    },
  },
  arrow: {
    color: '#fff',
    left: '92.5%',
    fontSize: '42px',
    color: '#fff',
    bottom: '96%',
    position: 'absolute',
    transform: 'translateX(-50%)',
  },
  arrowWithHeader: {
    color: '#fff',
    left: '92.5%',
    fontSize: '42px',
    color: '#fff',
    bottom: '89%',
    position: 'absolute',
    transform: 'translateX(-50%)',
  },
  headerButton: {
    height: '24px',
    background: '#FF8A47',
    borderRadius: '4px',
    lineHeight: '16px',
    fontSize: '12px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    transition: '0.3s all',
    cursor: 'pointer',
    '&:hover': {
      background: '#df7131',
    },
  },
  emptyText: {
    height: '72px',
    margin: '16px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    borderRadius: '4px',
    background: '#F7F7F7',
  },

  list: {
    overflowY: 'auto',
    maxHeight: '390px',
  },
}));

export const ListContainer = styled.div`
  width: 530px;
  max-height: 524px;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));
  position: absolute;
  transition: 1s all;
  z-index: 9999;
  right: -60%;
  top: 150%;
  padding: 24px;
  text-transform: none;
  color: #4d4d4d;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  align-items: center;
  letter-spacing: -0.2px;

  cursor: default;

  .MuiTypography-body1 {
    font-weight: normal;
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
    letter-spacing: -0.2px;
    transition: 0.3s ease-in-out;
    div {
      h3 {
        font-weight: 500;
      }
      a {
        font-weight: 500;
        &:hover {
          color: #089bab;
        }
      }
    }
  }

  .MuiTypography-body2 {
    font-weight: normal;
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }

  .MuiListItemIcon-root {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #858383;
  }
  .MuiListItemText-multiline {
    margin: 0;
  }
`;

export const ActionButton = styled.div`
  cursor: pointer;
  color: #d4af37;
  border-radius: 40px;
  transition: 0.5s all;
  font-size: 12px;
  line-height: 16px;
  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 8px;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

export const ListFooter = styled.div`
  float: right;
  margin-right: 6px;
  color: #ff8a47;
  font-size: 12px;
  line-height: 16px;
  margin-top: 8px;
  transition: 0.2s all;
  &:hover {
    color: #df7131;
  }
`;

export default useStyles;
