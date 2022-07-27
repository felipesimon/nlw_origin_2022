window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
}


function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    //verificando se o início da seção passou da targetLine
    const sectionStart = section.offsetTop
    const sectionHeight = section.offsetHeight
    
    const sectionStartReachOrPassedTargetline = targetLine >= sectionStart

    //verificando se o fim da seção está abaixo da targetLine
    const sectionEndsAt = sectionStart + sectionHeight

    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries = sectionStartReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll() {
    if (scrollY > 0) {
        navBar.classList.add('scroll')
    } else {
        navBar.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 700) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}



ScrollReveal({
origin: 'top',
distance: '30px',
duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about .content,
#about img`);