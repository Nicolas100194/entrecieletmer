(function($){
    $('#header-icon').click(function(e){
        e.preventDefault() /*supprimer le comportement par défaut*/
        $('body').toggleClass('with-sidebar') /*toggleClass ajoute ou supprime une classe si elle existe ou pas*/
    })

    $('#site-cache').click(function(e){
        $('body').removeClass('with-sidebar') /*quand je clique sur la zone sombre je retire la class with__sidebar*/
    })


})(jQuery);

const menuItem = document.getElementsByClassName('bloc-menu')
const sousMenus = document.getElementsByClassName('sous-menu')
var ssMenuAffiche
var largeur = window.innerWidth



/*function menuAuSurvol(){
    Array.from(menuItem).forEach(item => {
        item.addEventListener('mouseenter', (e)=>{
            ssMenuAffiche = e.target.childNodes[2]
            if (typeof ssMenuAffiche !== "undefined"){
                ssMenuAffiche.style.display = "block";
            }
        })
        item.addEventListener('mouseleave', (e) =>{
            if (typeof ssMenuAffiche !== "undefined" && item.parentNode.className !== 'footer-menu' ){
                ssMenuAffiche.style.display = "none"
            }
        })
    })
    Array.from(sousMenus).forEach(ssMenu =>{
        ssMenu.addEventListener('mouseleave', (e) =>{
            if(e.target.parentNode.parentNode.className != 'footer-menu'){
                e.target.style.display = "none"
            }

        })
    })
}*/

function menuAuClique(){
    Array.from(menuItem).forEach(item =>{
        item.addEventListener('click',(e)=>{
            if(item.parentNode.id == "menu-menu-principal"){
                if (e.target.parentNode.parentNode.className == 'menu-menu-principal-container'){
                    e.preventDefault()
                }
                if (e.target.nextElementSibling != null){
                    ssMenu = e.target.nextElementSibling
                }
                if (ssMenu != null && ssMenu.style.display != "block" ){
                    ssMenu.style.display = "block"
                } else if (ssMenu != null){
                    ssMenu.style.display = null

                }
            }
        })
    })
}



menuAuClique()

//animationMenu(largeur)



let headerLogo = document.querySelector('.logo-header-desktop');
let menuFixed = document.querySelector('.container-menus');
let header = document.querySelector("header");

window.addEventListener('scroll', function() {
    if (screen.width > 1215) {
        if (document.documentElement.scrollTop === 0) {
            headerLogo.classList.remove('header-scrolled');
            headerLogo.classList.add('logo-header-desktop');
            menuFixed.classList.remove('header-fixed');
            header.classList.remove('header-up');
        } else {
            headerLogo.classList.add('header-scrolled');
            headerLogo.classList.remove('logo-header-desktop');
            menuFixed.classList.add('header-fixed');
            header.classList.add('header-up');
        }
    }
});

let btnGallery = document.getElementsByClassName('section-inner-btn')
let sectionGallery = document.getElementsByClassName('section-inner-gallery')

Array.from(btnGallery).forEach(item =>{
    item.addEventListener('mouseenter', (e)=>{
        sectionGallery[0].classList.add('img-gallery-cabinet-blur')
    })
    item.addEventListener('mouseleave', (e)=>{
        sectionGallery[0].classList.remove('img-gallery-cabinet-blur')
    })
})


let WScreen;
let itemMenuPanier = document.getElementById('menu-item-2720');
WScreen = window.innerWidth;
itemMenuPanier.querySelector('a').textContent = '';


let site = document.getElementsByClassName('site-content')
let headerIcon = document.getElementById('header-icon')
let headerLogo2 = document.getElementsByClassName('logo-header')
let menuSecondaire = document.getElementsByClassName('menu-menu-secondaire-container')



site[0].addEventListener('scroll', (e) =>{
    if (site[0].scrollTop !== 0){
        header.classList.add('header-small')
        site[0].classList.add('site-content-scroll')
        headerIcon.classList.add('header-icon-small')
        menuSecondaire[0].classList.add('menu-menu-secondaire-container-small')
        headerLogo2[0].classList.add('logo-header-small')
    }
    else{
        header.classList.remove('header-small')
        site[0].classList.remove('site-content-scroll')
        headerIcon.classList.remove('header-icon-small')
        menuSecondaire[0].classList.remove('menu-menu-secondaire-container-small')
        headerLogo2[0].classList.remove('logo-header-small')
    }

})






