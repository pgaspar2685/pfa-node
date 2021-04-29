# fc-pfa-docker-node

Criar a rede
docker network create pfa

Subir container NODEJS

docker run -d --network=pfa --name=pfa-node -v $(pwd)/node:/usr/src/app pgaspar2685/pfa-node
<a href="https://hub.docker.com/repository/docker/pgaspar2685/pfa-node">link imagem node</a>

Subir container NGINX

docker run -d --network=pfa -p 8080:80 pgaspar2685/pfa-nginx
<a href="https://hub.docker.com/repository/docker/pgaspar2685/pfa-nginx">link imagem nginx</a>

Subir container MYSQL

docker run -d --network=pfa --name=db --hostname=db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=pfa-db pgaspar2685/pfa-mysql
<a href="https://hub.docker.com/repository/docker/pgaspar2685/pfa-mysql">link imagem mysql</a>

Problema que tive:

Ao criar volume para a base de dados não funciona, dá-me um erro que não consigo entender:

2021-04-29T01:15:59.020296Z 0 [Warning] Gtid table is not ready to be used. Table 'mysql.gtid_executed' cannot be opened.
mysqld: Can't change permissions of the file 'ca-key.pem' (Errcode: 1 - Operation not permitted)
2021-04-29T01:15:59.256355Z 0 [ERROR] Could not set file permission for ca-key.pem
2021-04-29T01:15:59.256393Z 0 [ERROR] Aborting

docker run -d --network=pfa --name=db --hostname=db -v $(pwd):/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=pfa-db pgaspar2685/pfa-mysql
