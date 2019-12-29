export const addStorage = (value, storageName) => {
  if (process.browser) {
    let data = getStorage(storageName);

    data.push(value);

    localStorage.setItem(storageName, JSON.stringify(data));
  }
};

export const removeStorage = (id, storageName) => {
  if (process.browser) {
    let data = getStorage(storageName);

    data = data.filter(item => item.id != id);

    localStorage.setItem(storageName, JSON.stringify(data));
  }
};

export const updateStorage = (value, storageName) => {
  if (process.browser) {
    let data = getStorage(storageName);

    data = data.map(item => (item._id === value.id ? value : item));

    localStorage.setItem(storageName, JSON.stringify(data));
  }
};

export const getStorage = storageName => {
  if (process.browser) {
    return JSON.parse(localStorage.getItem(storageName)) || [];
  }
};
