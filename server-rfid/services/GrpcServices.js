var grpc = require('grpc');

var server = new grpc.Server();
var UserProto = grpc.load().users;

