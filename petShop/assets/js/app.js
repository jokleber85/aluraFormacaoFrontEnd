import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    if(input.dataset.tipo == 'preco'){
        SimpleMaskMoney.setMask(input, {
         /* afterFormat(e) { console.log('afterFormat', e); }, //console.log */
         /* allowNegative: false,// valor negativo */
         /* beforeFormat(e) { console.log('beforeFormat', e); }, //console.log */
        /*  negativeSignAfter: false, // valor negativo */
            prefix: 'R$ ',
        /*  suffix: '', // posterior a string*/
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        });
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})