/* for variable */
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UsersController')


/* router index */
// router.get("/contoh/:lab", [UserController.TestAPI])
router.post("/", [UserController.AddData])
router.get("/", [UserController.CheckData])
router.get("/all", [UserController.GetAll])
router.post("/logs", [UserController.AddLogs])
router.get("/logs", [UserController.GetAllLogs])




/* Export modules */

module.exports = {
    router
}
