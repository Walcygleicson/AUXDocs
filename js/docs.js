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

//Preencher SideNav
const listId = ['oh-list', 'dh-list', 'eh-list']
listId.forEach((id) => {

    //Obter uls
    const list = document.getElementById(id)

    //Nome das fn e mthd
    utils.arrOrder(Object.keys(docs[id])).forEach((itemName) => {
        const li = utils.createElement('li', { class: 'list-items', id: itemName }) //Criar li
        
        //Verificar se nome é função ou método //Se sim encapsula o propriedade em uma tag span
        const aContent = itemName.includes('.')? `<span class="method-frag">${itemName.split('.')[0]}</span>` + '.' + itemName.split('.')[1] : itemName

        li.appendChild(utils.createElement('a', { href: '#' + itemName }, aContent)) //Insere tag a

        list.appendChild(li) //Adiciona o elemento criado na ul
        //Evento de click
        li.addEventListener('click', () => { showDoc(itemName, li, id) })
        //Evento de load da janela
        window.addEventListener('load', ()=>{showDoc(itemName, li, id, 'load')})


        //console.log(li)
    })
})


//Ataulizar conteúdo do Main
function showDoc(hash, li, id, mode) {
    hash = hash == undefined ? window.location.hash.replace('#', '') : hash

    //Marcar item atual selecionado na barra de navegação lateral
    const items = [...document.querySelectorAll('.list-items')]
    const sumary = document.getElementById(id.replace('list', 'sumary'))
    var liHash

    items.forEach((el) => { //Remove class current-item se algum item tiver
        el.classList.remove('current-item')
        
    })

    if (mode == 'load') {
        //Adicionar classe current-item ao li referente ao hash quando a janela carregar
        
    } else {

        //Adicionar classe current-item ao li clicado
        li.classList.add('current-item')
        //Add classe current-sumary ao sumário do item clicado
        sumary.classList.add('current-sumary')
    }




    
}

//Montar cabeçalho do conteúdo



