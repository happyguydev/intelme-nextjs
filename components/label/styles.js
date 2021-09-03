import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const labelStyles = makeStyles({
  labelContainer: {
    backgroundColor: (props) =>
      props.color === 'color-1'
        ? 'rgba(213, 165, 133, 0.2)'
        : props.color === 'color-2'
        ? 'rgba(99, 67, 51, 0.2)'
        : props.color === 'color-3'
        ? 'rgba(234, 193, 0, 0.2)'
        : props.color === 'color-4'
        ? 'rgba(239, 142, 159, 0.2)'
        : props.color === 'color-5'
        ? 'rgba(0, 197, 197, 0.2)'
        : 'rgba(143, 56, 221, 0.2)',
  },
});

export const LabelComponent = styled.div`
  width: 55px;
  color: #4d4d4d;
  letter-spacing: -0.2px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 4px 12px;
  border-radius: 16px;
`;
