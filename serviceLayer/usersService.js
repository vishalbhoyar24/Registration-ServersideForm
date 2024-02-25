const usersDao = require("../dataAccessObject/usersDao");

const createUser = async (dataObj) => {
  const result = await usersDao.createUser(dataObj);
  return result;
};

const updateUser = async (id, dataObj) => {
  const result = await usersDao.updateUser(id, dataObj);
  return result;
};

const deleteUser = async (id) => {
  const result = await usersDao.deleteUser(id);
  return result;
};

const getUser = async () => {
  const result = await usersDao.getUser();
  return result;
};

module.exports = { createUser, updateUser, deleteUser, getUser };
