// Obj key used to
export const localStorageKeys = {
  Trello: "trellodata",
  WeatherIo: "weatheriodata"
};

export const getStorage = (key) => {
  const storageItem = localStorage.getItem(key);
  try {
    return JSON.parse(storageItem);
  } catch (e) {
    return false;
  }
};

export const storeData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Trello

export const TrelloGetData = () => {
  return getStorage(localStorageKeys.Trello);
};
export const TrelloStore = (data) => {
  storeData(data, localStorageKeys.Trello);
};

// Weather Io

export const WeatherGetData = () => {
  return getStorage(localStorageKeys.WeatherIo);
};
export const WeatherDataStore = (data) => {
  storeData(data, localStorageKeys.WeatherIo);
};

// Backup

export const getBackupDataStr = () => {
  const dataObj = {};
  Object.keys(localStorageKeys).forEach((key) => {
    dataObj[key] = getStorage(localStorageKeys[key]);
  });
  return JSON.stringify(dataObj);
};

export const importBackupString = (jsonString, isObject) => {
  const dataObj = isObject ? jsonString : JSON.parse(jsonString);
  const keysArr = Object.keys(localStorageKeys);
  let responseObj = "";

  Object.keys(dataObj).forEach((key) => {
    if (keysArr.includes(key)) {
      storeData(dataObj[key], localStorageKeys[key]);
      responseObj += "Data for " + key + " item was imported\n";
    } else {
      console.warn("tried to import unknown object child of key:", key);
      responseObj += "unknown data for " + key + " item, not imported\n";
    }
  });

  return responseObj;
};
