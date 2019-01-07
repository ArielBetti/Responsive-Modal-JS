function iniciamodal(ModalID) {
	if (localStorage.FechaModal !== ModalID) {
	const modal = document.getElementById(ModalID);
	modal.classList.add('modalup');
	modal.addEventListener('click', (fechar) => {
		if(fechar.target.id == ModalID || fechar.target.className == 'fechar') {
			modal.classList.remove('modalup');
			//*Abre o modal apenas 1 vez na máquina do cliente: localStorage.FechaModal = ModalID;
		}
  	});
 }
}

const inicia = document.querySelector('.inicia');
	inicia.addEventListener('click', () => iniciamodal('modal-promocao'));

	document.addEventListener('scroll', () => {
		if (window.pageYOffset > 350) {
		iniciamodal('modal-promocao');			
		}
	});


