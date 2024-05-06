const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Assurez-vous que le modèle User est correctement importé
const Payment = require('./Payment'); // Si applicable

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    client: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    delivery_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    billing_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_ht: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false
    },
    total_ttc: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false
    },
    payment: {
        type: DataTypes.INTEGER,
        references: {
            model: Payment, // Assurez-vous que le modèle Payment est correctement défini
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'orders'
});

module.exports = Order;
