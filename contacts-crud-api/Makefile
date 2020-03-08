help:
	@ echo "Make file for contacts-crud-api"
	@ echo " help      Show help."
	@ echo " install   Install dependencies."
	@ echo " run       Run app locally."
	@ echo " stop      Stop running docker containers."

run-elasticmq:
	@ docker run -d -p 9324:9324 --name elasticmq softwaremill/elasticmq

run-dynamodb:
	@ docker run -p 8000:8000 --name dynamodb amazon/dynamodb-local

run:
	@ make run-elasticmq
	@ make run-dynamodb
	@ sleep 3
	@ sls offline

stop:
	@ docker stop elasticmq
	@ docker container rm elasticmq
	@ docker stop dynamodb
	@ docker container rm dynamodb

install:
	@ docker pull softwaremill/elasticmq
	@ docker pull mongo:xenial
	@ npm i