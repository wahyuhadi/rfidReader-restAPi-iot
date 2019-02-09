
echo "Auto Build ... "
cp env_example .env
if [[ $1 == 'migrate' ]]
	then
	echo "DB migration ..."
	node node_modules/.bin/sequelize db:migrate
	echo "DB migrate done"
	date

elif [[ $1 == 'undo' ]]
	then
	echo "Undo DB migration ..."
	node node_modules/.bin/sequelize db:migrate:undo
	echo "Undo DB migrate done"
	date

elif [[ $1 == 'install' ]]
	then
	echo "NPM install ...."
	npm install
	echo "NPM install done"
	date
	echo ""

elif [[ $1 == 'all' ]]
	then
	echo "NPM install ...."
	npm install
	echo "NPM install done"
	date
	sleep 1
	echo "DB migration ..."
	node node_modules/.bin/sequelize db:migrate
	echo "DB migrate done"
	date
else
	echo "bash build.sh <args>"
	echo "args : install | migrate | undo | all"
fi
