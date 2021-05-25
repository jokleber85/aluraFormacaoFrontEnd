Alura

Formação FrontEnd</br>

Acessibilidade web parte 1: tornando seu front-end inclusivo (06 horas)</br>

Software de leitor de tela recomendável para análise de acessibilidade -> NVDA 
## <br />
Dicas:
* <h></h> são referências dos níveis da página para os leitores de tela.</br>
* lang="pt-br" na página e adicionar essa configuração para extrangeira quando houver referencias internacionais. ex.:</br>
* preferência em utilizar o readonly no lugar do disabled </br>
* não bloqueie o zoom do usuário
* handtalks (plugin libras)

```js
<h3 lang='en'>Start</h3>
``` 
</br> 

* Utilizar alt apenas em imagens e não figuras 
```js
<img alt="descrição imagem" >
```
</br>  

```js
<desc>Descrição de um conteúdo</desc>
``` 
</br>

* Atributo para mudar ou reforçar o papel de um elemento 
```js
<main role="main"></main>
``` 
</br>

* Atributo para indicar os IDs de elementos que são os rótulos para o objeto 
```js
<a aria-labelledby="figcaption"></a>
``` 
</br>