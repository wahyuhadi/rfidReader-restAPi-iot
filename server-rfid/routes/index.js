/* for variable */
const express = require('express');
const router = express.Router();
const WelcomeController = require('../controllers/WelcomeController')




/* router index */
router.get('/', [WelcomeController.Welcome]);
/* for another example write router middleware */
router.get('/index', 
    [
        WelcomeController.Mid,  /* first middleware */
        WelcomeController.Mid2  /* responses */
    ]
);


/* Export modules */
module.exports = {
    router
}
