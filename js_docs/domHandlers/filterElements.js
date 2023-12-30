import { JS, HTML } from "../../modules/code-themes.js"

const filterElements = {
    returns: ['array'],

    description: ['Busca por elementos no DOM (ou em uma lista de elementos) usando como filtro seus atributos globais e valor e retorna um **array** contendo todos os elementos que passaram pela filtragem. Além dos atributos globais presentes em toda tag HTML também é possível usar o nome da tag e o conteúdo de texto como filtro (tag: "nome", content: "text").','Se nenhum elemento for encontrado retorna um **array** vazio.'],

    params: {
        attrs: {
            type: ['array'],

            required: true,

            description: ['Recebe um dicionário (object) com propriedades referentes aos atributos globais e valores que um determinado elemento deve possuir para passar na filtragem. Chave e valor devem ser o nome na propriedade e seu valor.']
        },


        searchIn: {
            type: ['HTMLElement', 'string', 'elementList'],

            required: false,

            description: ['Especifica o local a partir de onde a filtragem deve iniciar. Se nada for passado, por padrão, a filtragem será feita a partir de **document** em todos as camadas.', 'Pode ser passado um **HTMLElement** ou um seletor válido do tipo string igual ao que é usado em document.querySelector(). Fora estes também é possível passar um **elementList** que nada mais é do que qualquer lista de elementos como um NodeList, um HTMLCollection ou um Array que contenha somente elementos HTML ou seletores válidos que referenciem a elementos existentes no DOM.', 'Se passado um **HTMLElement** a filtragem é feita em todos os elementos filhos e seus descendentes. Para uma especificação melhor de camada usar um seletor válido do tipo string.']
        },

    },

    
    details: [
        {
            title: 'Filtrar elementos do documento',

            upText: ['Vamos pegar elementos que possuam um determinado atributo com um determinado valor a partir deste exemplo de documento html.','##HTML5##'],
            code:HTML.document(`${HTML.tag('div', {id: 'container-1'})}
            ${HTML.tag('input', { type: 'text', required: true, id: 'inpt-1' })}
            ${HTML.tag('input', { type: 'email', required: true, id: 'inpt-2'})}
            ${HTML.tag('input', { type: 'text', id: 'inpt-3'})}
    ${HTML.close('div')}
    
    ${HTML.tag('div', {id: 'container-2'})}
            ${HTML.tag('input', { type: 'text', required: true, id: 'inpt-a' })}
            ${HTML.tag('input', { type: 'number', disabled: true, id: 'inpt-b' })}
            ${HTML.tag('input', { type: 'text'})}
    ${HTML.close('div')}`),
            
        },
        {
           
            title: false,
            upText: ['##JavaScript##'],
            
            code: `${JS.const('attrs', {type: 'text', required: true, tag: 'input' })}
            
${JS.call('filterElements', [JS.const('.attrs')])}

${JS.coment('Retorno >>>')} [
    0: ${HTML.tag('input', { type: 'text', required: true, id: 'inpt-1' })},
    1: ${HTML.tag('input', { type: 'text', required: true, id: 'inpt-a' })}
]`,
            downText: ['A constante **attrs** define os atributos e os valores que servirão de filtro para a busca, logo obtemos como resultado um array contendo dois elementos que passaram pela filtragem. Compare com o exemplo HTML5 do bloco acima.', 'Note que os elementos obtidos foram apenas os que possuem o atributo **type** com o valor "text", que possuem um atributo **required** e que são tags do tipo "input". A propriedade **tag** não é um atributo global de um elemento HTML mas pode ser usado como filtro, assim como seu conteúdo de texto nomeando uma propiedade de **content** e inserindo seu valor de texto.', 'É importante observar que neste primeiro momento, sem o uso do segundo parâmetro, a filtragem é feita por todo do documento em todas as camadas de nós e retorna todo e qualquer elemento que passar pela filtragem.']
        },


        {
            title: 'Elementos que possuem ou não um atributo',

            upText: ['Também é possível filtrar por elementos que possuem ou não possuem um determinado atributo, para isto basta definir o valor da propriedade como **true** ou **false**. Este valor precisa ser do tipo **boolean**.', '##HTML5##'],

            code: HTML.document(`${HTML.tag('input', { type: 'text', id: 'inpt-1', class: 'foo' })}
    ${HTML.tag('input', {type: 'text', id: 'inpt-2', name: 'bar', class: 'foo'})}`)
        },


        {
            title: false,

            upText: ['##JavaScript##'],

            code: `${JS.coment('Exemplo A:')}
${JS.call('filterElements', { class: 'foo', type: 'text', name: true })}

${JS.coment('Retorno >>')} [ ${HTML.tag('input', {type: 'text', id: 'inpt-2', name: 'bar', class: 'foo'})}]


${JS.coment('Exemplo B:')}
${JS.call('filterElements', { class: 'foo', type: 'text', name: false })}

${JS.coment('Retorno >>')} [ ${HTML.tag('input', { type: 'text', id: 'inpt-1', class: 'foo' })} ]`,
            
            
            downText: ['Temos dois elementos input como exemplo no bloco de HTML5 mas o primeiro input não possui um atributo **name**, já o segundo input possui um com valor. No bloco de código JS temos dois exemplos onde filtramos elementos pelos atributos **class**, **type** e **name**.', 'No exemplo A, como passamos o valor **true** na propriedade **name**, procuramos por elementos que possuem o atributo **name** independente de seu valor e obtemos como resultado o único elemento input que possui este atributo.',
            'Já no exemplo B passamos o valor **false** na propriedade **name** então procuramos por elementos que não possuem o atributo **name** e obtemos como resultado o único elemento que não possui este atributo.'] 
        },


        {
            title: 'Filtrar por lista de classe',

            upText: ['Diferente dos demais, o atributo **class** usado para filtrar por nome de classe pode ser usado de outra maneira, como filtrar não só por um único nome de classe mas também por uma lista de nomes de classe, assim podemos filtrar por elementos HTML que possuem uma determinada quantidade de nomes de classe.', 'Para fazer a filtragem por lista de classe basta atribuir um **array** à propriedade **class** contendo os nomes de classe desejados.', '##HTML5##'],

            code: HTML.document(`${HTML.tag('div', { id: 'div-1', class: 'foo bar xoxo' }, 'hello')}
    ${HTML.tag('div', { id: 'div-2', class: 'bar test xoxo' }, 'hello')}
    ${HTML.tag('div', {id: 'div-3', class: 'foo bar xoxo div3'}, 'hello')}`),
        },

        {
            title: false,
            upText: ['##JavaScript##'],

            code: `${JS.call('filterElements', { content: 'hello', class: JS.arr(['foo', 'bar', 'xoxo']) })}
            
${JS.coment('Retorno >>')} [
    0: ${HTML.tag('div', { id: 'div-1', class: 'foo bar xoxo' }, 'hello')}
    1: ${HTML.tag('div', {id: 'div-3', class: 'foo bar xoxo div3'}, 'hello')}
]`,
            downText: ['Definimos um filtro para o conteúdo do elemento com a propriedade **content**, embora **content** não seja um atributo global de um elemento é possível usá-lo aqui, e por fim definimos os nomes de classes que o elemento deve conter.', 'Como resultado obtemos dois dos três elementos presentes no documento pois um deles não possui um dos nomes de classe requeridos. Compare os elementos do bloco de código HTML5.', 'Note que os demais nomes de classe que sobraram não interferem no resultado final, já que não são avaliados no filtro.']
        },

        {
            title: 'Parâmetro searchIn',
            upText: ['Se nenhum argumento for passado no segundo parâmetro (**searchIn**) a busca será feita a partir de **document** em todas as camadas. É possível passar um elemento como argumento, dessa forma, ao ínvés de começar por **document** a busca começará a partir desse elemento filtrando todos os seus filhos e descendentes. Este elemento pode ser uma variável ou pode ser especificado um seletor válido do tipo string que aponte para um determinado elemento no DOM.','##HTML5##'],
            
            code: HTML.document(`${HTML.tag('div', { id: 'container' })}
        ${HTML.tag('a', { href: 'index.html', id: 'link-1' }, 'home')}

        ${HTML.tag('ul')}
            ${HTML.tag('li')}
                ${HTML.tag('a', {href: 'about.html', id: 'link-2'}, 'about')}
            ${HTML.close('li')}

            ${HTML.tag('li')}
                ${HTML.tag('a', { href: 'index.html', id: 'link-3' }, 'home')}
            ${HTML.close('li')}
        ${HTML.close('ul')}
    ${HTML.close('div')}
    
    ${HTML.tag('a', { href: 'index.html', id: 'link-outside-container' }, 'home')}`)   
        }, 

        {
            title: false,

            upText: ['##JavaScript##', '**Exemplo com variável.**'],
            code: `${JS.const('elem', JS.method('document.getElementById', ['#container']))}
${JS.const('attrs',{href: 'index.html'})}
            
${JS.call('filterElements', [JS.const('.attrs'), JS.const('.elem')])}

${JS.coment('Retorno >>')} [
    0: ${HTML.tag('a', { href: 'index.html', id: 'link-1' }, 'home')}
    1: ${HTML.tag('a', { href: 'index.html', id: 'link-3' }, 'home')}
]`,
            
            downText: ['Desta forma o filtro foi realizado apenas nos elementos de dentro da tag **div#container** e obtivemos os dois elementos que possuem o atributo **href** com o valor **index.html**.',
            'Podemos também passar um seletor no lugar da variável, reduzindo a necessidade de ter que armazenar elementos em variáveis toda vez. Observe:']
        },

        {
            title: false,

            upText: ['##JavaScript##', '**Exemplo com seletor.**'],

            code: `${JS.call('filterElements', [JS.const('.attrs'), '#container > ul'])}
            
${JS.coment('Retorno >>')} [${HTML.tag('a', { href: 'index.html', id: 'link-3' }, 'home')}]`,
            
            downText: ['Utilizando um seletor válido especificamos que queremos filtrar os elementos da tag **ul** que é diretamente filho da tag **div#container**, logo obtemos o úco elemento presente dentro da tag **ul** que contém o atributo **href** com o valor **index.html**.']
        },

        {
            title: ['Filtrando lista de elementos'],

            upText: ['Além de um elemento ou seu seletor também é possível fazer uma filtragem a partir de um **elementList** que pode ser um **nodeList**, Para **AUX.js** um **elementList** é qualquer lista ou array que contenha apenas elementos DOM ou algo que aponte para um elemento existente no DOM como um seletor string.','Um **array** contendo apenas seletores válidos é considerado um **elementList** contanto que o seletor aponte para um elemento existente no DOM. Se o elemento que um seletor estiver apontando ainda não existir no DOM o seu valor é um **null** e logo o **array** não pode ser um **elementList**.', ' No caso de um **nodeList** obtido atravéz da propriedade nativa JavaScript **.childNodes** que retorna todos os nós filhos de um elemento incluindo seus nós de conteúdo de texto e comentários, os nós do tipo **Text** e **Comment** são ignorados e apenas os nós do tipo **HTMLElement** são recolhidos para a filtragem.']
        }
        ]
}


export default filterElements