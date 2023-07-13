const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Expense extends Model {};

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        paymentSchedule: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                paymentScheduleValidator(value) {
                    i = value.toLowerCase();
                    if (!(i === 'anually') && !(i === 'monthly')) {
                        throw new Error(`Must be either "anually" or "monthly"`);
                    }
                }
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'expense',
    }
);

module.exports = Expense;