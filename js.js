function ativar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
    const sectmain = document.getElementById('main-conteiner')
    sectmain.classList.toggle('main-conteiner-disabled')
    const mobilemenu = document.getElementById('mobile-menu')
    mobilemenu.classList.toggle('mobile-menu-active')
    
    const body = document.querySelector('body')
    body.classList.toggle('body-active-menu')

    const liopt = document.querySelectorAll('.li-opt')
    console.log(liopt)
    liopt.forEach((e) =>{
        e.classList.toggle('liactive')
    })
}