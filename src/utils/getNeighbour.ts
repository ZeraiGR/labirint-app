export const getNeighbours = (target: string, arr: string[]): string[] => {
  const index = arr.indexOf(target);
  let resArr = [];

  const firstNeighbour = index > 0 ? arr[index - 1] : null;
  const secondNeighbour = index < arr.length - 1 ? arr[index + 1] : null;

  if (firstNeighbour !== null) {
    resArr.push(firstNeighbour);
  }

  if (secondNeighbour !== null) {
    resArr.push(secondNeighbour);
  }

  return resArr;
};
