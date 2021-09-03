import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles({
  body: {
    backgroundColor: '#089BAB',
    height: 'auto',
  },
  divider: {
    backgroundColor: 'white',
    marginLeft: '32px',
    marginRight: '45px',
  },
  selectedOption: {
    color: '#089BAB',
    borderRadius: '30px 0px 0px 30px',
    fontWeight: 500,
    '&::after': {},
  },
});

export default useStyles;

export const MenuContainer = styled.div`
  position: fixed;
  background: #089bab;
  height: 100%;
  transition: 0.5s all;
  min-width: 208px;
  svg {
    font-size: 20px;
    margin-right: 8px;
  }
`;

export const Item = styled.div`
  margin-left: 18px;
  margin-bottom: 32px;
  padding: 12px 14px;
  color: #edf5f6;
  cursor: pointer;
  font-weight: normal;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  border-radius: 25px 0px 0px 25px;
  transition: 0.5s all;
  display: flex;
  align-items: center;
  svg {
    color: #edf5f6;
  }
  &:hover {
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;

export const SelectedItem = styled.div`
  color: #089bab;
  background: #edf5f6;
  position: relative;
  padding: 12px 14px;
  border-radius: 25px 0px 0px 25px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 18px;
  margin-bottom: 32px;
  &::after {
    cursor: default;
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    left: 160px;
    bottom: 48px;
    background-color: transparent;
    background: radial-gradient(circle at top left, #089bab 30px, #edf5f6 31px);
    box-shadow: 2px 25px 0px 0px #edf5f6;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: transparent;
    height: 30px;
    width: 30px;
    bottom: -30.2px;
    background: radial-gradient(
      circle at bottom left,
      #089bab 30px,
      #edf5f6 31px
    );
    right: 0px;
    box-shadow: 3px -25px 0px 0px #edf5f6;
  }
`;

export const MenuHeader = styled.div`
  padding: 1.5rem 2em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const BottomOptions = styled.div`
  padding-top: 10rem;
  @media (max-height: 800px) {
    padding-top: 0px;
  }
  > div:nth-child(2) {
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;
