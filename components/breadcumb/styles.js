import styled from 'styled-components';

export const BreadCumbComponent = styled.div`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: #858383;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  transition: 0.4s all;
  a {
    text-decoration: underline;
    &:hover {
      color: #017d8a;
    }
  }
`;
