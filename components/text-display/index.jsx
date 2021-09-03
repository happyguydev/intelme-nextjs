import React, { useState } from 'react';

import textStyles from './styles';

const TextDisplay = ({ text, charNumber }) => {
  const [display, setDisplay] = useState('none');

  const props = { display };

  const styles = textStyles(props);

  const onHover = () => {
    if (text.length > charNumber) setDisplay('flex');
  };

  const onMouseLeave = () => {
    setDisplay('none');
  };

  return (
    <div className={styles.textContainer}>
      <span onMouseLeave={onMouseLeave} onMouseOver={onHover}>
        {text.length > charNumber
          ? text.substr(0, charNumber - 1) + '...'
          : text}
      </span>
      <span className={styles.longString}>{text}</span>
    </div>
  );
};

export default TextDisplay;
