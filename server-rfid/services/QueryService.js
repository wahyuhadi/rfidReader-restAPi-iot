/*  author : wahyuhadi */
var models  = require('../models')

/* for insert to database  */
exports.Insert = async (modelsName, isParams, callback) => {
    models[modelsName].create(isParams).nodeify(callback)
};

/* for insert array to database  */
exports.InsertBulk = async (modelsName, isParams, callback) => {
    models[modelsName].bulkCreate(isParams).nodeify(callback)
};

/* for select one data */
exports.SelectOne = async (modelsName, isParams, callback) => {
    models[modelsName].findOne(isParams).nodeify(callback)
};

/* for select all data */
exports.SelectAll = async (modelsName, isParams, callback) => {
    models[modelsName].findAll(isParams).nodeify(callback)
};

/* for select and count all data */
exports.SelectAndCount = async (modelsName, isParams, callback) => {
    models[modelsName].findAndCountAll(isParams).nodeify(callback)
};

/* for update data in isCondition is condition where data will updated */
exports.Update = async (modelsName, isParams, isCondition, callback) => {
    models[modelsName].update(isParams, isCondition).nodeify(callback)
};

/* for delete data in isCondition is condition where data will deleted */
exports.Update = async (modelsName, isCondition, callback) => {
    models[modelsName].destroy(isCondition).nodeify(callback)
};