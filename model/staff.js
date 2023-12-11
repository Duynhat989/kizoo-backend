const db = require("../utils/db");
const { Sequelize, DataTypes } = require("sequelize");
var sequelize = db.sequelize;
//-----------------------------
const Staff = sequelize.define("Staff", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_store: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1,
  },
});
async function register(id_store, id_user) {
  try {
    const newStore = await Staff.create({
      id_store: id_store,
      id_user: id_user,
    });
    return newStore;
  } catch (error) {
    return null;
  }
}
async function list(id_store) {
  try {
    const staffs = await Staff.findAll({
        where: { id_store: id_store},
      });
    return staffs;
  } catch (error) {
    return null;
  }
}
module.exports = {
  register,
  list,
};
