Alura

Formação FrontEnd</br>

JS na Web: Armazenando dados no navegador (08 horas)
## <br />

[CDNJS - rede distribuição de conteúdo](https://cdnjs.com/)</br>

[Biblioteca manipulação de data/hora em js](https://momentjs.com/)</br>

Formato pt-br objeto Date():</br>

```js
data.toLocaleDateString('pt-BR')
\\ "10/14/2020"
```
</br>

```js
const horarioOptions = {
   hour12: false,
   hour: 'numeric',
   minute: '2-digit',
   second: '2-digit', 
   timeZone: 'America/Sao_Paulo'
}

data.toLocaleTimeString('pt-BR', horarioOptions)
\\ “9:04:54”
```
</br>

Pipe / curto circuito
```js
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [ ];
 true || false // true
false || true // true
```
</br>

sort - função de ordenação
```js
array.sort('função de comparação');
```
</br>