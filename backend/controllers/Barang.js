const db = require("../models");
const barang = db.barang;
const category_barang = db.categoryBarang;
const path = require("node:path");
const fs = require("fs");
const Op = db.Sequelize.Op;

exports.getAllBarang = async (req, res) => {
  try {
    const getAllData = await barang.findAll({
      limit: 10,
      order: [["id", "DESC"]],
    });
    res.status(200).json({ DataBarang: getAllData });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOneBarangSelect = async (req, res) => {
  try {
    const getOne = await barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ getOne });
  } catch (error) {
    res.status(404).json({ msg: "Data Tidak Ada!" });
  }
};

exports.getOneBarang = async (req, res) => {
  try {
    const getOne = await barang.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (getOne) {
      const [results, metadata] = await db.sequelize.query(
        "SELECT * FROM barang INNER JOIN category_barang ON category_barang.id_category = barang.id_category_barang WHERE barang.id =" +
          req.params.id
      );
      res.status(200).json({ results });
    } else {
      res.status(404).json({ msg: "Data Tidak Ada!" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.saveBarang = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Gambar tidak boleh kosong" });
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
  const dateTime = date + "_" + time;
  const name = req.body.nama_barang;
  const file = req.files.file;
  const fileSize = file.data.lenght;
  const ext = path.extname(file.name);
  const fileName = file.md5 + "_" + dateTime + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });

  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await barang.create({
        nama_barang: name,
        harga_barang: req.body.harga_barang,
        id_category_barang: req.body.id_category_barang,
        stok_barang: req.body.stok_barang,
        deskripsi_barang: req.body.deskripsi_barang,
        foto_barang: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Product Telah Dibuat." });
    } catch (error) {
      console.log(error);
    }
  });
};

exports.updateBarang = async (req, res) => {
  const getOne = await barang.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!getOne) res.status(404).json({ msg: "No Data Found!" });

  let fileName = "";
  if (req.files === null) {
    fileName = getOne.foto_barang;
  } else {
    const file = req.files.file;
    const fileSize = file.data.lenght;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5MB" });

    const filepath = `./public/images/${getOne.foto_barang}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.nama_barang;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
    await barang.update(
      {
        nama_barang: name,
        harga_barang: req.body.harga_barang,
        id_category_barang: req.body.id_category_barang,
        stok_barang: req.body.stok_barang,
        deskripsi_barang: req.body.deskripsi_barang,
        foto_barang: fileName,
        url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Product Telah Berhasil Di Update" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteBarang = async (req, res) => {
  const getOne = await barang.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (getOne) {
    const filepath = `./public/images/${getOne.foto_barang}`;
    fs.unlinkSync(filepath, function (err) {
      if (err) {
        console.error(err);
        console.log("File not found");
      }
    });
    barang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Barang Berhasil Dihapus!" });
  } else {
    res.status(404).json({ msg: "No Data Found!" });
  }
};

exports.getCategoryBarang = async (req, res) => {
  try {
    const getCategory = await category_barang.findAll();
    res.status(200).json({ category: getCategory });
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getBarangForTambahBarang = async (req, res) => {
  try {
    const get = await barang.findAll({
      where: {
        nama_barang: {
          [Op.substring]: req.body.nama_barang,
        },
      },
    });
    res.status(200).json({ result: get });
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.createCategoryBarang = async (req, res) => {
  if (req.body.category_barang === "")
    return res.status(404).json({ msg: "Nama Category Kosong" });

  try {
    const createCategoryBarang = await category_barang.create({
      category: req.body.category_barang,
    });
    res.status(200).json({ msg: "Category Barang Baru Berhasil dibuat." });
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.deleteCategoryBarang = async (req, res) => {
  const getCategory = await category_barang.findOne({
    where: {
      id_category: req.params.id,
    },
  });
  if (getCategory) {
    category_barang.destroy({
      where: {
        id_category: req.params.id,
      },
    });
    res.status(200).json({ msg: "Category Barang Berhasil Dihapus!" });
  } else {
    res.status(404).json({ msg: "No Data Found!" });
  }
};

exports.loadMoreBarang = async (req, res) => {
  try {
    const getAllData = await barang.findAll({
      offset: parseInt(req.params.skip),
      limit: 10,
      order: [["id", "DESC"]],
      // raw: true,
      // plain: true,
    });
    res.status(200).json({ DataBarang: getAllData });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.queryCariBarang = async (req, res) => {
  try {
    const getData = await barang.findAll({
      where: {
        nama_barang: {
          [Op.substring]: req.body.nama_barang,
        },
        id_category_barang: {
          [Op.substring]: req.body.id_category_barang,
        },
      },
      order: [["nama_barang", "ASC"]],
    });
    res.status(200).json({ dataBarang: getData });
  } catch (error) {
    res.status(400).json(error);
  }
};
