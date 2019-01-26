

![Router](https://addyosmani.com/backbone-fundamentals/img/backbone_mvc.png) 


# Express Routers

## Set endpoint router

1. Open server.js
	
```
var index = require('./routes/index'); /* untuk router index*/
var user = require('./routes/user');  /*  untuk router user */

/* for handle the routers */
app.use('/v1/', index.router);
app.use('/v1/users', user.router);
```

## Contoh penggunaan router 	
```
/* router  */
router.get('/', [Controllers]); 	/* get */
router.post('/', [Controllers]); 	/* post */
router.put('/', [Controllers]); 	/* put */
router.delete('/', [Controllers]); 	/* delete */
	
```
## Router middleware	
```	
/* router index */
router.get('/', [WelcomeController.Welcome]);
/* Contoh penggunaan middleware */
router.get('/index', 
	[
		WelcomeController.Mid,  /* first middleware */
		WelcomeController.Mid2  /* responses */
	]
);
```

&copy; [Rahmat Wahyu Hadi](https://github.com/wahyuhadi/) - 2019