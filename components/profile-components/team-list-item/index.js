import React from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import Button from '../../button';
import Avatar from '../../avatar';

import teamListItemStyles, { TeamListItemContainer } from './style';
import { Typography } from '@material-ui/core';

const TeamListItem = ({ teamDetail }) => {
  const props = {
    color: `#${teamDetail.color ? teamDetail.color : '089BAB'}`,
  };

  const teamListItemStyle = teamListItemStyles(props);

  return (
    <TeamListItemContainer>
      <div className={teamListItemStyle.teamColor} />
      <div className={teamListItemStyle.teamName}>{teamDetail.name}</div>
      <div className={teamListItemStyle.teamGroup}>
        <AvatarGroup className={teamListItemStyle.avatarGroup} max={3}>
          {teamDetail.members.result.map((team, index) => {
            return <Avatar key={index} userDetails={team} />;
          })}
        </AvatarGroup>
        <Typography>
          {teamDetail.members.result.length <= 3
            ? teamDetail.members.result.length +
              (teamDetail.members.result.length == 1 ? ' member' : ' members')
            : '+ ' + teamDetail.members.result.length - 3 + ' others'}
        </Typography>
      </div>
      <div className={teamListItemStyle.teamAction}>
        <Button
          custom
          background="#FFF0E8"
          color="#FF8A47"
          width="79px"
          borderRadius="16px"
        >
          <SettingsOutlinedIcon
            className={teamListItemStyle.teamActionBtnIcon}
          />
          Button
        </Button>
      </div>
    </TeamListItemContainer>
  );
};

export default TeamListItem;
