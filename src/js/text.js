const textTablet = document.querySelector(".info-box__tablet-content");
const textDesktop = document.querySelector(".info-box__desktop-content");
const textButton = document.querySelector(".info-box__btn");

function hidetext(event) {
  if (window.innerWidth < 768 && !textButton.classList.contains('alltext')) {
    textTablet.style.display = "none";
    textDesktop.style.display = "none"
    event.target.textContent = "Читать далее";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120 && !textButton.classList.contains('alltext')) {
    textDesktop.style.display = "none"
    event.target.textContent = "Читать далее";
  } 
}

textButton.addEventListener("click", function (event) {
  
  if (window.innerWidth < 768) {
    hidetext(event)
    event.target.textContent = "Скрыть";
    textTablet.style.display = "inline";
    textDesktop.style.display = "inline";
    textButton.classList.toggle("alltext");
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    hidetext(event)
    textDesktop.style.display = "inline";
    textTablet.style.display = "inline";
    event.target.textContent = "Скрыть";
    textButton.classList.toggle("alltext");
    
  } else {
    textDesktop.style.display = "inline";
    textTablet.style.display = "inline";
    event.target.textContent = "Скрыть";
    textButton.classList.add("alltext");
    alert('Это пока что весь текст')
  }

  hidetext(event)
});
