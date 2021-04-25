# fc-pfa-docker-node

Subir container NODEJS
docker run -d --network=pfa --name=nodecontainer -v $(pwd):/usr/src/app gaspar/pfa-node node index.js

Subir container NGINX
docker run --network=pfa -p 8080:80 gaspar/pfa-nginx

Subir container MYSQL
docker run --network=pfa --name=db -v $(pwd):/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7 (também tentei criar imagem com comando do innodb)

Nesta parte tive muitas dificuldades:
1- A criação do volume na pasta "mysql" o container morre sempre (tentei dentro da diretoria executar o codigo com $(pwd), tentei na diretoria raiz com $(pwd)/mysql , e também tentei com ./mysql , mas ai o docker se queixa que precisar de um caminho absoluto)

2- O volume pela raiz é criado (mas eu queria dentro da pasta mysql), contudo o mysql morre, se fizer docker logs db (nome que dei ao container) aparece diversos erros - acedi às aulas e em testes na minha máquina com o docker composer consigo colocar a funcionar.
Vou esperar para ver na próxima aula a correcção deste desafio.