const storeLocalStorageValue = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageValue = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export { storeLocalStorageValue, getLocalStorageValue };
