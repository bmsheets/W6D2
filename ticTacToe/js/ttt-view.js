class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.xturn = true;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $cells = $('.cell');
    const that = this;
    $cells.on("click", function(event) {
      const $cell = $(event.currentTarget);
      const row = $cell.data("row");
      const col = $cell.data("col");
      that.game.playMove([parseInt(row), parseInt(col)]);
      $cell.css("background-color", "white");
      if (that.xturn) {
        $cell.text("X");
      } else {
        $cell.text("O");
      }
      that.xturn = !that.xturn;
    });
  }

  makeMove($square) {}

  setupBoard() {
    const $grid = $("<ul class='grid'></ul>");
    this.$el.append($grid);
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        const $cell = $("<li class='cell'></li>");
        $cell.data("row", i);
        $cell.data("col", j);
        $grid.append($cell);
      }
    }
    const $cells = $('.cell');
    $cells.on("mouseover", function(event) {
      const $cell = $(event.currentTarget);
      console.log($cell);
      // event.currentTarget.css("background-color", "yellow");
    });
  }
}

module.exports = View;
