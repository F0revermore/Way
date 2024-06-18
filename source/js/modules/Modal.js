export default class Modal {
  constructor() {
    this.modalInit();
  };

  modalInit() {
    const showModalButtonsNodes = document.querySelectorAll('.js-modal-button');
    const closeModalButtonNode = document.querySelector('.js-close-modal');

    showModalButtonsNodes.forEach(element => {
      element.addEventListener("click", () => {
        document.querySelector(`[data-modal-body="${element.dataset.modalButton}"]`).classList.add('is-active');
      });
    });

    closeModalButtonNode.addEventListener("click", () => {
      document.querySelector(`[data-modal-body="${closeModalButtonNode.dataset.closeModal}"]`).classList.remove('is-active');
    })
  };

}
