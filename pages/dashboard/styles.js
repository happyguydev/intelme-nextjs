import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const managerStyles = makeStyles({
  //EMPTY STATE
  dashboardContainer: {},
  emptyProject: {
    position: 'relative',
    backgroundColor: '#ffff',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    display: 'flex',
    width: '736px',
    height: '384px',
    backgroundImage: 'url(/frontend-dev/person-chart.svg)',
    backgroundSize: 'contain',
  },

  wrapper: {
    width: 'auto',
    height: 'auto',
    marginLeft: '208px',
  },
  textContainer: {},

  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '24px',
    color: '#089BAB',
    lineHeight: '24px',
    marginBottom: '16px',
    marginTop: '24px',
    marginLeft: '24px',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginLeft: '24px',
    color: '#4d4d4d',
    fontSize: '12px',
    lineHeight: '16px',
  },

  addProject: {
    color: '#089BAB',
    border: '1.5px dashed',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#017D8A',
      outline: 'none',
      backgroundColor: '#fff',
    },
  },
  addProjectButton: {
    color: '#089BAB',
    textTransform: 'none',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 500,

    margin: '74px 0px 74px 86px',
    '&:hover': {
      color: '#017D8A',
      outline: 'none',
      backgroundColor: '#fff',
    },
    '&:focus': {
      color: '#017D8A',
      outline: 'none',
      backgroundColor: '#fff',
    },
    '&:active': {
      color: '#017D8A',
      outline: 'none',
      backgroundColor: '#fff',
    },
  },
  addProjectSpan: {
    color: '#089BAB',
  },
  plusIcon: {
    width: '32px',
    height: '32px',
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const PeopleContainer = styled.div`
  width: 352px;
  height: 444px;
  background: #ffffff;
  background-image: url('/frontend-dev/empty-team-background.svg');
  background-size: contain;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-left: 32px;
  @media (max-width: 1366px) {
    width: 270px;
  }

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #089bab;
    margin: 24px 0px 16px 24px;
  }
  h2 {
    margin-left: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: #4d4d4d;
  }
`;

export const AddProject = styled.button`
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  color: #089bab;
  transition: 0.3s all;
  margin: 74px 0px 0px 86px;

  &:focus,
  &:hover,
  &:active {
    color: #017d8a;
    outline: none;
    background: #fff;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 120px;
      height: 120px;
      padding: 40px;
      border: 1.5px dashed;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  }
`;
