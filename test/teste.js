


function createBtnSwitch() {
    const btn_switch = [...document.querySelectorAll('.--btn-switch')]

    
    btn_switch.forEach((but) => {
        const index = [...but.parentElement.children]
        
        index.forEach((el, i) => {
            if (el === but) {
                const btn = document.createElement('button')
                const attr = el.getAttributeNames()
    
                attr.forEach((e) => {
                    const atributes = el.getAttribute(e)
                    btn.setAttribute(e, atributes)
                })
    
                //Botão movel
                const switcher = document.createElement('div')
                switcher.classList.add('_switcher_')
                btn.appendChild(switcher)
    
                
                btn.addEventListener('click', () => {
                    if (switcher.classList.contains('_switch_on_')) {
                        switcher.classList.remove('_switch_on_')
                        switcher.classList.add('_switch_off_')
                        btn.value = 'off'
                    } else {
                        switcher.classList.remove('_switch_off_')
                        switcher.classList.add('_switch_on_')
                        btn.value = 'on'
                    }
                    console.log(btn)
                })
                but.parentNode.replaceChild(btn, but)
                
            }
        })
    })


    
}

createBtnSwitch()

