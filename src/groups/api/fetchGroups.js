import dummyGroups from './dummyGroups';

function fetchGroups() {
  // TODO call get `api/groups`
  return Promise.resolve(dummyGroups)
};

export default fetchGroups;