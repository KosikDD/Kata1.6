const menu = document.querySelector('.burger-menu')
const button = document.querySelector('.exit-button')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.sidebar_overlay')
const modalCall = document.querySelector('.call-modal')
const modalChat = document.querySelector('.chat-modal')
const hiddenMenu = document.querySelector('.hidden-button')

button.addEventListener('click', () => toggleMenu(sidebar))

overlay.addEventListener('click', () => toggleMenu(sidebar))

function toggleMenu(selector) {
  selector.classList.remove('sidebar_active')
  document.body.classList.remove('noscroll')
}

menu.addEventListener('click', function () {
  modalCall.classList.remove('call-modal_active')
  modalChat.classList.remove('chat-modal_active')
  sidebar.classList.toggle('sidebar_active')
  document.body.classList.toggle('noscroll')
})

hiddenMenu.addEventListener('click', function () {
  modalCall.classList.remove('call-modal_active')
  modalChat.classList.remove('chat-modal_active')
  sidebar.classList.toggle('sidebar_active')
  document.body.classList.toggle('noscroll')
})
export default toggleMenu
