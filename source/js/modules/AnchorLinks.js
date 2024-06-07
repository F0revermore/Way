// Пролистывание к якорным ссылкам
export default class AnchorLinks {
  constructor() {
    this.init();
  }
  init() {
    document.querySelector('body').addEventListener('click', (event) => {
      const linkNode = event.target.closest('a');
      if ((linkNode.hash)?.match(/^#/)) {
        event.preventDefault();
        const anchorOffset = document.querySelector(linkNode.hash).getBoundingClientRect().top;
        
        window.scroll({
          top: anchorOffset + window.scrollY  - 20,
          left: 0,
          behavior: "smooth",
        });
      }
    })
  }
};
