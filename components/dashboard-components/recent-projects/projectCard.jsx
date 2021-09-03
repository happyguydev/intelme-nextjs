import { CloudSharp, PictureInPictureOutlined } from '@material-ui/icons';
import Image from 'next/image';
import React from 'react';
import { Card } from '../styles/recent-projects';

const ProjectCard = ({ project }) => {
  const {
    description,
    icon,
    name,
    id,
    number,
    status,
    updatedAt,
    dueTasks,
    address,
  } = project;

  const isDateBeforeToday = (date = new Date()) => {
    return date.toDateString() < updatedAt.toDateString();
  };

  return (
    <Card>
      <div>
        {!icon ? <PictureInPictureOutlined /> : <img src={icon} />}
        <span>
          {name}, {number}
        </span>
      </div>
      <ul>
        <li>updated today</li>
        <li>{dueTasks} tasks due</li>
        <li>
          {!address ? 'location' : address} {<CloudSharp />}
        </li>
      </ul>
      <p> {!status ? 'Active' : status} </p>
    </Card>
  );
};

export default ProjectCard;
