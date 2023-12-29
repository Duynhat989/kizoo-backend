const db = require("../utils/db");
const { Sequelize, DataTypes } = require("sequelize");
var sequelize = db.sequelize;
//-----------------------------
const Img = sequelize.define("Imgs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_post: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    allowNull: true,
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1,
  },
});
async function register(url) {
  const newStore = await Img.create({
    src: url,
});
return newStore;
  try {
    
  } catch (error) {
    return null;
  }
}
async function update(id,id_post) {
    try {
      await Img.update({
        id_post: id_post, 
      }, {
        where: {
          id: id
        }
      });
      return true
    } catch (error) {
      return null;
    }
  }
  
async function list(id_post) {
  try {
    const staffs = await Img.findAll({
        where: { id_post: id_post},
      });
    return staffs;
  } catch (error) {
    return null;
  }
}
module.exports = {
  register,
  update,
  list
};
