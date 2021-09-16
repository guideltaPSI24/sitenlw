/* abre e fecha o menu quano clicar no icone: hamburguer  e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = docoment.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navheight) {
    //scroll e maior que a altura do header
    header.classlist.add('scroll')
    console.log('mair')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})
