module.exports = (sequelize, Sequelize) => {
    return sequelize.define("produits", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true 
        },
        titre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
            defaultValue: null
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: null
        },
        prix: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        actif: {
            type: Sequelize.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
      }, {
        timestamps: true,
        createdAt: true, 
        updatedAt: true
      });
}
