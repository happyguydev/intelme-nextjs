import React from 'react';

import { labelStyles, LabelComponent } from './styles';

const Label = ({ children, color }) => {
  const props = {
    children,
    color,
  };

  const styles = labelStyles(props);

  return (
    <>
      <LabelComponent className={styles.labelContainer}>
        {children}
      </LabelComponent>
    </>
  );
};

export default Label;
