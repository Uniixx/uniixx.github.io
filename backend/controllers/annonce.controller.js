const db = require("../models");
const Annonces = db.annonces;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.titre) {
      res.status(400).send({
        message: "Le titre ne peut pas être vide."
      });
      return;
    }

    if (!req.body.prix) {
        res.status(400).send({
            message: "Le prix ne peut pas être vide."
        });
    }
  
    const produit = {
      titre: req.body.titre,
      description: req.body.description ? req.body.description : null, 
      prix: req.body.prix,
      image: req.body.image ? req.body.image : null,
      actif: 0
    };
  
    Products.create(produit)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue avec la création du produit."
        });
      });
  };

exports.findAll = (req, res) => {
  Annonces.findAll({
    limit: 3,
    order: [ [ 'createdAt', 'ASC' ]]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Un problème est survenue.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id || 1;

  Products.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Le produit n'as pas été trouvé",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Une erreur est survenue avec le produit ${id}`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Products.update(req.body, {
    where: { id: id },
  })
    .then((updated) => {
      if (updated) {
        res.send({
          message: "Le produit à été modifié avec succès",
        });
      } else {
        res.send({
          message: `Une erreur est survenue avec le produit ${id}, la requête peut-être vide ou produit inexistant`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Une erreur est survenue avec le produit ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Products.destroy({
    where: { id: id },
  })
    .then((deleted) => {
      if (deleted) {
        res.send({
          message: "Le produit à été supprimer avec succès.",
        });
      } else {
        res.send({
          message: `Une erreur est survenue avec la suppresion du produit ${id}, produit inexistant?`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Une erreur est survenue avec la suppresion du produit ${id}`,
      });
    });
};