const { DataTypes } = require('sequelize')

module.exports = async (sequelize, Sequelize) => {
	return await sequelize.define("users", {
		user_id: {
			type: DataTypes.INTEGER,
			autoincrement: true,
			primaryKey: true,
		},
		user_phone: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		user_balance: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	});
};
