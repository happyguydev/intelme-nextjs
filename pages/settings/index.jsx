import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useStore } from 'react-redux';

import MenuBar from '../../components/menu-bar';
import AppBar from '../../components/app-bar';
import Breadcumb from '../../components/breadcumb/breadcumb';
import Wrapper from '../../components/wrapper';
import CardProfile from '../../components/profile-components/card-profile';
import EditProfile from '../../components/profile-components/edit-profile';

import { Container } from './styles';
import { getUserProfile } from '../../store/actions/auth';

const Settings = () => {
  const [cookies] = useCookies(['intelme']);
  const [userDetail, setUserDetail] = useState(null);
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const { username } = cookies;
    dispatch(getUserProfile({ username }));
    setUserDetail(store.getState().auth?.profile);
  }, []);

  return (
    <div className="h-auto flex bg-intelme">
      <MenuBar selected="Settings" />
      <Wrapper>
        <AppBar />
        <Breadcumb currentPage="Settings" />
        {userDetail && (
          <Container>
            <CardProfile userDetail={userDetail} />
            <EditProfile userDetail={userDetail} />
          </Container>
        )}
      </Wrapper>
    </div>
  );
};

export default Settings;
