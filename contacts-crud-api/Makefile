help:
	@ echo "Make file for contacts-crud-api"
	@ echo " help      Show help."
	@ echo " install   Install dependencies."
	@ echo " run       Run app locally."
	@ echo " stop      Stop running docker containers."

run-elasticmq:
	@ docker run -d -p 9324:9324 --name elasticmq softwaremill/elasticmq

run:
	@ make run-elasticmq
	@ sleep 3
	@ sls offline start --stage dev

stop:
	@ docker stop elasticmq
	@ docker container rm elasticmq

install:
	@ docker pull softwaremill/elasticmq
	@ npm i
	@ sls dynamodb install