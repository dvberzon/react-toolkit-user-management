export const groupSelector = (userId) => (state) => {
  const { groupsById } = state.groups;
  return groupsById[userId];
}