'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('logs', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		uid: {
			type: Sequelize.STRING
		},
		nama: {
			type: Sequelize.STRING
		},
		time: {
			allowNull: false,
			type: Sequelize.DATE
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('logs');
	}
};