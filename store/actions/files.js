import Api from '../../api';
import { SEARCH_FILES } from '../types';

const api = new Api();

export const searchFiles = ({ revision, projectId, priority }) => async (
  dispatch
) => {
  const res = await api.searchFiles({
    priority: priority,
    projectId: projectId,
    revision: revision,
  });
  dispatch({
    type: SEARCH_FILES,
    payload: res,
  });
  return res;
};
