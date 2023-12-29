const tesseract = require("tesseract.js");
const Post = require("../model/post");
const ImgModel = require("../model/img");


let debug = true;
exports.register = async (req, res) => {
  const { uid, start, end, time, text, face, upload,type, imgs } = req.body;
    const { user_id } = req.user;
    if(imgs === undefined || imgs.length == 0){
      res.send({
        status: false,
        posts: null,
      });
      return
    }
    var newStore = await Post.register(
      user_id,
      uid,
      start,
      end,
      time,
      text,
      face,
      upload,
      type
    );
    console.log(newStore)
    if(imgs != null){
        for(const image of imgs){
          await ImgModel.update(image.id,newStore.id)
        }
    }
    newStore["imgs"] = await ImgModel.list(newStore.id)
    if (newStore != null) {
      res.send({
        status: true,
        post: newStore,
      });
    } else {
      res.send({
        status: false,
        post: null,
      });
    }
  try {
    
  } catch (error) {
    if (debug) {
      res.send({
        status: false,
        user: null,
        error: error,
      });
    } else {
      res.send({
        status: false,
        user: null,
      });
    }
  }
};
exports.update = async (req, res) => {
  try {
    const { id, uid, start, end, time, text, face, upload,type, imgs } = req.body;
    const { user_id } = req.user;
    var req = await Post.update(
      id,
      user_id,
      uid,
      start,
      end,
      time,
      text,
      face,
      upload,
      type
    );
    res.send({
      status: true,
      posts: req,
    });
  } catch (error) {
    res.send({
      status: false,
      user: null,
      error: error,
    });
  }
};
exports.list = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { type } = req.body;
    var posts = await Post.list(user_id,type);
    res.send({
      status: true,
      posts: posts,
    });
  } catch (error) {
    res.send({
      status: false,
      user: null,
      error: error,
    });
  }
};
exports.findOne = async (req, res) => {
  try {
    const { id } = req.body;
    const { user_id } = req.id_user;
    var posts = await Post.findOne(id, user_id);
    res.send({
      status: true,
      posts: posts,
    });
  } catch (error) {
    res.send({
      status: false,
      user: null,
      error: error,
    });
  }
};
