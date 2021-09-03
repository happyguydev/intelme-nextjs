import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Stars = makeStyles({
  emptyStar: {
    color: '#DBDBDB',
  },
});

export const PriorityComponent = styled.div`
  position: relative;
  color: #d4af37;

  svg {
    margin: 0px auto;
    width: 24px;
    height: 24px;
  }
`;

const Modal = styled.div`
  position: absolute;
`;
