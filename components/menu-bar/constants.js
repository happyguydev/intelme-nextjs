import React from 'react';
import { FiHome, FiPieChart } from 'react-icons/fi';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export const MenuBarOptions = [
  {
    label: 'Dashboard',
    selectedIcon: <FiHome color="primary" />,
    neutralIcon: <FiHome color="secondary" />,
    link: '/dashboard',
  },
  {
    label: 'My Tasks',
    selectedIcon: <CheckCircleOutlineOutlinedIcon color="primary" />,
    neutralIcon: <CheckCircleOutlineOutlinedIcon color="secondary" />,
    link: '/tasks',
  },
  {
    label: 'My Projects',
    selectedIcon: <InsertDriveFileOutlinedIcon color="primary" />,
    neutralIcon: <InsertDriveFileOutlinedIcon color="secondary" />,
    link: '/projects',
  },
  {
    label: 'People',
    selectedIcon: <PeopleAltOutlinedIcon color="primary" />,
    neutralIcon: <PeopleAltOutlinedIcon color="secondary" />,
    link: '/people',
  },
  {
    label: 'Statistics',
    selectedIcon: <FiPieChart color="primary" />,
    neutralIcon: <FiPieChart color="secondary" />,
    link: '/statistics',
  },
];

export const MenuBarBottomOptions = [
  {
    label: 'Help',
    selectedIcon: <HelpOutlineOutlinedIcon color="primary" />,
    neutralIcon: <HelpOutlineOutlinedIcon color="secondary" />,
    link: '/help',
  },
  {
    label: 'Settings',
    selectedIcon: <SettingsOutlinedIcon color="primary" />,
    neutralIcon: <SettingsOutlinedIcon color="secondary" />,
    link: '/settings',
  },
];
