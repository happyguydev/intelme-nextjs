import React, { useState } from 'react';

import ChangePassword from '../change-password';
import UserEditPanel from './user-edit-panel';

const AccountPanel = ({ userDetail }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handlePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  return (
    <>
      {!showChangePassword ? (
        <UserEditPanel userDetail={userDetail} onClick={handlePassword} />
      ) : (
        <ChangePassword onShowChangePassword={handlePassword} />
      )}
    </>
  );
};

export default AccountPanel;
