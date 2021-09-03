import React, { useState } from 'react';
import Image from 'next/image';
import useStyles from './styles';

const SearchBar = () => {
  const styles = useStyles();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for anything..."
        className={styles.input}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />

      <div className={styles.eyeglass}>
        <Image
          src="/frontend-dev/icons/eyeglass.svg"
          height="24px"
          width="24px"
        />
      </div>

      {isActive && <button className={styles.button}>Search</button>}
    </div>
  );
};

export default SearchBar;
