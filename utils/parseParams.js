export default params => {
  params = params.split("-");
  return params[params.length - 1];
};
