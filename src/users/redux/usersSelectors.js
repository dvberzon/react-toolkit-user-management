export const userSelector = (userId) => (state) => {
  const { usersById } = state.users;
  return usersById[userId];
}