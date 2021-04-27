FROM mysql:8

#ENV MYSQL_ROOT_PASSWORD root
#ENV MYSQL_DATABASE pfa-db

COPY db.sql docker-entrypoint-initdb.d/

ENV LANG=C.UTF-8

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["mysqld"]