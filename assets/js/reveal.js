ScrollReveal({ container: document.getElementsByClassName('site-content')})
    let anim = {
        distance: '50px',

        duration: 1000,

    }
function ScrollRevealImg(){
    ScrollReveal().reveal(".img-presentation", anim)
    ScrollReveal().reveal(".title-txt", anim)
    ScrollReveal().reveal(".col-content-portrait", anim)
    ScrollReveal().reveal(".col-img-portrait", anim)
    ScrollReveal().reveal(".col-txt-cabinet", anim)
}

window.addEventListener('DOMContentLoaded', function (){
    ScrollRevealImg()
})





/*function reveal() {
    let elements = document.querySelectorAll('div.reveal-from-left, div.reveal-from-right, div.reveal-from-bottom, section.reveal-from-invisible')
    let options = {
        root: null,
        rootMargin: "10%",
        threshold: .8
    }

    console.log(elements)

    const handleIntersect = function (entries) {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('reveal-visible')
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    elements.forEach(element => {
        observer.observe(element)
    })
}*/

