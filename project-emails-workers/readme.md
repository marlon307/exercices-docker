<code>docker-compose up -d</code>
</br>
<code>docker-compose exec dbpostgres psql -U postgres -c '\l'</code>
</br>
<code>docker-compose down</code>

</br>
</br>

<code>docker-compose up -d</code>
</br>
<code>docker-compose exec dbpostgres psql -U postgres -f /scripts/check.sql</code>
</br>
<code>docker-compose down</code>

</br>
</br>

<code>docker-compose exec dbpostgres psql -U postgres -d email_sender -c 'select * from emails'</code>
