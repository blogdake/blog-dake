document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
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
   
    // if (e.keyCode === 27){
    //   modal.classList.toggle('modal_visible');
    // } else{
    //   console.log('no esc')
    // }
      if(e.key === "Escape") {
        modal.classList.toggle('modal_visible');
      }
  });
  document.addEventListener(function keyPress (e) {
    
  });
    
});