export const groupSelector = (groupId) => (state) => {
  const { groupsById } = state.groups;
  return groupsById[groupId];
}

export const allGroupsSelector = (state) => {
  const { groupsById, groupIds } = state.groups;
  return groupIds
    .map((id) => groupsById[id])
    .filter(Boolean);
}

export const groupsForIdsSelector = (ids) => (state) => {
  const { groupsById } = state.groups;
  return ids
    .map((id) => groupsById[id])
    .filter(Boolean);
}