## Montar container apos criar o Dockerfile e executar na pasta local com '.'

<code>docker run -d -p 8080:80 --name ex-simple-build .</code>

Executar imagem criada

<code>docker container run -p 80:80 ex-simple-build</code>

Para visualizar o resultado acesse à página

http://localhost:80
