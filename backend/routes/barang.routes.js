module.exports = (app) => {
  const barang = require("../controllers/Barang.js");

  var router = require("express").Router();

  router.get("/barang", barang.getAllBarang);
  router.get("/categoryBarang", barang.getCategoryBarang);
  router.get("/barang/:id", barang.getOneBarang);
  router.post("/barang", barang.saveBarang);
  router.patch("/barang/:id", barang.updateBarang);
  router.delete("/barang/:id", barang.deleteBarang);
  router.post("/getBarangFormTambah", barang.getBarangForTambahBarang);
  router.post("/barang/selectId/:id", barang.getOneBarangSelect);
  router.post("/addCategory", barang.createCategoryBarang);
  router.delete("/categoryBarang/:id", barang.deleteCategoryBarang);
  router.get("/loadMoreBarang/:skip", barang.loadMoreBarang);

  app.use("/", router);
};
