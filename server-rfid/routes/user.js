/* for variable */
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController')
const AuthController = require('../controllers/AuthController')


/* router index */
router.post('/', [UserController.userRegistration]);
router.get('/',[UserController.getAllUsers])

/* Export modules */
module.exports = {
    router
}
