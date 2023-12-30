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

                    list: ['Diz para a função verificar quais valores de **arr_a** estão presentes em **arr_b** e retorna um novo **array** contendo esse valores. Observe que a lista de valores retornada conterá somente os valores do primeiro array que corresponderem.','Se nenhum valor for encontrado retorna um array vazio.'],

                    details: ['Funciona semelhante ao argumento anterior porém seu método de busca e o retorno são diferentes.', 'Diz para a função verificar quais valores de **arr_a** estão presentes em **arr_b** e retorna um novo **array** contendo um objeto para cada valor correspondente.', 'Cada objeto contém o item correspondente, o índice deste item, o índice da primeira ocorrência do item no segundo array e o tipo deste item.', 'Se nenhum valor for encontrado retorna um array vazio.', 'Nota: Ao invés de "**details**", no plural, também é possível usar "**detail**" no singular!'],

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
            

            downText: ['No exemplo **A** o retorno é **true** pois o valor "hello" do array **arr1** também existem em **arr2**. Já no exemplo **B** o retorno é **false** pois nenhum valor de **arr2** foi encontrado em **arr3**.']
            
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
            
            downText: ['No exemplo A o retorno é **true** pois todos os itens de **arr1** existem em **arr3**. Já no exemplo B o retorno é **false** pois nem todos os item de **arr2** existem em **arr3**.',
            'Note que os valores que invalidaram a busca no exemplo B foram o número 78 e a string "true". Por mais que esses valores também existam em **arr3** seus tipos são diferentes. Deve ser verificado os tipos do valores antes de qualquer validação para que não haja resultados inesperados.',
            'Já no exemplo C o retorno pode parecer meio inusitado pois pensamos que o retorno deveria ser **true** já que ambos os arrays analisados possuem um array contendo os mesmos nomes de pessoa e mais o nome Bill fora dele, porém neste caso não é assim que é trabalhado. Por mais que ambas as variáveis sejam arrays que possuem os mesmos valores, ambas são objetos diferentes, e neste caso não é analisado o conteúdo das variáveis contidas nos arrays e sim se são os mesmos objetos. Esta regra serve para qualquer tipo de lista ou dicionário', 'O exemplo D retorna um **true** pois agora ambos os array analisados possuem a mesma variável e o mesmo valor "Bill".']
            
        },
        {
            title: 'Usando o argumento "list"',
            upText: ['Verificando quais itens do primeiro array estão presentes no segundo array e retornando esses itens em um novo array.'],
            code: `${JS.var('arr1', ['bar', 33, 78, 'JS', 'PHP', 1.5, true, 'hello', 33])}
${JS.var('arr2', ['foo', true, 'hello', 33, 'Lucas', 'bar', 'C++', 40, 'bar'])}

${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 'list']) + JS.coment('[ "bar", 33, true, "hello", 33 ]')}
`,
            downText: ['A função retorna uma lista na ordem com todos os itens de **arr1** que aparecem em **arr2**.',
            'Note que o valor 33 se repete duas vezes em **arr1**, logo aparece duas vezes na lista do retorno. Já em **arr2** a string **"bar"** se repete duas vezes, mas na lista de retorno só aparece uma vez. Deve-se sempre lembrar que a função só analisa se um item do primeiro array existe em outro, e quando encontra a primeira ocorrência no segundo array o valor é registrado e a análise segue para o próximo item do primeiro array.']
            
        },
        {
            title: 'Usando o argumento "details"',
            upText: ['Se quisermos a mesma funcionalidade do argumento descrito acima e ao mesmo tempo saber os índices dos intens correspondentes e seus tipos devemos usar o argumento **details**.'],
            code: `${JS.var('arr1', ['PHP', 'JavaScript', 55, 'Go', 89, 'Python', 'CSS', true])}
${JS.var('arr2', ['true', true, 55, 'C++', 67, 1.5, 'Vue.js', 'JavaScript', 55])}

${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 'details'])}
${JS.coment(`[
    { item: "JavaScript", index_a: 1, index_b: 7, type: "string" },
    { item: 55, index_a: 2, index_b: 2, type: "number" },
    { item: true, index_a: 7, index_b: 1, type: "boolean" }
]`)}`,
            downText: ['Obtemos um array com objetos onde cada objeto contém informações sobre a busca como o item, o índice do item do primeiro array, o índice da primeira ocorrência encontrada no segundo array e o tipo.', 'Veja novamente que o item 55 se repete duas vezes no segundo array, porém o resultado só retorno um objeto para este item e se observarmos na propriedade que guarda o index do item correspondente encontrado no segundo array vemos o index 2.', 'Como já explicado no tópico sobre o uso do argumento "**all**" o tipo dos valores também é levado em consideração durante a busca, por isso o item **true** do tipo boolean em **arr1** não deu match com o item "**true**" do tipo string em **arr2**.', 'Este argumento também pode ser substituído por **detail** no singular, ambas as formas são válidas e posuem o mesmo resultado.']
        },
        {
            title: 'Usando o argumento "length"',
            upText: ['Retornando a quantidade de itens do primeiro array que existem no segundo array.'],
            code: `${JS.var('arr1', ['PHP', 'JavaScript', 55, 'Go', 89, 'Python', 'CSS', true])}
${JS.var('arr2', ['true', true, 55, 'C++', 67, 1.5, 'Vue.js', 'JavaScript', 55])}

${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 'length']) + JS.coment(3)}`,
            downText: ['Usando o mesmo exemplo do tópico acima com o argumento "**length**" obtemos o número 3 como resultado pois os itens "**JavaScript**", **55** e **true** foram econtrados no segundo array.']  
         },
        
        {
            title: ['Usando argumentos numéricos'],

            upText: ['Vamos definir uma regra para a busca usando um argumento do tipo número inteiro.'],
            code: `${JS.var('arr1', ['Vue', 100, 'Nuxt', 'CSS', true])}
${JS.var('arr2', ['HTML', 'CSS', 45, true, 'C#', 'JavaScript', 100, 'Python', 'React'])}

${JS.coment('exemplo A')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 3]) + JS.coment(true)}
${JS.coment('exemplo B')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 6]) + JS.coment(false)}`,
            downText: ['No exemplo A definimos que a quantidades de itens em **arr1** que devem corresponder em **arr2** serão três itens e obtemos um **true** como resultado pois a regra foi atendida com sucesso; três itens do primeiro array foram encontrados no segundo array. **[100, "CSS", true]**.',
            ' Já no exemplo B obtemos um **false** pois a regra de seis itens compatíveis não foi atendida.', 'Isto serve para limitar a quantidade de itens que se repetem em outro array e obter uma filtragem mais precisa dos valores que entram e saem. Porém esse argumento numérico pode fazer bem mais que que só limitar um valor estático. Ao usar ele obtemos a liberdade de usar o quarto parâmetro que esta função dispõe junto de seus dois argumentos de controle. Veja no próximo tópico.']
            
            },
            {
            
                title: 'Usando os argumentos "min" e "max" no parâmetro 4',
                upText: ['O quarto parâmetro desta função (**control_arg2**) imprementa uma funcionalidade extra ao uso de um argumento numérico no parâmetro anterior, possibilitando criar uma regra com limites mais flexisíveis do que o método visto no tópico acima.', 'Deve-se atentar que o uso do parâmetro **control_arg2** é opcional porém restrito somente ao uso em conjunto com um argumento do tipo number passado no parâmetro anterior. Caso tente usá-lo com algum argumento do tipo string um erro é lançado.', 'Dito isto, vamos criar uma nova regra agora usando os argumentos "**min**" e "**max**" onde um define a quantidade mínima e o outro define a quantidade máxima de itens de um array que podem ser encontrados em outro array.'],
                code: `${JS.var('arr1', ['Vue', 100, 'Nuxt', 'CSS', true])}
${JS.var('arr2', ['HTML', 'CSS', 45, true, 'C#', 'JavaScript', 100, 'Python', 'React'])}

${JS.coment('exemplo A')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 2, 'min']) + JS.coment(true)}
${JS.coment('exemplo B')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 4, 'min']) + JS.coment(false)}

${JS.coment('exemplo C')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 4, 'max']) + JS.coment(true)}
${JS.coment('exemplo D')}
${JS.call('arrMatch', [JS.var('.arr1'), JS.var('.arr2'), 2, 'max']) + JS.coment(false)}`,
                downText: ['No exemplo A com o uso do argumento "**min**" definimos que a quantidade mínima de itens de **arr1** de quevem ser econtrados em **arr2** serão 2 mas 3 itens foram econtrados, logo a quantidade está dentro do exigido e o retorno é **true**. Já no exemplo B definimos que a quantidade mínima agora é 4 itens mas 3 foram encontrados, neste caso a quantidade está abaixo do exigido e o retorno é **false**.',
                'No exemplo C com o uso do argumento "**max**" definimos que a quantidade máxima de itens que devem ser encontrados é 4 mas 3 itens foram encontrados, logo a quantidade não ultrapassou o limite e obtemos um **true**. Já no exemplo D definimos que a quantidade máxima de itens é 2 mas sabemos que a quantidade de itens em **arr1** que serão encontrados em **arr2** é 3 e esta quantidade ultrapassa o limite estabelecido, logo obtemos um **false** como resultado.']
        }
        ]
    },
}

export default OH