import React, { Fragment } from 'react';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import {
  ArrowDropUp,
  ChatBubbleOutlined,
  EditOutlined,
  FileCopyOutlined,
  InsertDriveFileRounded,
  Star,
} from '@material-ui/icons';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Markup } from 'interweave';

import useStyles, {
  ActionButton,
  ListContainer,
  ListFooter,
  ListHeader,
} from './styles';
import { enAU } from 'date-fns/locale';
import { notificationIcons } from '../notificationIcons';

const Dropdown = ({
  visible,
  footerLink,
  footerText,
  hasHeader,
  headerButtonText,
  buttonIcon,
  headerOnClick,
  hasAction,
  onClickAction,
  result,
  emptyText,
}) => {
  const styles = useStyles();

  return (
    <>
      {visible ? (
        <ListContainer>
          {!hasHeader ? (
            <ArrowDropUp className={styles.arrow} />
          ) : (
            <ArrowDropUp className={styles.arrowWithHeader} />
          )}
          {hasHeader ? (
            <ListHeader>
              <div className={styles.headerButton} onClick={headerOnClick}>
                {buttonIcon} {headerButtonText}
              </div>
            </ListHeader>
          ) : null}
          <List dense={false} disablePadding className={styles.list}>
            {result?.length === 0 ? (
              <div className={styles.emptyText}>{emptyText}</div>
            ) : (
              <>
                {result?.map((item) => (
                  <Fragment key={item.id}>
                    {!item.targetType && !hasAction ? (
                      <ListItem
                        className={!item.read ? styles.unreadItem : styles.Item}
                        disableGutters
                      >
                        <ListItemIcon>
                          <ChatBubbleOutlined />
                        </ListItemIcon>
                        <ListItemText
                          className={styles.ItemText}
                          primary={
                            <div>
                              <h3>
                                {item.senderDetails.firstName}{' '}
                                {item.senderDetails.lastName}
                              </h3>
                              <span>
                                {item.body.length > 50
                                  ? item.body.substring(0, 24) + '&hellip;'
                                  : item.body}
                              </span>
                            </div>
                          }
                          secondary={format(
                            parseISO(item.createdAt.replace('Z', '')),
                            "hh':'mmaaa cccc",
                            { locale: enAU }
                          )}
                        />
                      </ListItem>
                    ) : !hasAction ? (
                      <ListItem
                        className={!item.read ? styles.unreadItem : styles.Item}
                        disableGutters
                      >
                        <ListItemIcon>
                          {
                            notificationIcons.find(
                              (notType) => notType.type === item.targetType
                            )?.icon
                          }
                        </ListItemIcon>
                        <ListItemText
                          className={styles.ItemText}
                          primary={<Markup content={item.body} />}
                          secondary={format(
                            parseISO(item.createdAt.replace('Z', '')),
                            "hh':'mmaaa cccc",
                            { locale: enAU }
                          )}
                        />
                      </ListItem>
                    ) : (
                      <ListItem
                        className={!item.read ? styles.unreadItem : styles.Item}
                        disableGutters
                      >
                        <ListItemIcon>
                          {
                            notificationIcons.find(
                              (notType) => notType.type === item.type
                            )?.icon
                          }
                        </ListItemIcon>
                        <ListItemText
                          className={styles.ItemText}
                          primary={
                            <div>
                              <h3>{item.name}</h3>
                              <span>{item.project[0].name}</span>
                            </div>
                          }
                          secondary={format(
                            parseISO(item.createdAt.replace('Z', '')),
                            "hh':'mmaaa cccc",
                            { locale: enAU }
                          )}
                        />
                        <ListItemSecondaryAction>
                          <ActionButton
                            aria-label="priority"
                            onClick={onClickAction}
                          >
                            <Star />
                          </ActionButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Fragment>
                ))}
              </>
            )}
          </List>
          <ListFooter>
            <Link href={footerLink}>{footerText}</Link>
          </ListFooter>
        </ListContainer>
      ) : null}
    </>
  );
};

export default Dropdown;
