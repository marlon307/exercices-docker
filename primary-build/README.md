## Montar container apos criar o Dockerfile e executar na pasta local com '.'

<code>docker image build -t ex-simple-build .</code>

Executar imagem criada

<code>docker container run -p 80:80 ex-simple-build</code>

Para visualizar o resultado acesse à página

[http://localhost:80](http://localhost:80)
