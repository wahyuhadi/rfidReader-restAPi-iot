
![Sequelize Js](http://docs.sequelizejs.com/manual/asset/logo-small.png  "Sequelize JS") 



# Sequelize 

## Query sevice

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
	
## contoh pemanggilan pada Controllers

	exports.userRegistration =  async (req, res, next) => {
		    let userParams = req.body;
		    /* Contoh pemanggilan Query insert */
		    QueryService.Insert('users', userParams, (err, response) => { /* Callback */
			if (!err) {
			    return res.status(200).json({ code: 200, error: false, status: 'success', message: "succes create users", result: response});
			} else {
			    return res.status(401).json({ code: 401, error: true,status: 'error', message: err.errors[0].message, result: null});
			}
		})       
	}
	
## Docs

[Baca documentasi](http://docs.sequelizejs.com/)



&copy; [Rahmat Wahyu Hadi](https://github.com/wahyuhadi/) - 2018 