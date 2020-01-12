export default (data, prop, toFind) =>
  data.filter(item => item[prop] === toFind)[0];
