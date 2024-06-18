export default class BurgerMenu {
  constructor() {
    this.initBurgerMenu();
  };
  initBurgerMenu() {
    document.querySelector('.header__burger-menu').addEventListener("click", () =>{
      document.querySelector('.header__wrapper').classList.add('is-active');
    });
    document.querySelector('.header__wrapper-btn-close').addEventListener("click", () =>{
      document.querySelector('.header__wrapper').classList.remove('is-active');
    });
  };
};
