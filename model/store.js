const db = require("../utils/db");
const { Sequelize, DataTypes } = require("sequelize");
var sequelize = db.sequelize;
//-----------------------------
const Store = sequelize.define("Store", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avata: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  phonenumber: {
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
// sequelize.sync({ force: true }).then(() => {
//   console.log('Bảng đã được tạo hoặc cập nhật.');
// });
async function register(name,id_user) {
  try {
    const newStore = await Store.create({
      name: name,
      id_user:id_user
    });
    return newStore
  } catch (error) {
    return null;
  }
}
async function update(name,id_user) {
  try {
    await Store.update({
      column1: 'new value', 
      column2: 'another value'
    }, {
      where: {
        id: 123
      }
    });
    const newStore = await Store.create({
      name: name,
      id_user:id_user
    });
    return newStore
  } catch (error) {
    return null;
  }
}

async function list(id_user) {
  try {
    const stores = await Store.findAll({
      where: { id_user: id_user},
    });
    if (stores) {
      return stores
    } else {
      return null
    }
  } catch (error) {
    return null;
  }
}
async function findOne(id_store) {
  const user = await Store.findOne({
    where: { id: id_store },
  });
  if (user) {
    return user;
  } else {
    return null;
  }
}
module.exports = {
  register,
  list,
  findOne
};
