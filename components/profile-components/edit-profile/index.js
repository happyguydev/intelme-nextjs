import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import AccountPanel from '../account-panel';
import KeywordPanel from '../keyword-panel';

import editProfileStyles, { AntTabs, AntTab } from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const EditProfile = ({ userDetail }) => {
  const editProfileStyle = editProfileStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={editProfileStyle.root}>
      <div>
        <AntTabs value={value} onChange={handleChange}>
          <AntTab label="Account" />
          <AntTab label="Keywords" />
        </AntTabs>

        <TabPanel value={value} index={0}>
          <div className={editProfileStyle.tabContainer}>
            <AccountPanel userDetail={userDetail} />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={editProfileStyle.tabContainer}>
            <KeywordPanel
              userDetail={userDetail}
              disciplines={
                userDetail.settings.disciplines.length > 0 &&
                userDetail.settings.disciplines[0].keywords
              }
            />
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default EditProfile;
