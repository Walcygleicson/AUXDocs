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
                    
                    max: ['Faz o oposto que o argumento anterior e define que a quantidade máxima de valores de **arr_a** que correspondem a **arr_b** deve ser o valor numérico passado e retorna um **boolean**. Se a quantidade for menor ou igual ao valor numérico passado retorna **true**, caso seja maior retorna **false**.'],

                    default: ['Se nada for passado o valor padrão é "**default**".']

                }
            }
        },

        description: ['Faz uma verificação em dois arrays e retorna um **boolean** se um ou mais valores do primeiro array estiverem presentes no segundo array.',
        'Deve ser observado que sempre é verificado se o valores do primeiro array (**arr_a**) estão presentes no segundo array (**arr_b**) e nunca o oposto.'],
        
        details:[ {
            upText: ['Verificando se um ou mais itens de um array existem em outro array de forma simples e sem o uso de laços de repetição. Veja:'],

            code:`${JS.var('arr1', ['foo', 2, true, 'hello'])}
${JS.var('arr2', ['bar', 78, 0.2, 'hi'])}
${JS.var('arr3', ['test', 'hello', 33, 'false', 100])}

${JS.coment('exemplo A')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr3')]) + JS.coment(true)}

${JS.coment('exemplo B')}
${JS.call('arrMatch', [JS.var('.arr2'), JS.var('.arr3')]) + JS.coment(false)}`,
            

            dawnText: ['No exemplo **A** o retorno é **true** pois o valor "hello" do array **arr1** também existem em **arr2**. Já no exemplo **B** o retorno é **false** pois nenhum valor de **arr2** foi encontrado em **arr3**.']
            
        },
        
        {
            title: 'Usando o argumento "all"',
             
            upText: ['Verificando se todos os itens de um array também existem em outro array.'],

            code: `${JS.var('myName', 'Lucas')}
${JS.var('arr1', ['foo', true, 'hello', 33, 'Lucas'])}
${JS.var('arr2', ['bar', 100, 78, 'true'])}
${JS.var('arr3', ['foo', 'hello', 33, 'bar', 100, true, '78', JS.var('.myName')])}

${JS.coment('exemplo A')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr3'), 'all']) + JS.coment(true)}
${JS.coment('exemplo B')}
${JS.call('arrMatch', [JS.var('.arr2'), JS.var('.arr3'), 'all']) + JS.coment(false)}

${JS.coment('------------------------')}

${JS.var('names1', ['Lucas', 'Ana'])}
${JS.var('names2', ['Lucas', 'Ana'])}

${JS.coment('exemplo C')}
${JS.call('arrMatch', [JS.arr([JS.var('.names1'), 'Bill']), JS.arr([JS.var('.names2'), 'Bill']), 'all']) + JS.coment(false)}
${JS.coment('exemplo D')}
${JS.call('arrMatch', [JS.arr([JS.var('.names1'), 'Bill']), JS.arr([JS.var('.names1'), 'Bill']), 'all']) + JS.coment(true)}`,
            
            dawnText: ['No exemplo A o retorno é **true** pois todos os itens de **arr1** existem em **arr3**. Já no exemplo B o retorno é **false** pois nem todos os item de **arr2** existem em **arr3**.',
            'Note que os valores que invalidaram a busca no exemplo B foram o número 78 e a string "true". Por mais que esses valores também existam em **arr3** seus tipos são diferentes. Deve ser verificado os tipos do valores antes de qualquer validação para que não haja resultados inesperados.',
            'Já no exemplo C o retorno pode parecer meio inusitado pois pensamos que o retorno deveria ser **true** já que ambos os arrays analisados possuem um array contendo os mesmos nomes de pessoa e mais o nome Bill fora dele, porém neste caso não é assim que é trabalhado. Por mais que ambas as variáveis sejam arrays que possuem os mesmos valores, ambas são objetos diferentes, e neste caso não é analisado o conteúdo das variáveis contidas nos arrays e sim se são os mesmos objetos. Esta regra serve para qualquer tipo de lista ou dicionário', 'O exemplo D retorna um **true** pois agora ambos os array analisados possuem a mesma variável e o mesmo valor "Bill".']
            
        },
        {
            title: 'Usando o argumento "list"',
            upText: [],
            code: ``,
            dawnText: []
            
        }]
    },
    
}

export default OH