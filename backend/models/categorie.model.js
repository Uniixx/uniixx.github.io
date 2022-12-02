module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define("categories", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true 
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        }
      }, {
        timestamps: false,
        createdAt: false, 
        updatedAt: false
      });
      
      return category;
}
