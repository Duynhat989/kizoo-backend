const db = require("../utils/db");
const { Sequelize, DataTypes } = require("sequelize");
var sequelize = db.sequelize;
//-----------------------------
const Post = sequelize.define("Posts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  face: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  upload: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'page',
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1,
  },
});
async function register(id_user, uid, start, end, time, text, face, upload,type) {
  const post = await Post.create({
    id_user: id_user,
    uid: uid,
    start: start,
    end: end,
    time: time,
    text: text,
    face: face,
    upload: upload,
    type: type,
  });
  return post;
  try {
   
  } catch (error) {
    return null;
  }
}
async function update(id, id_user, uid, start, end, time, text, face, upload,type) {
  try {
    await Post.update(
      {
        uid: uid,
        start: start,
        end: end,
        time: time,
        text: text,
        face: face,
        upload: upload,
        type: type,
      },
      {
        where: {
          id: id,
          id_user: id_user,
        },
      }
    );
    return true;
  } catch (error) {
    return null;
  }
}

async function list(id_user,type) {
  try {
    const staffs = await Post.findAll({
      where: { id_user: id_user,type: type },
    });
    return staffs;
  } catch (error) {
    return null;
  }
}
async function findOne(id, id_user) {
  try {
    const staffs = await Post.findAll({
      where: { id: id, id_user: id_user },
    });
    return staffs;
  } catch (error) {
    return null;
  }
}
async function deleteFind(id, id_user) {
  try {
    const staffs = await Post.findAll({
      where: { id: id, id_user: id_user },
    });
    return staffs;
  } catch (error) {
    return null;
  }
}
module.exports = {
  register,
  update,
  list,
  findOne,
  deleteFind
};
