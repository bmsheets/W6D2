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
      if (that.game.isOver()) {
        if (that.game.winner() === null) {
          that.$el.append($(`<h2>this is why tic tac toe is a silly game...</h2>`));
        } else {
          that.$el.append($(`<h2>${that.game.winner()} has won!</h2>`));
        }
        $cells.off("click");
      }
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
  }
}

module.exports = View;
