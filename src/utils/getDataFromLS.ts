export const getDataFromLS = (type: string) => {
  return window.localStorage.getItem(type);
};
