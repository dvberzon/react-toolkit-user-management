import { nanoid } from "@reduxjs/toolkit";

function addGroup(group) {
  // TODO call post `api/groups`
  // api would return group with id populated
  const id = nanoid();
  return Promise.resolve({
    ...group,
    id,
  })
};

export default addGroup;