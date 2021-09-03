import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import cardProfileStyles from './style';
import Card from '../../card';
import Line from '../../line';
import Avatar from '../../avatar';
import Api from '../../../api';

const CardProfile = ({ userDetail }) => {
  const styles = cardProfileStyles();

  const api = new Api();
  const [projectActive, setProjectActives] = useState(0);
  const [projectCompletes, setProjectCompletes] = useState(0);

  useEffect(async () => {
    const username = userDetail.username;
    api.getUserOverview({ username }).then((res) => {
      setProjectActives(res.active);
      setProjectCompletes(res.completed);
    });
  }, []);

  return (
    <div className={styles.cardProfileContainer}>
      <Card>
        <div className={styles.userImage}>
          <Avatar
            userDetails={userDetail}
            width="144"
            height="144"
            fontSize="66"
          />
        </div>

        <div className={styles.userName}>
          {userDetail.firstName + ' ' + userDetail.lastName}
        </div>

        <div className={styles.userCompany}>
          {userDetail.settings.location != null && userDetail.settings.location}
        </div>

        <div className={styles.userEmail}>{userDetail.email}</div>

        <div style={{ display: 'none' }}>
          {/*<div>*/}
          <Line color="#F0F0F0" />

          <div className={styles.connectedAccountsTitle}>
            Connected accounts
          </div>
          <div className={styles.accountList}>
            <div className={styles.accountItem}>
              <Image
                width="32px"
                height="32px"
                src={'/frontend-dev/google-flat-color-icon.svg'}
              />
              <div className={styles.accountName}>Adam Springfield</div>
              <div className={styles.accountConnectedBadge}>
                <span>connected</span>
              </div>
            </div>
            <div className={styles.accountItem}>
              <Image
                width="32px"
                height="32px"
                src={'/frontend-dev/account-icon-1.svg'}
              />
              <div className={styles.accountName}>Adam Springfield</div>
              <div className={styles.accountConnectedBadge}>
                <span>connected</span>
              </div>
            </div>
            <div className={styles.accountItem}>
              <Image
                width="32px"
                height="32px"
                src={'/frontend-dev/account-icon-2.svg'}
              />
              <div className={styles.accountUnconnectedBadge}>
                <span>connect</span>
              </div>
            </div>
          </div>
        </div>

        <Line color="#F0F0F0" />

        <div>
          <div className={styles.projectItem}>
            <div className={styles.projectStatusTitle}>Project Active</div>
            <div className={styles.projectValue}>{projectActive}</div>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.projectStatusTitle}>Projects completed</div>
            <div className={styles.projectValue}>{projectCompletes}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardProfile;
