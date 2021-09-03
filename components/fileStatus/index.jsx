import React from 'react';

import fileStatusStyles from './styles';

export const FileStatus = ({ value }) => {
  const styles = fileStatusStyles();

  return (
    <>
      {value === 'Approved' ? (
        <span className={styles.approved}>Approved</span>
      ) : value === 'Tender' ? (
        <span className={styles.tender}>Tender</span>
      ) : (
        <span className={styles.forReview}>For Review</span>
      )}
    </>
  );
};

export default FileStatus;
