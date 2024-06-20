import {initPhoneInput} from './form-validate/init-phone-input';
export default class PhoneMask {
  constructor() {
    const inputsParents = document.querySelectorAll('[data-mask-parent]');

    inputsParents.forEach(element => {
      initPhoneInput(element);
    });
  }; 

};  
