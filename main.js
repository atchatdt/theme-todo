const iMenuMobile = document.getElementById('iMenuMobile');
const menuMobile =  document.getElementById('menu-mobile')
const bgMenuMobile = document.getElementById('bg-menu-mobile');
iMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.add('show-menu-mobile')
    bgMenuMobile.classList.add('show-bg-menu-mobile')
})

bgMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('show-menu-mobile')
    bgMenuMobile.classList.remove('show-bg-menu-mobile')
})
