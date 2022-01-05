# Exercices-docker

## Estes exercícios foram feitos durante o curso da Udemy.

</br>

Neste curso aprendi a criar ambientes profissionais completos com Docker, que é a principal tecnologia de containers do mercado!

</br>

## O que aprendi durante o curso
+ Utilizar containers para simplificar seus processos
+ Criar imagens com seus produtos
+ Publicar imagens em ambientes na nuvem, seja para distribuição ou execução dos serviços
+ Gerenciar conjuntos de micro serviços
+ Utilizar ferramentas diversas de integração contínua baseado em containers

## Para quem é este curso:
+ Desenvolvedores
+ Devops

</br>

[CASO DE ERRO](https://cursos.alura.com.br/forum/topico-docker-compose-up-erro-no-nginx-179477)

Quando comecei fazer os exercícios me deparei com o seguinte erro

<code>"ERRO[0002] error waiting for container: context canceled" issue with sshfs plugin</code>

e para solucionar o problema utilize o seguinte comando

<code>sudo systemctl stop apache2</code>

<code>sudo systemctl start apache2</code>
