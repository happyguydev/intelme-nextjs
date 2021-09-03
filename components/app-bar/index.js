import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  NotificationsOutlined,
  ChatBubbleOutlineOutlined,
  ArrowDropUp,
} from '@material-ui/icons';
import { BsStar } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

import useStyles, { AvatarIcon, Menu, MenuItem } from './styles';
import SearchBar from '../search-bar';
import Dropdown from './list';

import { getUserProfile, logout } from '../../store/actions/auth';
import { getMessages } from '../../store/actions/messages';
import { getNotifications } from '../../store/actions/notifications';
import { getPriorities } from '../../store/actions/priorities';
import { FiChevronRight } from 'react-icons/fi';

const AppBar = () => {
  const styles = useStyles();
  const [cookies] = useCookies(['intelme']);
  const store = useStore();
  const dispatch = useDispatch();
  const router = useRouter();
  const { notifications } = useSelector((state) => state.notifications);
  const { messages } = useSelector((state) => state.messages);
  const { priorities } = useSelector((state) => state.priorities);
  const { profile } = useSelector((state) => state.auth);

  const [visibleNotifications, setVisibleNotifications] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(false);
  const [visiblePriority, setVisiblePriority] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(async () => {
    const { username } = cookies;
    dispatch(getMessages());
    dispatch(getNotifications());
    dispatch(getUserProfile({ username }));
    dispatch(getPriorities());
  }, []);

  const onClickLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  const showMenu = () => {
    setMenu(true);
  };

  const showNotifications = () => {
    setVisibleNotifications(true);
  };

  const showMessages = () => {
    setVisibleMessages(true);
  };

  const showPriority = () => {
    setVisiblePriority(true);
  };

  const newNotifications = store.getState().notifications?.notifications
    ?.length;
  const newMessages = store.getState().messages?.messages?.length;
  const userProfileColor = store.getState().auth?.profile?.settings?.color;
  const { firstName, lastName } = profile;

  return (
    <div className={styles.appBar}>
      <SearchBar />
      <div className={styles.actionBar}>
        <Button
          className={styles.button}
          onClick={showNotifications}
          onBlur={() => setVisibleNotifications(false)}
        >
          <NotificationsOutlined className={styles.bellIcon} />
          {newNotifications > 0 ? (
            <div className={styles.notification}> {newNotifications}</div>
          ) : null}
          <Dropdown
            visible={visibleNotifications}
            result={notifications}
            emptyText="You have no notifications."
            footerLink="/notifications/all"
            footerText="See all notifications"
          />
        </Button>

        <Button
          className={styles.button}
          onClick={showMessages}
          onBlur={() => setVisibleMessages(false)}
        >
          <HiOutlineMail className={styles.messageIcon} />

          {newMessages > 0 ? (
            <div className={styles.notification}> {newMessages}</div>
          ) : null}
          <Dropdown
            visible={visibleMessages}
            emptyText="You have no messages."
            headerButtonText="New Message"
            hasHeader
            result={messages}
            buttonIcon={<ChatBubbleOutlineOutlined />}
            headerOnClick={() => console.log('Hello World')}
            footerLink="/messages/all"
            footerText="See all messages"
          />
        </Button>

        <Button
          className={styles.button}
          onClick={showPriority}
          onBlur={() => setVisiblePriority(false)}
        >
          <BsStar className={styles.starIcon} />

          <Dropdown
            visible={visiblePriority}
            hasAction
            result={priorities}
            emptyText="Your priority list is empty."
            footerLink="/priorities/all"
            footerText="See all priorities"
          />
        </Button>

        <Button
          className={styles.profile}
          onClick={showMenu}
          onBlur={() => setMenu(false)}
        >
          <AvatarIcon color={`#${userProfileColor}`}>
            {firstName?.charAt(0)}
            {lastName?.charAt(0)}
          </AvatarIcon>
          {menu ? (
            <Menu>
              <ArrowDropUp />
              <MenuItem
                onClick={() => router.push('/settings')}
                style={{ marginTop: '12px' }}
              >
                Settings
              </MenuItem>
              <MenuItem onClick={onClickLogout}>Logout</MenuItem>
            </Menu>
          ) : null}
        </Button>
      </div>
    </div>
  );
};

export default AppBar;
