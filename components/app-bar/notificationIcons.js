import {
  FiUsers,
  FiUser,
  FiMessageCircle,
  FiFile,
  FiCheckCircle,
  FiPenTool,
} from 'react-icons/fi';

import { AiOutlineCheckCircle } from 'react-icons/ai';

export const notificationIcons = [
  {
    type: 'Team',
    icon: <FiUsers />,
  },
  {
    type: 'Member',
    icon: <FiUser />,
  },
  {
    type: 'Comment',
    icon: <FiMessageCircle />,
  },
  {
    type: 'Project',
    icon: <FiFile />,
  },
  {
    type: 'File',
    icon: <FiFile />,
  },
  {
    type: 'task',
    icon: <AiOutlineCheckCircle />,
  },
  {
    type: 'Activity',
    icon: <AiOutlineCheckCircle />,
  },
  {
    type: 'Discipline',
    icon: <FiPenTool />,
  },
];
