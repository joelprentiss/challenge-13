// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');
const ProductTag = require('./ProductTag');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    prodcutName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    catagoryId:{
     type: DataTypes.INTEGER,
     references:{
      model: Category,
      key: 'id'
     } 
    },
    productTag:{
      type: DataTypes.INTEGER,
      references:{
        model: ProductTag,
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
