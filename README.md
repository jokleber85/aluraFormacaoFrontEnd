Alura

Formação FrontEnd</br>

JS na web: CRUD com JavaScript assíncrono (08 horas)
## <br />

Instalar Node dentro da pasta do projeto (petShop)</br>
```js
npm install
``` 
</br>

Instalar o servidor
```js
npm install -g json-server
``` 
</br>

Rodar o servidor
```js
json-server --watch db.json
``` 
</br>

Instalar servidor para rodar a aplicação:</br>
```js
npm install -g browser-sync
``` 
</br>

Abrir a aplicação:</br>
```js
browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html
``` 
</br>

PS: os arquivos a seguir são formas ainda utilizadas nas comunicações assícronas, mas que estão perdendo uso com novas atualizações:
* ../service/Xcliente-service.js
* ../controller/XlistaCliente.js
* ../controller/XatualizaCliente.js