import axios from 'axios';
import qs from 'qs';

// const API_URL = '';
const API_URL = 'http://dev.intelme.com.au';

export default class Api {
  constructor() {}

  // NOTIFICATIONS
  async getRecentProjects() {
    const res = await axios.get(
      `${API_URL}/api/pm/v1/projects/recent/due-tasks`
    );

    return res.data.result;
  }

  async getUserProfile({ username }) {
    const res = await axios.get(`${API_URL}/api/pm/v1/profiles/${username}`);

    if (res.status === 404) {
      throw Error('User not found');
    }
    return res.data;
  }

  async updateUserSetting(userdata) {
    const res = await axios.put(
      `${API_URL}/api/pm/v1/profiles/settings`,
      userdata
    );

    if (res.status !== 200) {
      throw Error('Unable to check for user status');
    }

    return res.data;
  }

  async updateUserProfile({ username }, body) {
    const res = await axios.put(
      `${API_URL}/api/iam/v1/tenantadmin/tenants/users/${username}`,
      body
    );

    if (res.status !== 200) {
      throw Error('Unable to check for user status');
    }

    return res.data;
  }

  async getUserOverview({ username }) {
    const res = await axios.get(
      `${API_URL}/api/pm/v1/projects/overview/${username}`
    );

    if (res.status === 404) {
      throw Error('User not found');
    }
    return res.data;
  }

  async getMessages({ read }) {
    const res = await axios.get(`${API_URL}/api/ntf/v1/message/received`, {
      params: { read },
    });
    return res.data.results.result;
  }

  async readMessage({ messageId }) {
    const res = await axios.put(`${API_URL}/api/ntf/v1/message/${messageId}`);

    return res.data;
  }

  async sendedMessages() {
    const res = await axios.get(`${API_URL}/api/ntf/v1/message/sended`);

    return res.data;
  }

  async sendedMessageDetail({ messageId }) {
    const res = await axios.get(
      `${API_URL}/api/ntf/v1/message/${messageId}sended`
    );

    return res.data;
  }

  async receivedMessageDetail({ messageId }) {
    const res = await axios.get(
      `${API_URL}/api/ntf/v1/message/${messageId}received`
    );

    return res.data;
  }

  async sendMessage({ body, recipientId }) {
    const res = await axios.post(`${API_URL}/api/ntf/v1/message/`, {
      body,
      recipientId,
    });

    if (res.status === 200) {
      return res.data;
    }

    throw Error('Login Error');
  }

  async getNotifications({ read }) {
    const res = await axios.get(`${API_URL}/api/ntf/v1/notification`, {
      params: {
        read,
      },
    });

    return res.data.result;
  }

  async readNotification({ notificationId }) {
    const res = await axios.put(
      `${API_URL}/api/ntf/v1/notification/${notificationId}`
    );

    return res.data;
  }

  async getPriorities() {
    const res = await axios.get(`${API_URL}/api/pm/v1/search/activity`);

    return res.data.results;
  }

  async getToken() {
    const res = await axios.get(`${API_URL}/api/iam/v1/token`);

    return res.data.context;
  }

  async refreshToken({ refreshToken }) {
    const res = await axios.post(`${API_URL}/api/iam/v1/token`, {
      refresh_token: refreshToken,
      update_login_cookie: true,
    });

    return res.data.token;
  }

  async getUserRoles({ username }) {
    const res = await axios.get(
      `${API_URL}/api/iam/v1/tenantadmin/tenants/users/${username}/roles`
    );
    return res.data;
  }

  async checkUserStatus() {
    const res = await axios.get(
      `${API_URL}/api/iam/v1/tenantadmin/tenants/users/state/status`
    );

    if (res.status !== 200) {
      throw Error('Unable to check for user status');
    }

    return res.data;
  }

  async checkAuthToken({ tenant, username, password }) {
    const res = await axios.post(`${API_URL}/api/iam/v1/auth/token`, {
      tenant,
      username,
      password,
    });

    if (res.status !== 200) {
      throw Error('Password incorrect');
    }

    return res.data;
  }

  async resetPassword({ username, password }) {
    const res = await axios.post(
      `${API_URL}/api/iam/v1/tenantadmin/tenants/users/${username}/reset_password`,
      {
        password,
      }
    );

    if (res.status !== 200) {
      throw Error('Unable to reset password');
    }
  }

  async forgotPassword({
    isReset,
    username,
    tenantId,
    email,
    activationCode,
    password,
  }) {
    const res = await axios.post(
      `${API_URL}/api/iam/v1/guest/forgot_password`,
      {
        username,
        tenantId,
        activationCode,
        password,
        email,
      },
      {
        params: { reset: isReset },
      }
    );

    return res.data;
  }

  async activateUser({ activationCode }) {
    const res = await axios.post(
      `${API_URL}/api/iam/v1/tenantadmin/tenants/users/state/activate`,
      {
        activationCode,
      }
    );

    if (res.status === 200) {
      return res.data;
    } else {
      throw Error('Unable to activate user');
    }
  }

  async login({ tenant, username, password, remember_me }) {
    const res = await axios.post(`${API_URL}/api/iam/v1/auth/login`, {
      tenant: tenant,
      username: username,
      password: password,
      remember_me: remember_me,
    });

    if (res.status === 200) {
      return res.data.token;
    }

    throw Error('Login Error');
  }

  async searchAll() {
    const res = await axios.get(
      `${API_URL}/api/workflow/v1/tenants/search-all`
    );

    return res.data;
  }

  async activity({ search }) {
    const res = await axios.get(`${API_URL}/api/pm/v1/search/activity`, {
      search,
    });

    return res.data;
  }

  async recentPeople() {
    const res = await axios.get(`${API_URL}/api/ntf/v1/message/recent_people`);

    return res.data;
  }

  async logout() {
    const res = await axios.post(`${API_URL}/api/iam/v1/auth/logout`);

    return res;
  }

  async getProjects() {
    const res = await axios.get(`${API_URL}/api/pm/v1/projects`);

    return res.data.result;
  }

  async getProject({ projectId }) {
    const res = await axios.get(`${API_URL}/api/pm/v1/projects/${projectId}`);

    return res.data;
  }

  async searchFiles({ projectId, revision, priority }) {
    const res = await axios.post(`${API_URL}/api/docstore/v1/search`, {
      projectId: projectId,
      revision: revision,
      priority: priority,
    });

    if (res.status !== 200) {
      throw Error('unable to Search files');
    }

    return res.data.result;
  }

  async getSettings({ username }) {
    const res = await axios.get(`${API_URL}/api/pm/v1/profiles/${username}`);

    return res.data;
  }
}

// APIS TO BE ADDED FOR THE DASHBOARD:
// /api/workflow/v1/tenants/search-all
// /api/pm/v1/search/activity
// /api/ntf/v1/message/recent_people
