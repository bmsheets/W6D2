class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
  }

  bindEvents() {

  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      this.rootEl.append($('<ul class="tower"></ul>'));
    }
    for (let i = 0; i < 3; i++) {
      const $towers = $(".tower");
      const $disc = $("<li></li>");
      $disc.addClass("disc").addClass(`disc${i}`);
      $($towers[0]).append($disc);
    }
  }
}

module.exports = View;
