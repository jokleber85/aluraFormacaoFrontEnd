Alura

Formação FrontEnd</br>

Expressões regulares: Capturando textos de forma mágica (12 horas)
## <br />

Ferramentas:
(regexr)[https://regexr.com/]</br>
(regex101)[https://regex101.com/]

##
Obs: verificar o "raw" deste arquivo pois a extensão .md oculta/altera alguns caracteres especiais</br>
* "escapar": \
* números: \d <!-- d -->
* qualquer caracter: . <!-- . -->
* negação: ^ <!-- for do inicio senão altera-se o sentido --> 

Quantifier(quantidade de vezes):
* ? - zero ou uma vez.
* * - zero ou mais vezes.
* + - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no mínimo n vezes.
{n,m} - no mínimo n vezes, no máximo m vezes.

* caracter espaço: \s+ <!-- escaço, um ou mais vezes -->
* qualquer caracter alfa/numerico: \w
* classe de caracter: [-. ] <!-- [] -->
* classe de número: [0-9 ]
* classe de letras: [a-zç ] ou [A-z]
* caracter ou termo não deve participar da execução (non-capturing group): ?: <!-- (?:de\s+)? -->

* 3 números juntos: \d\d\d
* exatamente estes números: [123] <!-- 1,2 ou 3 -->
* cpf: \d{3}\.\d{3}\.\d{3}\-\d{2} 
* cnpj: \d{2}\.\d{3}\.\d{3}/\d{4}\-\d{2} 
* ip: \d{1,3}\.\d{1,3}\.\{1,3}\.\{1,3}
* cep: \d{5}\-\d{3}
* telefone (ddd + 8 ou 9 dígitos): \(\d{2}\)\s\d?\d{4}\-\d{4}
* <code></code>: </?code>
* hora (h-min-s): [0-2]?\dh[0-6]\dmin[0-6]\ds ou \d{2}h\d{2}min\d{2}s
* placa: [A-Z]{3}\-\d{4}
* email: ^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$

Exemplos: 
* números entre 1 e 3 E 6 e 9: [ 1-36-9 ]
* 28 de Dezembro de 1993: [0-3]?\d\s+de\s+[A-Z][a-zç]{3,8}\s+de\s+[12]\d{3}

Âncoras
* somente determinada expressão que não tenha \w: \b expressão \b <!-- sem espaços -->
* somente determinada expressão que esteja entre \w (contrário de \b): \B expressão \B
* inicio da expressãoo: ^expressão
* fim da expressão: expressão$

Grupos
* grupos: () 
* grupo de referencia: \(numero do grupo) exemplo: <(p[1-9])>.*<\/\1> <!-- numero do grupo = 0 é a expressão toda -->

JavaScript
* expressão fixa: /expressao/ <!-- var = /(\d\d)(\w)/g -->
* verificação (true/false):
```js
var alvo = '11a22b33c';
var exp = /(\d\d)(\w)/g;
console.log(exp.test(alvo));
//true
console.log(exp.exec(alvo));
//["11a", "11", "a"]
```
</br>

```js
var arquivo = '100,200-150,200;20';
var exp = /[,;-]/;
var valores = arquivo.split(exp);
//["100", "200", "150", "200", "20"]
```
</br>

```js
var anoMesDia = '2007-12-31';
var exp = /-/g;
anoMesDia = anoMesDia.replace(exp, '/');
//'2007/12/31';
```
</br>

```js
var codigos = 'A121B12112C12212F12G01';
var exp = /[A-Za-z]\d+/g;
var codigosExtraidos = codigos.match(exp);
["A121", "B12112", "C12212", "F12", "G01"]
```
</br>

```html
<input pattern="[0-9]*">
```