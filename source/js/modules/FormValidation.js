export default class FormValidation {
  constructor() {
    this.init();
  }
  init() {
    document.querySelectorAll("[data-form-validation]").forEach((form) => {
      const inputsNodes = form.querySelectorAll("input");
      const closeButtonNode = form.querySelector('.js-close-btn')

      const phoneRegex = /(\+7)\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}/g;
      const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
      

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        let array = []
        inputsNodes.forEach(input => {
          if (input.closest('div').classList.contains('invalid') || input.value === "" ) {
            array.push(false);
          } else {
            array.push(true);
          };
          if (!array.includes(false)) {
            form.classList.add('success');
          }
        });
      });

      inputsNodes.forEach((input) => {
        if (input.type === "text" || input.type === "email") {
          input.addEventListener("input", () => {
            if (input.dataset.type === "phone") {

              if (input.value.match(phoneRegex)) {
                input.closest('div').classList.remove('invalid');
              } else {
                input.closest('div').classList.add('invalid');
              }
            }
            if (input.dataset.type === "email") {
              if (input.value.match(emailRegex)) {
                input.closest('div').classList.remove('invalid');
              } else {
                input.closest('div').classList.add('invalid');
              }
            }
          });
        };
      });
      closeButtonNode.addEventListener('click', () => {
        form.classList.remove('success');
      });
    });
  }
}
