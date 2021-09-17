import { nanoid } from "@reduxjs/toolkit";

function addUser(user) {
  // TODO call post `api/users`
  // api would return user with id populated
  const id = nanoid();
  return Promise.resolve({
    ...user,
    id,
  })
};

export default addUser;