import { JS } from "../modules/code-themes.js"

const DH = {
    'teste2': {
        returns: ['boolean', 'number'],
        params: {
            key: {
                type: ['array'],
                required: true,
                description: ['Recebe um Array para ser analisado. Será verificado se ao menos um valor corresponde a algum valor existente em array_b.']
            },
            prop: {
                type: ['array'],
                required: true,
                description: ['Recebe um Array para se comparado com um valor de **array_a**.', 'Testo de **teste**. Blallsk alsksk akss']
            },
            control_arg: {
                type: ['string', 'number'],
                required: false,
                description: ['Pode receber argumentos de controle do tipo **string** e/ou um número inteiro. São eles:'],
                args: {
                    all: ['A função só retorna true se todos os itens de **array_a** existirem em array_b, caso contrário o retorno é false.'],
                    list: ['Retorna um Array contendo um objeto para cada item de array_a que corresponder. **Cada objeto contém o item correspondente**, o index do item correspondente em array_a, o index do item correspondente em array_b e o tipo do item.',
                    'Teste mais um eticente mais slorem ipsu **doloor** sit amet.']
                }
            }
        },

        description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!', 'Lorem ipsum dolor sit **amet consectetur adipisicing** elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!'],
        
        details:[ {
            title: 'Uso básico',
            upText: ['Vamos verificar se algum item de um **array** corresponde a um item de outro array.'],

            code: `
            ${JS.var('arrA', ['foo', 2, true, 'hello'])}
            ${JS.var('arrB', ['test', 'hello', 33, 'true', 100])}
            ${JS.var('arrC', ['bar', 100, 0.2, 'oof'])}

            ${JS.coment('exemplo A')}
            ${JS.call('arrMatch', [JS.var('.arrA'), JS.var('.arrB')]) + JS.coment(true)}

            ${JS.coment('exemplo B')}
            ${JS.call('arrMatch', [JS.var('.arrC'), JS.var('.arrB')]) + JS.coment(false)}`,
            

            dawnText: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!', 'L Etcetet hshshs shshsh shshadusds dugcsgii i ii ig']
            
        }]
    },
}

export default DH