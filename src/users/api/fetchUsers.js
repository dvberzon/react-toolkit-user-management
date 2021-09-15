import dummyUsers from './dummyUsers';

function fetchUsers() {
  // TODO call get `api/users`
  return Promise.resolve(dummyUsers)
};

export default fetchUsers;