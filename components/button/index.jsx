import React from 'react';
import { buttonStyles, ButtonComponent } from './styles';

const Button = ({
  primary,
  primarySmall,
  secondary,
  secondarySmall,
  custom,
  children,
  background,
  color,
  borderRadius,
  width,
  height,
  onClick,
}) => {
  const props = {
    background,
    color,
    borderRadius,
    width,
    height,
  };

  const styles = buttonStyles(props);

  return (
    <>
      {primary ? (
        <ButtonComponent onClick={onClick} className={styles.primary}>
          {children}
        </ButtonComponent>
      ) : primarySmall ? (
        <ButtonComponent onClick={onClick} className={styles.primarySmall}>
          {children}
        </ButtonComponent>
      ) : secondary ? (
        <ButtonComponent onClick={onClick} className={styles.secondary}>
          {children}
        </ButtonComponent>
      ) : secondarySmall ? (
        <ButtonComponent onClick={onClick} className={styles.secondarySmall}>
          {children}
        </ButtonComponent>
      ) : custom ? (
        <ButtonComponent onClick={onClick} className={styles.custom}>
          {children}
        </ButtonComponent>
      ) : null}
    </>
  );
};

export default Button;
