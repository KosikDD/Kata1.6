const textTablet = document.querySelector(".info-box__tablet-content");
const textDesktop = document.querySelector(".info-box__desktop-content");
const textButton = document.querySelector(".info-box__btn");
const textButtonText = document.querySelector(".info-box__btn-text");

function hidetext(event) {
  if (window.innerWidth < 768 && !textButton.classList.contains('alltext')) {
    textTablet.classList.add('hidden');
    textDesktop.classList.add('hidden');
    event.target.textContent = "Читать далее";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120 && !textButton.classList.contains('alltext')) {
    textDesktop.classList.add('hidden');
    event.target.textContent = "Читать далее";
  } 
}

textButton.addEventListener("click", function (event) {
  
  if (window.innerWidth < 768) {
    hidetext(event)
    event.target.textContent = "Скрыть";
    textTablet.classList.remove('hidden');
    textDesktop.classList.remove('hidden');
    textButton.classList.toggle("alltext");
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    hidetext(event)
    textDesktop.classList.remove('hidden');
    textTablet.classList.remove('hidden');
    event.target.textContent = "Скрыть";
    textButton.classList.toggle("alltext");
    
  } else {
    textDesktop.classList.remove('hidden');
    textTablet.classList.remove('hidden');
    event.target.textContent = "Скрыть";
    textButton.classList.add("alltext");
    alert('Это пока что весь текст')
  }

  hidetext(event)
});


function Hidetextinitial() {
  
  if (window.innerWidth >= 768 && window.innerWidth < 1120){
    textDesktop.classList.add('hidden');
    textButtonText.textContent = "Читать далее";
  } else  if (window.innerWidth < 768) {
    textTablet.classList.add('hidden');
    textDesktop.classList.add('hidden');
    textButtonText.textContent = "Читать далее";
  }
}

window.addEventListener('DOMContentLoaded',  () => {
  Hidetextinitial();
});

window.addEventListener('resize',  () => {
  Hidetextinitial();
});
