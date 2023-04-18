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



function menuAuSurvol(){
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
}

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



function animationMenu(largeur){
    if (largeur > 992){
        menuAuSurvol()
    } else if(largeur < 992){
        menuAuClique()
    }
}

animationMenu(largeur)

window.addEventListener('resize', () =>{
    largeur = window.innerWidth
    animationMenu(largeur)
})


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