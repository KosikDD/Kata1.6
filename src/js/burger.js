let menu = document.querySelector(".burger-menu");
let button = document.querySelector(".exit-button");
let sidebar = document.querySelector('.sidebar')
let overlay = document.querySelector(".sidebar_overlay");
let modalCall = document.querySelector(".call-modal");
let modalChat = document.querySelector(".chat-modal");

button.addEventListener("click", () => toggleMenu(sidebar));

overlay.addEventListener("click", () => toggleMenu(sidebar));

function 
toggleMenu(selector) {
  selector.classList.toggle("sidebar_active");
  document.body.classList.toggle('noscroll')

  if (selector.classList.contains("sidebar_active")) {
    selector.classList.toggle("sidebar_active");
    document.body.classList.remove("noscroll");
  }
}

menu.addEventListener("click", function(event) {
  modalCall.classList.remove("call-modal_active");
  modalChat.classList.remove("chat-modal_active");
  sidebar.classList.toggle("sidebar_active");
  document.body.classList.toggle('noscroll')
});

export default toggleMenu;
