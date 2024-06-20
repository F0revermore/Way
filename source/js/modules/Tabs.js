export default class ToursTabs {
  constructor() {
    this.tabsParentNode = document.querySelectorAll(".js-tabs");

    this.tabsInit();
  }
  tabsInit() {
    this.tabsParentNode.forEach((element) => {
      const titleNodes = element.querySelectorAll("[data-tab-title]");
      const bodyNodes = element.querySelectorAll("[data-tab-body]");

      titleNodes.forEach((element) => {
        element.addEventListener("click", () => {
          for (let index = 0; index < titleNodes.length; index++) {
            titleNodes[index].classList.remove('active-tab');
            bodyNodes[index].classList.remove('active-tab');
          }

          element.classList.add('active-tab');
          document.querySelector(`[data-tab-body="${element.dataset.tabTitle}"]`).classList.add('active-tab');
          
        })
      });
    });
  };
};