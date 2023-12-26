

const utils = {
    // função que ordena array de string por ordem alfabética
    arrOrder(arr) { return arr.sort(); },
    
    //função que cria elementos html e insere os atributos
    createElement(tag, attrs, content) {
        var element = document.createElement(tag);
        for (var key in attrs) {
            if (attrs[key]) {
                element.setAttribute(key, attrs[key]);
            }
        }
        element.innerHTML = content==undefined? '': content

        return element;
    },

    capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); },
    
    //Função pega o filho de um elemento a partir de um seletor
    getChild(parent, child_selector) {
        return parent.querySelector(child_selector) ?
            parent.querySelector(child_selector) : null; 
        },
    
}

export default utils