
//Click no botão de abrir sideNav
const openNavButton = document.querySelector('.side-nav-button')
let navOn = false
openNavButton.addEventListener('click', () => {
    anim.openSideNav()
})

//Função mostrar e esconder side nav
const anim = {
    openSideNav() {
        const aside = document.getElementById('aside')
        if (navOn) {
            aside.style.left = '-325px'
            navOn = !navOn
            
        } else {
            aside.style.left = 0
            navOn = !navOn
        }
        
    },

    addFade(){
        const main = document.getElementById('main')
        main.removeAttribute('class')
        main.classList.add('fade-transition')
        
        setTimeout(() => {
            main.removeAttribute('class') 
        }, 500)
    },

    
    scrollTop(){
        window.scroll({top:0, left: 0, behavior: 'smooth'})
    }
}
