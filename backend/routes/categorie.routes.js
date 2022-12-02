module.exports = app => {
    const categories = require("../controllers/categorie.controller");
  
    var router = require("express").Router();
  
    router.post("/", categories.create);
  
    router.get("/", categories.findAll);
  
    router.get("/:name/products", categories.findProductsByCategory)

    router.get("/:id", categories.findOne);
  
    router.put("/:id", categories.update);
  
    router.delete("/:id", categories.delete);
  
    app.use('/api/categories', router);
  };