/*  author : wahyuhadi */
 
let QueryService = require('../services/QueryService')
let Async = require('async')


exports.AddData = async (req, res, next) => {
	let isData = {
		username : req.query.username,
		uid : req.query.uid
	}
	QueryService.Insert("users", isData, function(err, succes){
		if (err) {
			return res.status(401).json({error: true,code: 401, status:"error", message: "Error when insert data", result: err});
		} else {
			return res.status(200).json({error: false,code: 200, status:"success", message: "Succes Insert", result: succes});
		}
	})
},

exports.CheckData = async (req, res, next) => {
	let isData = {
		where : { uid : req.query.uid }
	}
	QueryService.SelectOne("users", isData, function(err, succes){
		if (err) {
			return res.status(401).json({error: true,code: 401, status:"error", message: "Error when insert data", result: err});
		} else {
			return res.status(200).json({error: false,code: 200, status:"success", message: "Succes Insert", result: succes});
		}
	})	
},

exports.GetAll = async (req, res, next) => {
	let isData = {}
	QueryService.SelectAll("users", isData, function(err, succes){
		if (err) {
			return res.status(401).json({error: true,code: 401, status:"error", message: "Error when insert data", result: err});
		} else {
			return res.status(200).json({error: false,code: 200, status:"success", message: "Succes Insert", result: succes});
		}
	})	
},

exports.AddLogs = async (req, res, next) => {
	let isData = {
		nama : req.query.username,
		uid : req.query.uid,
		time: new Date()
	}
	QueryService.Insert("logs", isData, function(err, succes){
		if (err) {
			return res.status(401).json({error: true,code: 401, status:"error", message: "Error when insert data", result: err});
		} else {
			return res.status(200).json({error: false,code: 200, status:"success", message: "Succes Insert", result: succes});
		}
	})
},

exports.GetAllLogs = async (req, res, next) => {
	let isData = {attributes : ['id', 'uid', 'nama', 'time']}
	QueryService.SelectAll("logs", isData, function(err, succes){
		if (err) {
			return res.status(401).json({error: true,code: 401, status:"error", message: "Error when insert data", result: err});
		} else {
			return res.status(200).json({error: false,code: 200, status:"success", message: "Succes Insert", result: succes});
		}
	})	
}