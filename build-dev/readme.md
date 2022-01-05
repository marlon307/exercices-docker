
## Montar container apos criar o Dockerfile e executar na pasta local com '.'

</br>

### USER, VOLUME, WORKDIR, EXPOSE
user, volume, workdir e expose

</br>

<code>docker image build -t ex-build-dev .</code>

Executar imagem criada

<code>docker container run -it -v $(pwd):/app -p 80:8000 --name python-server ex-build-dev</code>

Para visualizar o resultado acesse à página

[http://localhost:80](http://localhost:80)

Acessando o log do <code>ex-build.dev</code> de outro container

<code>docker container run -it --volumes-from=python-server debian cat /log/http-server.log</code>
