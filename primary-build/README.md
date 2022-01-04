Montar container apos criar o Dockerfile e executar na pasta local com '.'

docker run -d -p 8080:80 --name ex-simple-build .

Executar imagem criada
docker container run -p 80:80 ex-simple-build

Para visualizar o resultado acesse à página

http://localhost:80
