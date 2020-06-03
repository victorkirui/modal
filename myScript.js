let modalButton = document.getElementById('modalBtn');
let closeButton = document.getElementsByClassName('closeBtn')[0];
let modal = document.getElementById('simpleModal');

modalButton.addEventListener('click',showModal);
closeButton .addEventListener('click',hideModal);
window.addEventListener('click',closeModal);

function showModal(){
  modal.style.visibility = 'visible';
}

function hideModal(){
  modal.style.visibility = 'hidden';
}
function closeModal(e){
  if(e.target == modal){
    modal.style.visibility = 'hidden';
  }
}