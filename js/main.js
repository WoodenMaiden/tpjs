(function () {
    "use strict"

    const CSS_BOARD = {
      "margin": "20px",
      "padding": "10px",
    };
    const CSS_LINE = {
      "display": "inline-block",
      "float": "left",
      "width": "100%",
      "height": "20px"
    };
    const CSS_CELL = {
      "display": "block",
      "width": "20px",
      "height": "20px",
      "float": "left",
      "outline": "solid 1px rgb(90, 90, 90)",
      "text-align": "center",
    };

    const CSS_NO_SELECT = {
      "-webkit-touch-callout": "none", /* iOS Safari */
      "-webkit-user-select": "none", /* Safari */
      "-khtml-user-select": "none", /* Konqueror HTML */
      "-moz-user-select": "none", /* Old versions of Firefox */
      "-ms-user-select": "none", /* Internet Explorer/Edge */
      "user-select": "none" /* Non-prefixed version, supported by Chrome, Edge, Opera and Firefox */
    }

    class Cell {
      constructor() {
        this.$display = $("<div />").css(CSS_CELL).css(CSS_NO_SELECT);
        this.empty = true;
      }
      setContent(isPlayer1) {
        this.empty = false;
        this.$display.html(isPlayer1 ? "O" : "X");
      }
      isEmpty() {
        return this.empty;
      }
      display(){
        return this.$display;
      }
  }

  class Board {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = [];
        this.isPlayer1 = true;
        let self = this;
        for (let y=0; y < this.height; y++){
          let $line = []
          for (let x=0; x < this.width; x++){
              let cell = new Cell();
              cell.display().click(() => {
                // sur un callback on peut faire référence à l'élément déclencheur avec this
                // quand ecrit avec => this fait référence au moment ou js a analysé le code
                if (cell.isEmpty())
                {
                  cell.setContent(self.isPlayer1);

                  // il y a 8 directions sur deux axes, on regarde si le total est = 3
                  // axe vertical
                  while (true) {
                    this.cells[y][x]
                    break;
                  }

                  self.isPlayer1 = !self.isPlayer1;
                }
              });
              $line.push(cell);
          }
          this.cells.push($line);
        }
      }
      display(){
        let $result = $("<div />").css(CSS_BOARD).css(CSS_NO_SELECT);
        for (let y=0; y < this.height; y++){
          let $line = $("<div />").css(CSS_LINE).css(CSS_NO_SELECT);
          for (let x=0; x < this.width; x++){
              $line.append(this.cells[y][x].display());
          }
          $result.append($line);
        }
        return $result
      }
  }


  $(() => {
    let witdh = 20;
    let height = 3;
    $("body").append(
      new Board(20,3).display()
    );
  });
}) ();
