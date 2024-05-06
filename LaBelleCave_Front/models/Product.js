const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    alcohol_degree: {
        type: DataTypes.NUMERIC(3, 1),
        allowNull: false
    },
    capacity: {
        type: DataTypes.NUMERIC(5, 2),
        allowNull: false
    },
    price_ht: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'products'
});

module.exports = Product;
