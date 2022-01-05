## Montar container apos criar o Dockerfile e executar na pasta local com '.'

<code>docker image build -t ex-build-copy .</code>

Executar imagem criada

<code>docker container run -p 80:80 ex-build-copy</code>

Para visualizar o resultado acesse à página

[http://localhost:80](http://localhost:80)
