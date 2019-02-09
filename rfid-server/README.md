


![Express Js](https://rishabh.io/recipes/img/004-express-js.png  "Express JS") 

# Minimalis starter microservice express js with gRPC #



### What is this? ###

* Activity service API for web & mobile apps

### How do I get set up? ###
* copy env_example to .env and change environtment

* Install Node.js v10.x.x.x

* Install npm v6.x.x
    
* Install project dependencies:
    
    - Install all dependencies defined in package.json:
    
        `npm install` or bash build.sh
    

* Database migration (using [Sequelize](http://docs.sequelizejs.com)):

    - create model (and migration): `node node_modules/.bin/sequelize model:create --name <model_name> --attributes <attributes>`
    - create migration: `node node_modules/.bin/sequelize migration:create`
    - run: `node node_modules/.bin/sequelize db:migrate`
    - undo: `node node_modules/.bin/sequelize db:migrate:undo`
    - help: `node node_modules/.bin/sequelize help`

* How to run tests:

    `npm test`

* Deployment instructions

    `npm start` or `node server.js`    



&copy; [Rahmat Wahyu Hadi](https://github.com/wahyuhadi/) - 2018