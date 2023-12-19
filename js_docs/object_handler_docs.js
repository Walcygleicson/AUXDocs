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

    'storage.setLocal': {
        returns: ['boolean', 'number'],
        params: {
            key: {
                type: ['array'],
                required: true
            },
            prop: {
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

        description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!', 'Lorem ipsum dolor sit **amet consectetur adipisicing** elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!']
    },
    'cookies.set': {
        returns: ['array'],
        params: 0,

        description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam **necessitatibus** sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio aliquam necessitatibus sed assumenda ipsam, veniam, nulla aperiam iste aspernatur cupiditate iusto ipsum reiciendis quo beatae magnam saepe perspiciatis soluta!']
    
    },

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