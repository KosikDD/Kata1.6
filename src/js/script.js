const readmore = document.querySelector('.read-more');
const readmoreText = document.querySelector('.read-more-text');
const arrow = document.querySelector('.arrow');
const brand_elements = document.querySelectorAll('.brand');

function hide(elements, event) {
  for (element of elements){ 

    if(!element.classList.contains('hidden')) {
      element.classList.add('hidden');
      event.target.textContent = 'Показать все';
      event.currentTarget.classList.remove('arrow-reversed');
      readmore.classList.add('arrow');
    } else {
      element.classList.remove('hidden');
      event.target.textContent = 'Скрыть';
      event.currentTarget.classList.add('arrow-reversed');
      readmore.classList.remove('arrow');
    }
  }
}

readmore.addEventListener('click', function(event) {
  if (window.innerWidth >= 768 && window.innerWidth < 1120){
    hide(brand_elements, event);
    for (let i = 0; i <= 5; i++){
      brand_elements[i].classList.remove('hidden');
    } 
  } else {
    hide(brand_elements, event);
    for (let i = 0; i <= 7; i++){
      brand_elements[i].classList.remove('hidden');
    }
  }
});



function Hiddengroup() {
  for (element of brand_elements){
    element.classList.remove('hidden')
  }
  
  if (window.innerWidth < 768){
    for (let i = brand_elements.length - 1; i > 8; i--){
      brand_elements[i].classList.add('hidden');
    }
    
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120){
    for (let i = brand_elements.length - 1; i > 5; i--){
      brand_elements[i].classList.add('hidden');
    }

  } else {
    for (let i = brand_elements.length - 1; i > 7; i--){
      brand_elements[i].classList.add('hidden');
    }
  }

  if (readmore.classList.contains('arrow-reversed')) {
    readmore.classList.remove('arrow-reversed');
  }
  readmore.classList.add('arrow');
  readmoreText.textContent = 'Показать все';
  
}

window.addEventListener('DOMContentLoaded',  () => {
  Hiddengroup();
});

window.addEventListener('resize',  () => {
  Hiddengroup();
});


