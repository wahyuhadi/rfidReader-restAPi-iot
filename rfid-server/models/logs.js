'use strict';
module.exports = (sequelize, DataTypes) => {
  const logs = sequelize.define('logs', {
    uid: DataTypes.STRING,
    nama: DataTypes.STRING,
    time: DataTypes.DATE
  }, {});
  logs.associate = function(models) {
    // associations can be defined here
  };
  return logs;
};