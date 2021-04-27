# fc-pfa-docker-node

Subir container NODEJS

docker run -d --network=pfa --name=nodecontainer -v $(pwd):/usr/src/app gaspar/pfa-node node index.js

Subir container NGINX

docker run --network=pfa -p 8080:80 gaspar/pfa-nginx

Subir container MYSQL

docker run -d --network=pfa --name=db --hostname=db -e MYSQL_ROOT_PASSWORD=pfa-root -e MYSQL_DATABASE=pfa-db -e MYSQL_USER=pfa-user -e MYSQL_PASSWORD=pfa-pass gaspar/pfa-mysql

Nesta parte tive muitas dificuldades:

1- A criação do volume na pasta "mysql" o container morre sempre (tentei dentro da diretoria executar o codigo com $(pwd), tentei na diretoria raiz com $(pwd)/mysql , e também tentei com ./mysql , mas ai o docker se queixa que precisar de um caminho absoluto)

2- O volume pela raiz é criado (mas eu queria dentro da pasta mysql), contudo o mysql morre, se fizer docker logs db (nome que dei ao container) aparece diversos erros - acedi às aulas e em testes na minha máquina com o docker composer consigo colocar a funcionar.
Vou esperar para ver na próxima aula a correcção deste desafio.

3- criei um ficheiro sql para criar a tabela e registos