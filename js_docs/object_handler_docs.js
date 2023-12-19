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
        }
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
        }
    },

    'storage.setLocal': {
        returns: ['boolean', 'number'],
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
        }
    },
    'cookies.set': {
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
        }
    },

    'cookies.define': {
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
        }
    },

    
}

export default OH