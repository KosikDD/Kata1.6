const readmoretech = document.querySelector('.read-more-tech');
const readmoretechText = document.querySelector('.read-more-tech-text');
const arrows = document.querySelector('.arrow');
const tech_elements = document.querySelectorAll('.tech');


function hide_tech(elements, event) {
  for (element of elements){ 

    if(!element.classList.contains('hidden')) {
      element.classList.add('hidden');
      event.target.textContent = 'Показать все';
      event.currentTarget.classList.remove('arrow-reversed');
      readmoretech.classList.add('arrow');
    } else {
      element.classList.remove('hidden');
      event.target.textContent = 'Скрыть';
      event.currentTarget.classList.add('arrow-reversed');
      readmoretech.classList.remove('arrow');
    }
  }
}

readmoretech.addEventListener('click', function(event) {

  if (window.innerWidth >= 768 && window.innerWidth < 1120){
    hide_tech(tech_elements, event);
    for (let i = 0; i <= 2; i++){
        tech_elements[i].classList.remove('hidden');
    } 
  } else {
    hide_tech(tech_elements, event);
    for (let i = 0; i <= 3; i++){
        tech_elements[i].classList.remove('hidden');
    }
  }
});



function Hiddengroups() {
    
  for (element of tech_elements){
    element.classList.remove('hidden')
  }
  
  if (window.innerWidth >= 768 && window.innerWidth < 1120){
    for (let i = tech_elements.length - 1; i > 2; i--){
        tech_elements[i].classList.add('hidden');
    }

  } else {
    for (let i = tech_elements.length - 1; i > 3; i--){
        tech_elements[i].classList.add('hidden');
    }
  }

  if (readmoretech.classList.contains('arrow-reversed')) {
    readmoretech.classList.remove('arrow-reversed');
  }
  readmoretech.classList.add('arrow');
  readmoretechText.textContent = 'Показать все';
  
}

window.addEventListener('DOMContentLoaded',  () => {
  Hiddengroups();
});

window.addEventListener('resize',  () => {
  Hiddengroups();
});

