'use strict';
module.exports = {
  	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			nama: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: {
					args: true,
					msg: 'Email address already in use!'
				},
			},
			uid: {
				allowNull: false,
				type: Sequelize.INTEGER,
				unique: {
					args: true,
					msg: 'Uid address already in use!'
				},
			},
			inDate: {
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
			},
			deletedAt: {	
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
};