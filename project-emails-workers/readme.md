<code>docker-compose up -d</code>
<code>docker-compose exec dbpostgres psql -U postgres -c '\l'</code>
<code>docker-compose down</code>

</br>
</br>

<code>docker-compose up -d</code>
<code>docker-compose exec dbpostgres psql -U postgres -f /scripts/check.sql</code>
<code>docker-compose down</code>
