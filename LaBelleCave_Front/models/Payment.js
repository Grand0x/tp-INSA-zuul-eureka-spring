const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Assurez-vous que le modèle User est correctement importé

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    provider: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.NUMERIC(10, 2),
        allowNull: false
    },
    label: {
        type: DataTypes.STRING
    },
    accounted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'payments'
});

module.exports = Payment;
