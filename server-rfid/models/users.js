'use strict';
module.exports = (sequelize, DataTypes) => {
	let jwt = require('jsonwebtoken');
    let Bcrypt = require('bcrypt');
    let randomString = require('randomstring');
	const users = sequelize.define('users', {
		nama: {
            type: DataTypes.STRING,
        },
		uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
            unique: {
                args: true,
                msg: 'Uid address already in use!'
            }
        },
		inData: DataTypes.DATE
	}, {
        paranoid: true
    });
	users.associate = function(models) {
		// associations can be defined here
	};


	users.prototype.validPassword = function (password) {
        return Bcrypt.compareSync(password, this.password);
    };

    users.prototype.getJWT = function () {
        return jwt.sign({
            id: this.id,
			username: this.username,
			email: this.email,
            role: this.role
        }, process.env.JWT_SECRET);
    };
    users.prototype.resetPassword = function () {
        return randomString.generate(8);
    };
	return users;
};