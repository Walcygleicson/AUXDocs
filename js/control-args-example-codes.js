import { JS } from "../modules/code-themes.js";
import utils from "../modules/utils.js";

const exampleCodes = {
    ex1: `
    ${JS.var('arrA', ['foo', 2, true, 'hello'])}
    ${JS.var('arrB', ['test', 'hello', 33, 'true', 100])}
    ${JS.var('arrC', ['bar', 100, 0.2, 'oof'])}

    ${JS.coment('retorna true pois "hello" de arrA também existe em arrB')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB')])}

    ${JS.coment('retorna false pois nenhum valor de arrC existe em arrB')}
    ${JS.call('arrMatch', [JS.var('.arrC'), JS.var('.arrB')])}
    `,

    ex2: `
    ${JS.var('arrA', ['foo', 2, true,])}
    ${JS.var('arrB', [true, 2, 33, 'false', 'foo'])}

    ${JS.coment('retorna true pois todos os valores de arrA estão presentes em arrB')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 'all'])}

    ${JS.coment('retorna false pois nem todos os valores de arrC estão presentes em arrB')}
    ${JS.var('arrC', ['foo', 2, 'hello'])}
    ${JS.call('arrMatch', [JS.var('.arrC'), JS.var('.arrB'), 'all'])}
    `,

    ex3: `
    ${JS.var('arrA', ['foo', 2, 'bar', 50, true])}
    ${JS.var('arrB', [true, 2, 33, 'false', 'foo', 100])}

    ${JS.coment('retorna um array ["foo", 2, true]')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 'list'])}

    ${JS.coment('retorna um array de objetos [{...}, {...}, {...}]')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 'details'])}
    ${JS.coment(`exemplo: {
        item: "foo",
        index_a: 0,
        index_b: 4,
        type: "string"
    }`)}

    ${JS.coment('retorna um número: 3')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 'length'])}
    `,

    ex4: `
    ${JS.var('arrA', ['foo', 2, 'bar', 50, true])}
    ${JS.var('arrB', [true, 2, 33, 'false', 'foo', 100])}

    ${JS.coment('retorna true pois 3 valores correspondem e o mínimo exigido é 2')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 2, "min"])}

    ${JS.coment('retorna false pois 3 valores correspondem e o máximo exigido é 2')}
    ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB'), 2, "max"])}
    `
}

//Iserir código no bloco de código para cada id de exemplo
Object.keys(exampleCodes).forEach((id) => {
    const pre = document.getElementById(id)
    pre.appendChild(utils.createElement('code', {}, exampleCodes[id]))
})