import OH from "../js_docs/object_handler_docs.js";
import EH from "../js_docs/event_handler_docs.js"
import DH from "../js_docs/dom_handler_docs.js"
import utils from "../modules/utils.js";

const docs = {
    'oh-list': OH,
    'dh-list': DH,
    'eh-list':  EH
}


// SIDE NAV

//Evento de load da janela
window.addEventListener('load', () => {
    changeDocItem()
})

//Preencher SideNav
const listId = ['oh-list', 'dh-list', 'eh-list']
listId.forEach((id) => {

    //Obter uls
    const list = document.getElementById(id)
    const group = id.split('-')[0]

    //Nome das fn e mthd
    utils.arrOrder(Object.keys(docs[id])).forEach((itemName) => {
        const li = utils.createElement('li', { class: 'list-items ' + group}) //Criar li
        
        //Verificar se nome é função ou método //Se sim encapsula o propriedade em uma tag span
        const aContent = itemName.includes('.')? `<span class="method-frag">${itemName.split('.')[0]}</span>` + '.' + itemName.split('.')[1] : itemName

        li.appendChild(utils.createElement('a', { href: '#' + itemName }, aContent)) //Insere tag a

        list.appendChild(li) //Adiciona o elemento criado na ul

        //Evento de click
        li.addEventListener('click', () => { changeDocItem(li, id) })

    })
})


//Ataulizar conteúdo do Main
function changeDocItem(li, id) {

    //Marcar item atual selecionado na barra de navegação lateral
    const items = [...document.querySelectorAll('.list-items')]
    var sumary = [...document.querySelectorAll('.sumary')]
    var docInf = {
        name: null,
        group: null
    }
    

    items.forEach((el, i) => {
        //Remove class current-item se algum item tiver
        el.classList.remove('current-item')
        //Remove class current sumary
        if (i < sumary.length) {
            sumary[i].classList.remove('current-sumary')
        }


        //LOAD --------
    
        // Obter conteúdo para página através do hash se a atualização for por evento de load
        if (li == undefined && id == undefined) {
            const hash = window.location.hash.replace('#', '')
            const elemHash = el.children[0].href.split('#')[1]

            //Obtendo sumary da lista
            if (el.classList.contains('oh')) {
                sumary = document.getElementById('oh-sumary')
            } else if (el.classList.contains('dh')) {
                sumary = document.getElementById('dh-sumary')
            } else if (el.classList.contains('eh')) {
                sumary = document.getElementById('eh-sumary')
            }

            if (hash == elemHash) {
                el.classList.add('current-item')
                sumary.classList.add('current-sumary')

                docInf.name = elemHash
                docInf.group = el.parentNode.id
            }
        }
        
    })


    //CLICK ------
    //Obter conteúdo para a página quando o usuário selecionar item da side nav
    if (li && id) {
        //Estilizar current-item
        sumary = document.getElementById(id.replace('list', 'sumary'))

        //Adicionar classe current-item ao li clicado
        li.classList.add('current-item')
        //Add classe current-sumary ao sumário do item clicado
        sumary.classList.add('current-sumary')

        docInf.name = li.children[0].href.split('#')[1]
        docInf.group = id
    }

    buildContent(docInf)
  
}

function buildContent(docInf) {
    const itemDoc = docs[docInf.group][docInf.name]
    //Montar cabeçalho do conteúdo
    header(itemDoc, docInf.name)
    //Montar sessão de descrição
    description(itemDoc, docInf.name)
    //Montar sessões de detalhes

    const codeBlock = document.getElementById('code-block')
    codeBlock.innerHTML = itemDoc.details[0].code
    
}

//CONTENT HEADER
function header(item, name) {
    console.log(item)
    var fnType //Armazena se é função ou método

    name.includes('.') ?
        (name = `<span class="head-fn-frag">${name.split('.')[0]}</span>.${name.split('.')[1]}`,
        fnType = 'Método')
        : fnType = 'Função'
    
    //Elementos
    const fnName = document.getElementById('fn-name')
    const returns = document.getElementById('returns')
    const detailsBy = document.getElementById('details-by')

    //Inserir nome da função ou método
    fnName.innerHTML = name
    //Inserir tipos de retorno
    returns.innerHTML = ''
    item.returns.forEach((type, i, arr) => {
        const div = arr[i + 1] ? ' | ' : ''
        returns.innerHTML += `<span>${type}</span>${div}`
        
    })

    //Inserir detalhes do rodapé do head
    const param = paramsNumb(item.params)
    detailsBy.innerText = `${fnType} | ${param.len} Parâmetros | ${param.required} Obrigatórios | ${param.control_args} control_arg `
 
}

