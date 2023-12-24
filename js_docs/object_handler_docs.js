import { JS } from "../modules/code-themes.js"

const OH = {
    arrMatch: {
        returns: ['boolean', 'array', 'number'],
        params: {
            arr_a: {
                type: ['array'],
                required: true,
                description: ['Recebe um **array** com os valores para serem comparados com os valores de **arr_b**.']
            },
            arr_b: {
                type: ['array'],
                required: true,
                description: ['Recebe o segundo **array** com os valores que serão comparados com os valores de **arr_b**. A primeira ocorrência encontrada retorna um resultado de imediato.']
            },

            control_arg: {
                type: ['string', 'number'],
                required: false,
                description: ['Pode receber argumentos de controle do tipo **string** ou um valor **numérico inteiro**. Os tipos de retorno com esses argumentos variam! São eles:'],

                args: {
                    all: ['Diz para a função verificar se todos os valores de **arr_a** estão presentes em **arr_b** e retorna um **boolean**.'],

                    list: ['Diz para a função verificar quais valores de **arr_a** estão presentes em **arr_b** e retorna um novo **array** contendo esse valores. Observe que a lista de valores retornada conterá somente os valores do primeiro array que corresponderem.'],

                    details: ['Funciona semelhante ao argumento anterior porém seu método de busca e o retorno são diferentes.', 'Diz para a função verificar quais valores de **arr_a** estão presentes em **arr_b** e retorna um novo **array** contendo um objeto para cada valor correspondente.', 'Cada objeto contém o item correspondente, o índice deste item, o índice da primeira ocorrência do item no segundo array e o tipo deste item.', 'Nota: Ao invés de "**details**", no plural, também é possível usar "**detail**" no singular!'],

                    length: ['Retorna um **number** que corresponde a quantidade de valores de **arr_a** que estão presentes em **arr_b**.', 'Nota: Ao invés de usar "**length**" também é possível usar a abreviação "**len**".'],

                    default: ['Se nada for passado no parâmetro este é o argumento padrão. Preserva a funcionalidade inicial da função.'],

                    'Valor Numérico': ['Além dos argumentos do tipo **string** também é possível passar um valor numérico inteiro a este parâmetro.', 'Se passado um **number** define uma regra que diz que esta é a quantidade de valores de **arr_a** que devem corresponder a **arr_b** e retorna um **boolean**.', 'Ao passar um valor numérico como argumento o terceiro parâmetro **control_arg2** pode ser usado.']
                }
            },

            control_arg2: {
                type: ['string'],
                required: false,
                description: ['Pode receber três argumentos do tipo **string** que possibilitam complementar a funcionalidade do argumento numérico passado no parâmetro anterior.','Este parâmetro só é funcional quando o argumento passado no parâmetro anterior for do tipo **number**, caso contrário um erro é disparado!'],
                args: {

                    min: ['Define que a quantidade mínima de valores de **arr_a** que correspondem a **arr_b** deve ser o valor numérico passado no parâmetro anterior e retorna um **boolean**. Se a quantidade for maior ou igual ao valor numérico passado retorna **true**, caso seja menor retorna **false**.'],
                    
                    max: ['Faz o oposto que o argumento anterior e define que a quantidade máxima de valores de **arr_a** que correspondem a **arr_b** deve ser o valor numérico passado e retorna um **boolean**. Se a quantidade for menor ou igual ao valor numérico passado retorna **true**, caso seja maior retorna **false**.']

                }
            }
        },

        description: ['Faz uma verificação em dois arrays e retorna um **boolean** se um ou mais valores do primeiro array estiverem presentes no segundo array.',
        'Deve ser observado que sempre é verificado se o valores do primeiro array (**arr_a**) estão presentes no segundo array (**arr_b**) e nunca o oposto.'],
        
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

export default OH