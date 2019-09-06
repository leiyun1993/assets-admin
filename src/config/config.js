// default config
module.exports = {
  workers: 1,
  port:8361,
  jsonContentType: 'application/json', // json content type
  errnoField: 'code', // errno field
  errmsgField: 'msg', // errmsg field
  defaultErrno: 1004, // default errno
  validateDefaultErrno: 1001 // validate default errno
};