//DESCRIPTION SECTION
function description(item, name) {
    const prmNames = Object.keys(item.params) //Nome dos parametros
    const description = item.description // Paragrafos da descrição principal
    
    //EXEMPLO SINTAXE
    const sintaxExample = {
        name: document.getElementById('evoke-name'),
        paramsCapsule: document.getElementById('params-capsule')
    }

    sintaxExample.name.innerHTML = name.includes('.') ? `<span class="method-frag">${name.split('.')[0]}</span>.${name.split('.')[1]}` : name

    //Inserir params
    sintaxExample.paramsCapsule.innerHTML = (function () {
        var pString = ''
        prmNames.forEach((prm, i, arr) => {
            pString += "<span>" + prm + "</span>" + (arr[i + 1]==undefined?'': ', ')
        })

        return pString
    })()


    //Inserir descrição da função ou método
    const descriptionFild = document.getElementById('description-field')
    descriptionFild.innerHTML = ''
    description.forEach((parag) => {
        //Buscar por marcação de negrito no texto e encapsular palavra em uma tag b
        // const boldMarks = parag.match(/\*\*(\w+|.+)\*\*/g)
        // if (boldMarks) {
        //     boldMarks.forEach((mark) => {
        //         parag = parag.replaceAll(mark, `<b>${mark.replaceAll('*', '')}</b>`)
                
        //     })
        // }

        //Inserir parágrafos
        descriptionFild.innerHTML += '<p>' + parseBoldMarks(parag) + '</p>'  
    })
    
    //Esconder ou monstrar campo de Nota:
    const noteWarn = document.getElementById('note-warn')
    if (!prmNames.includes('control_arg')) {
        noteWarn.style.display = "none"
    } else {
        noteWarn.style.display = "block"
    }
    
    //Descrição dos Parâmetros
    paramsDescription(item.params)

}

//PARAMS DESCRIPTIONS
//Esta função executa em description()
function paramsDescription(params) {
    const prmList = document.getElementById('prm-list')
    prmList.innerHTML = ''

    //Se não houver parametros
    if (params == 0) {
        prmList.innerHTML = '<li><p> Não possui nenhum parâmetro!'
    } else { //Se houver parametros

        Object.keys(params).forEach((name) => {
            const prm = params[name]
            //Criar lista de parametro
            const li = utils.createElement('li')
            //Título
            const title = utils.createElement('h4', { class: 'param-name' }, name + ':')
            if (prm.required == false) {
                title.classList.add('optional')
            }

            //Inserir span de tipo
            title.innerHTML += (function () {
                //Obter tipos
                const prmTypes = prm.type.map((e) => { return '<span>' + e + '</span>' })
                return '<span class="arg-type">' + prmTypes.join(' | ') + '</span>'
            
            })()

            li.appendChild(title)

            //Ul da descrição do parametro
            let descUl = utils.createElement('ul', { class: 'param-description' }, (function () {
                //Inserir conteúdo da descrição do parametro
                var liContents = ''

                prm.description.forEach((content) => {
                    content = parseBoldMarks(content)
                    liContents += '<li>' + content + '</li>'
                })

                return liContents
                
            })())


            
            //Verificar se possui argumentos padrão e criar lista de descrição de cada um
            const args = prm.args
            if (args) {
                const argList = Object.keys(args)
                const ulArgs = utils.createElement('ul', {class: 'control-args'})
        
                argList.forEach((argName) => {
                    
                    //Criar li de args
                    const liArg = utils.createElement('li', { class: 'arg-li' })
                    //Adicionar nome do argumento
                    liArg.appendChild(utils.createElement('h4', {}, `"${argName}":`))

                    //Inserir paragrafos de descrição
                    args[argName].forEach((des) => {
                        des = parseBoldMarks(des)
                        const p = utils.createElement('p', {}, des)
                        liArg.appendChild(p)
                    })



                    ulArgs.appendChild(liArg)
                })

                descUl.appendChild(ulArgs)
                
            }
            
            li.appendChild(descUl)
            
            prmList.appendChild(li)

        })

    }
}



//AUX FUNCS
//Função aux pega quantidade de parametros, param obrigatorios e quantidade de control args
const paramsNumb = function (paramList) {
    var result = {
        len: Object.keys(paramList).length,
        required: Object.values(paramList).filter((e) => {
            if (e.required == true) {
                return e
            }
            
        }).length,

        optional: null,
        control_args: Object.keys(paramList).filter((e) => {
            if(e.includes('control_arg')){return e}
        }).length
    }

    result.optional = result.len - result.required
    return result
}

//Procura por marckdanws de texto negrito em textos **aaa** e envolve em uma tag b
const parseBoldMarks = function (text) {
    const boldMarks = text.match(/\*\*(\w+|.+)\*\*/g)
    
    if (boldMarks) {
        boldMarks.forEach((mark) => {
            text = text.replaceAll(mark, `<b>${mark.replaceAll('*', '')}</b>`)
            
        })
    }

    return text
}



