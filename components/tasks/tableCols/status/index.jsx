import { Check, CheckCircleOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import statusCheckbox from './styles';

const StatusCheckbox = ({ checked }) => {
  const styles = statusCheckbox();

  return (
    <>
      {!checked ? (
        <div className={styles.checkbox}>
          <Check />
        </div>
      ) : (
        <div className={styles.activeCheckbox}>
          <Check />
        </div>
      )}
    </>
  );
};

export default StatusCheckbox;
