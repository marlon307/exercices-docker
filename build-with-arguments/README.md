## Montar container apos criar o Dockerfile e executar na pasta local com '.'

<code>docker image build -t ex-build-args .</code>

### Executando container crido

<code>docker container run ex-build-args bash -c 'echo $S3_BUCKET'</code>

Ira mostrar no terminal o valor da variável <code>S3_BUCKET</code>

### Atualizando o valor da variável <code>S3_BUCKET</code>

<code>docker image build --build-arg S3_BUCKET=myapp -t ex-build-arg .</code>

### Filtro
