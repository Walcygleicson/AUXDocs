const aside = document.getElementById('aside')
const main = document.getElementById('main')

//Click no botão de abrir sideNav
const openNavButton = document.querySelector('.side-nav-button')
let navOn = false
openNavButton.addEventListener('click', () => {
    anim.openSideNav()
})

//Função mostrar e esconder side nav
const anim = {
    openSideNav() {
        if (aside.classList.contains('media-tablet')) {
            if (navOn) {
                aside.style.left = '-325px'
                navOn = !navOn
                
            } else {
                aside.style.left = 0
                navOn = !navOn
            }
        }
        
    },

    addFade(){
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


//Verificar Media Query sempre que a janela for redimencionada
window.addEventListener('resize', () => {
    addMediaClassName()
    //setCodeBlockWidth()
})

//função que add classe 'media-tablet'no body
function addMediaClassName() {
    
    const aside = document.getElementById('aside')
    if (window.matchMedia('(max-width: 1080px)').matches) {
        aside.classList.add('media-tablet')
    } else {
        aside.classList.remove('media-tablet')
        aside.removeAttribute('style')
        navOn = false
    }
    
}


//Contrair categorias da aba de navegação lateral quando o Footer entrar na tela
const footer = document.getElementById('footer')
var entered = false
var exited = true
window.addEventListener('scroll', () => {

    if (!aside.classList.contains('media-tablet')) {
        
        const pos = footer.getBoundingClientRect().top
        const screenH = window.innerHeight
        //Enquanto o footer n entrar checkar
        if (!entered && exited) {
            if (pos < screenH) {
                entered = true
                exited = false
            }
            if (entered) {
                closeDetails(true)
            }
        }
        
        //Se o footer entrou enquanto não sair chrckar
        if (entered && !exited) {
            if (pos > screenH) {
                entered = false
                exited = true
            }
            
            if (exited) {
                closeDetails(false)
            }
        }
    } else {
        closeDetails(false)
        entered = false
        exited = true
    }
    
    
})


const closeDetails = (close) => {
    const sideDetails = [...document.querySelectorAll('.scroller-container > details')]

    sideDetails.forEach((aba) => {
        if (close) {
            aba.open = false
        } else {
            aba.open = true
        }
    })
    
}



