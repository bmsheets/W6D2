class View {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.secondClick = false;
    this.source = -1;
    this.setupTowers();
    this.bindEvents();
  }

  bindEvents() {
    const $towers = $(".tower");
    $towers.on("click", (event) => {
      // console.log("click detected");
      const $tower = $(event.currentTarget);
      if (this.secondClick) {
        $(".tower").removeClass("selected");
        if (this.game.move(this.source, parseInt($tower.data("pos")))) {
          //move successful
          this.render();
        }
      } else {
        this.source = parseInt($tower.data("pos"));
        $tower.addClass("selected");
      }
      this.secondClick = !this.secondClick;
    });
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      const $tower = $('<ul></ul>');
      $tower.addClass("tower");
      $tower.data("pos", i);
      this.rootEl.append($tower);
    }
    for (let i = 0; i < 3; i++) {
      const $towers = $(".tower");
      const $disc = $("<li></li>");
      $disc.addClass("disc").addClass(`disc${i}`);
      $disc.data("size", i);
      $($towers[0]).append($disc);
    }
  }

  render() {
    $(".disc").remove();
    const $towers = $(".tower");
    for (let i = 0; i < 3; i++) {
      const tower = this.game.towers[i];
      for (let j = 0; j < tower.length; j++) {
        const $disc = $("<li></li>");
        const discSize = tower[j];
        $disc.addClass("disc").addClass(`disc${j}`);
        $($towers[j]).append($disc);
      }
    }
  }

  clickTower(event) {
    console.log("click detected");
    const $tower = $(event.currentTarget);
    if (this.secondClick) {
      this.game.move(this.source, parseInt($tower.data("pos")));
      $(".tower").removeClass("selected");
      this.render();
    } else {
      this.source = parseInt($tower.data("pos"));
      $tower.addClass("selected");
    }
    this.secondClick = !this.secondClick;
  }
}

module.exports = View;
