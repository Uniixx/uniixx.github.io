module.exports = (sequelize, Sequelize) => {
    return sequelize.define("annonces", {
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
        message: {
            type: Sequelize.STRING,
            allowNull: false
        }
      }, {
        timestamps: true,
        createdAt: true, 
        updatedAt: true
      });
}
