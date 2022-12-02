module.exports = app => {
    const products = require("../controllers/product.controller");
  
    var router = require("express").Router();
  
    router.post("/", products.create);
  
    router.get("/", products.findAll);

    router.get("/category/:category", products.findAllByCategory);
  
    router.get("/:id", products.findOne);
  
    router.put("/:id", products.update);
  
    router.delete("/:id", products.delete);
  
    app.use('/api/produits', router);
  };