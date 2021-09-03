import Image from 'next/image';
import React from 'react';
import avatarStyles from './styles';

const Avatar = ({ userDetails, width, height, fontSize, showName }) => {
  const props = {
    background: `#${
      userDetails.settings.color ? userDetails.settings.color : '#5DDB6A'
    }`,
    teams: userDetails.settings.teams,
    userDetails,
    width,
    height,
    fontSize,
    showName,
  };
  const styles = avatarStyles(props);

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar}>
        {!userDetails.settings.avatar ? (
          <>
            {userDetails.firstName?.charAt(0)}
            {userDetails.lastName?.charAt(0)}
          </>
        ) : (
          <div className={styles.avatarImageContainer}>
            <Image
              src={userDetails.settings.avatar}
              width={width ? width : '20px'}
              height={height ? height : '20px'}
            />
          </div>
        )}
      </div>
      {showName && (
        <div className={styles.avatarName}>
          {userDetails.firstName} {userDetails.lastName}
        </div>
      )}
    </div>
  );
};

export default Avatar;
