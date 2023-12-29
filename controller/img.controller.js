const tesseract = require("tesseract.js");
const Img = require("../model/img");

let debug = true;
exports.register = async (req, res) => {
  try {
    const { url } = req.body;
    var newStore = await Img.register(url);
    if (newStore != null) {
      res.send({
        status: true,
        store: newStore,
      });
    } else {
      res.send({
        status: false,
        store: null,
      });
    }
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
    const { id,id_post } = req.body;
    var req = await Img.update(id,id_post);
    res.send({
      status: true,
      stores: req,
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
     const { id_post } = req.body;
     console.log(id_post)
    var images = await Img.list(id_post);
    res.send({
      status: true,
      images: images,
    });
  } catch (error) {
    res.send({
      status: false,
      user: null,
      error: error,
    });
  }
};

