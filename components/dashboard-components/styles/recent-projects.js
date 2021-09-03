import styled from 'styled-components';

export const RecentProjectsContainer = styled.div`
  margin-top: 15px;
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #089bab;
  }
  .carousel {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 160px;
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  span {
    svg {
      margin-right: 10px;
    }
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #4d4d4d;
  }
  div {
    padding: 8px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
  &:hover {
    cursor: pointer;
  }
  ul {
    padding: 20px 30px;
    li {
      left: -10px;
      list-style: disc;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.2px;
      color: #858383;
    }

    svg {
      font-size: 12px;
      color: #a5a5a5;
    }
  }

  p {
    border-radius: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.2px;
    background: #deffe1;
    color: #2e9b39;
    margin-left: 8em;
    margin-right: 2em;
    text-align: center;
    padding: 2px;
    margin-bottom: 20px;
  }
`;
