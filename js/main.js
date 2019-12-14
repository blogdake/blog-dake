document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const modalEsc = document.querySelectorAll('modal_visible');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () =>{
    modal.classList.toggle('modal_visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  // modal.onclick = function(event) {
  //   event.target.style.backgroundColor = 'yellow';
  
  //   event.target.tagName;
  
  //   event.target.style.backgroundColor = '';
  // };

  modal.onclick = function(event) {
  
    event.target.classList.remove('modal_visible');
  
  };

  document.addEventListener('keyup', (e) => {
   
      if(e.key === "Escape") {
        
        modal.classList.remove('modal_visible');
        
      }
  });
  
    
});