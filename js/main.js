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

  // modal.addEventListener('click', switchModal);

  document.addEventListener('keyup', (e) => {
   
      if(e.key === "Escape") {
        
        modal.classList.remove('modal_visible');
        
      }
  });
  
    
});