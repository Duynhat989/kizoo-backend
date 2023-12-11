const db = require("../utils/db");
const { Sequelize, DataTypes } = require("sequelize");
var sequelize = db.sequelize;
const Store = require("./store");
//-----------------------------
const Menu = sequelize.define("Menu", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_store: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  address_1: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  address_2: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  avata: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1,
  },
});
function register(id_store) {
  return new Promise(async (resolve, reject) => {
    try {
      var newMenu = await Menu.create({
        id_store: id_store,
      });
      console.log(newMenu);
      return resolve(newMenu);
    } catch (error) {
      return reject(error);
    }
  });
}
// const register = async (id_store) => {
//   try {
//     var newStore = await Menu.create({
//       id_store: id_store,
//     });
//     if (newStore) {
//       return newStore;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     return null;
//   }
// };
async function list(id_store) {
  try {
    const staffs = await Menu.findAll({
      where: { id_store: id_store },
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
