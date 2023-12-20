import { JS } from "../modules/code-themes.js"

const OH = {
    arrMatch: {
        returns: ['boolean', 'array', 'object'],
        params: {
            array_a: {
                type: ['array'],
                required: true
            },
            array_b: {
                type: ['array'],
                required: true
            },
            control_arg: {
                type: ['string', 'number'],
                required: false,
                args: {
                    all: ['A função só retorna true se todos os itens de array_a existirem em array_b, caso contrário o retorno é false.'],
                    list: ['Retorna um Array contendo um objeto para cada item de array_a que corresponder. Cada objeto contém o item correspondente, o index do item correspondente em array_a, o index do item correspondente em array_b e o tipo do item.']
                }
            }
        },

        description: [
            "Verifica se os itens de um Array existem em outro Array. Se ao menos um item do primeiro Array existir no segundo Array a função retorna true. Deve ser notado que a verificação é sempre feita se somente itens de array_a existem em array_b e nunca o oposto. Deve-se notar também que a verificação considera um match apenas a primeira ocorrência do item correspondente em array_b. Ou seja, se array_a possui um valor x e arry_b possui dois valores x, a primeira ocorrência é quem dará retorno."
        ]
    },

    arrClean: {
        returns: ['array'],
        params: {
            array_a: {
                type: ['array'],
                required: true
            },
            array_b: {
                type: ['boolean'],
                required: true
            },
            control_arg: {
                type: ['string', 'number'],
                required: false,
                args: {
                    all: ['lslkkddjfjfjfjfjfjf.'],
                    list: ['Retorna um Array contendo um objeto para cada item de array_a que corresponder. Cada objeto contém o item correspondente, o index do item correspondente em array_a, o index do item correspondente em array_b e o tipo do item.']
                }
            }
        },
        description: ['nada a **declarar**.']
    },

// ------------------

    'storage.setLocal': {
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
            upText: ['Vamos verificar se algum item de um array corresponde a um item de outro array.'],

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

// ------------

    'cookies.set': {
        returns: ['array'],
        params: 0,

        description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam **necessitatibus** sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!']
    
    },

//-----------------


    'cookies.define': {
        returns: ['array', 'string', 'boolean'],
        params: {
            keys: {
                type: ['array'],
                required: true
            },
            props: {
                type: ['boolean'],
                required: true
            },
            control_arg: {
                type: ['string', 'number'],
                required: false,
                args: {
                    all: ['lslkkddjfjfjfjfjfjf.'],
                    list: ['Retorna um Array contendo um objeto para cada item de array_a que corresponder. Cada objeto contém o item correspondente, o index do item correspondente em array_a, o index do item correspondente em array_b e o tipo do item.']
                }
            },

            control_arg2: {
                type: ['string'],
                required: false,
                args: {
                    test: ['jsjdsksk kldkj d fsdf d sdf d ds fsd fd fsdf df sdfsdfsdf sd sd'],
                    teste2: ['hdhdhdhdhdhdhjssjdhjsdd', 'jsjhbsjdbjdfjkjjkdjdjdjdjkdjdsjdjkdjkdjkdjkdsjdsjdsjkdjk', 'kskjdsbkjdfdsfrs']
                }
            }
        },

        description: ['Verifica se os itens de um Array existem em outro Array. Se ao menos um item do primeiro Array existir no segundo Array a função retorna true. Deve ser notado que a verificação é sempre feita se somente itens de **array_a** existem em **array_b** e nunca o oposto. Deve-se notar também que a verificação considera um match apenas a primeira ocorrência do item correspondente em array_b. Ou seja, se array_a possui um valor x e arry_b possui dois valores x, a primeira ocorrência é quem dará retorno.', 'Teste de blá blá blá **teste** kjsjs jdjd **2**']
    },

    
}

export default OH