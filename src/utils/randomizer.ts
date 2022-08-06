export const getRandomNumber = (min: number, max: number): number => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};
