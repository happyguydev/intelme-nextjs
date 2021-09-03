import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useStyles from './styles';

const DEFAULT = '/frontend-dev/icons/Checkbox_default.svg';
const HOVERED = '/frontend-dev/icons/Checkbox_hover.svg';
const CHECKED = '/frontend-dev/icons/Checkbox_checked.svg';
// const ERROR = "/frontend-dev/icons/Checkbox_error.svg";

const Checkbox = ({ value, handleChange }) => {
  const styles = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [currentSvg, setCurrentSvg] = useState(DEFAULT);

  useEffect(() => {
    if (value) {
      setCurrentSvg(CHECKED);
    } else if (isHovered) {
      setCurrentSvg(HOVERED);
    } else {
      setCurrentSvg(DEFAULT);
    }
  }, [isHovered, value]);

  return (
    <div className={styles.checkbox}>
      <Image
        src={currentSvg}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width="16px"
        height="16px"
        value={value}
        onClick={() => handleChange(!value)}
      />
    </div>
  );
};

export default Checkbox;
