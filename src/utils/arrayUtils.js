// return a copy of an array with the value removed or added
// depending on whether the value was present
export function toggleValueInArray(array, value) {
  if (!array || !value) return array;
  if (array.includes(value)) {
    return array.filter((entry) => entry !== value);
  }
  return [...array, value];
}