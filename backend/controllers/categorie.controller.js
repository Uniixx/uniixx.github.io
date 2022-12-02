const db = require("../models");
const Categories = db.categories;
const Products = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
};

exports.findAll = (req, res) => {
    Categories.findAll().then(data => res.send(data));
};

exports.findOne = (req, res) => {

};

exports.findProductsByCategory = (req, res) => {
    Products.findAll({
        where: {
            
        }
    })
}

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
};