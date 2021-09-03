import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Image from 'next/image';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useRouter } from 'next/router';
import { Add } from '@material-ui/icons';

import Api from '../../api';
import MenuBar from '../../components/menu-bar';
import AppBar from '../../components/app-bar';
import { Container } from '../../components/wrapper/styles';

import { SET_USER_ROLES } from '../../context/global/constants';
import { managerStyles, PeopleContainer, AddProject } from './styles';
import { getRecentProjects } from '../../store/actions/projects';
import RecentProjects from '../../components/dashboard-components/recent-projects';

const Dashboard = () => {
  const [cookies] = useCookies(['intelme']);
  const dispatch = useDispatch();
  const [role, setRole] = useState([]);
  const { recentProjects } = useSelector((state) => state.projects);

  const managerStyle = managerStyles();
  const api = new Api();
  const router = useRouter();
  const store = useStore();

  useEffect(() => {
    const { username } = cookies;
    api.getUserRoles({ username }).then((res) => {
      store.dispatch({
        type: SET_USER_ROLES,
        payload: res,
      });
      setRole(res);
    });

    dispatch(getRecentProjects());
  }, []);

  return (
    <div className="h-auto flex bg-intelme">
      {role.find((role) => role.name === 'team_manager') ? (
        <>
          <MenuBar selected="Dashboard" />
          <Container>
            <AppBar />
            <div className={managerStyle.dashboardContainer}>
              <div className="flex">
                <div className={managerStyle.emptyProject}>
                  <div className={managerStyle.textContainer}>
                    <h1 className={managerStyle.title}>Start here</h1>
                    <h2 className={managerStyle.subtitle}>
                      Create your first project.
                    </h2>
                    <AddProject>
                      <span>
                        <Add />
                        Add Project
                      </span>
                    </AddProject>
                  </div>
                </div>
                <PeopleContainer>
                  <h1>People</h1>
                  <h2>Here you can find your Team members</h2>
                </PeopleContainer>
              </div>

              <div>
                <RecentProjects recentProjects={recentProjects} />
              </div>
            </div>
          </Container>
        </>
      ) : (
        <>
          <MenuBar />
          <div className="w-full h-full">
            {/* <AppBar /> */}
            <div className="px-12">
              <div className="light-text text-xs">{`Dashboard > My Tasks`}</div>
              <div className="flex items-start">
                <Image
                  src="/frontend-dev/empty-tasks.svg"
                  width="776"
                  height="424"
                />
                <Image
                  src="/frontend-dev/empty-team.svg"
                  width="392"
                  height="484"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
