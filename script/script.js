let link = document.querySelectorAll('.menu a')



link.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        e.preventDefault()

        let id = elem.getAttribute('href')
        let blockId = document.querySelector(id)

        window.scrollTo({
            top: blockId.offsetTop,
            behavior: "smooth"
        })
    })
})



let block = document.querySelector('#block2')
let menu = document.querySelector('.menu')

window.addEventListener('scroll', function () {

    if (this.scrollY >= block.offsetTop - window.innerHeight / 3) {
        menu.style.position = 'fixed'
        menu.style.background = 'grey'
        menu.style.transition = '.4s'

    } else {
         menu.style.background = 'none'
    }
})



