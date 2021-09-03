import React from 'react';
import { LabelComponent, LabelContainer } from './styles';

const Label = ({ value }) => {
  return (
    <LabelContainer>
      <LabelComponent>{value}</LabelComponent>
      <span>+ 2</span>
    </LabelContainer>
  );
};

export default Label;
