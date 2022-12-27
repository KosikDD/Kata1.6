let callModal = document.querySelectorAll(".call-button");
let chatModal = document.querySelectorAll(".message-button");
let buttonCall = document.querySelectorAll(".exit-button-call");
let buttonChat = document.querySelectorAll(".exit-button-chat");
let calloverlay = document.querySelector(".call-modal_overlay");
let chatoverlay = document.querySelector(".chat-modal_overlay");
let modalCall = document.querySelector(".call-modal");
let modalChat = document.querySelector(".chat-modal");
let sidebar = document.querySelector('.sidebar')

for (j of buttonCall) {
  j.addEventListener("click", () => toggleCall());
}

for (j of buttonChat) {
  j.addEventListener("click", () => toggleChat());
}

calloverlay.addEventListener("click", () => toggleCall());

chatoverlay.addEventListener("click", () => toggleChat());

function toggleCall() {
  modalCall.classList.toggle("call-modal_active");
  document.body.classList.remove("noscroll");

  if (modalCall.classList.contains("call-modal_active")) {
    modalCall.classList.toggle("call-modal_active");
  }
}

function toggleChat() {
  modalChat.classList.toggle("chat-modal_active");
  document.body.classList.remove("noscroll");

  if (modalChat.classList.contains("chat-modal_active")) {
    modalChat.classList.toggle("chat-modal_active");
  }
}

for (i of callModal) {
  i.addEventListener("click", function (event) {
    
  modalChat.classList.remove("chat-modal_active");
    sidebar.classList.remove("sidebar_active");
    modalCall.classList.toggle("call-modal_active");
    document.body.classList.toggle("noscroll");
  });
}

for (i of chatModal) {
  i.addEventListener("click", function (event) {
    modalCall.classList.remove("call-modal_active");
    sidebar.classList.remove("sidebar_active");
    modalChat.classList.toggle("chat-modal_active");
    document.body.classList.toggle("noscroll");
  });
}
