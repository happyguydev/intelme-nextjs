import React from 'react';
import useStyles from './styles';

const Status = ({ status }) => {
  const styles = useStyles();

  return (
    <>
      {status === 'Active' ? (
        <span className={styles.active}>Active</span>
      ) : (
        <span className={styles.onHold}>On Hold</span>
      )}
    </>
  );
};

export default Status;
