class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }



    createSpaces() {
        const spaces = [];
        
		for (let x = 0; x < this.columns; x++) {
			const col = [];
			
			for (let y = 0; y < this.rows; y++) {
				const space = new Space(x, y);
				col.push(space);
			}
			
			spaces.push(col);
		}
        
        return spaces;
    }

    drawHTMLBoard () {
        for (let i = 0; i <this.createSpaces.length; i++) {
            var render = new Space();
            render.drawSVGSpace();
        }
    }
}



class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    drawHTMLToken() {

    }

    get htmlToken() {

    }
}



class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter / 2;
    }

    drawSVGSpace () {
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");
        document.getElementById("mask").appendChild(svgSpace);
    }
}


class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

 //    * Creates token objects for player

    createTokens(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }
}



class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

// Creates two player objects

    createPlayers() {
        const players = [
            new Player('Player 1', 1, '#e15258', true),
            new Player('Player 2', 2, '#e59a13')
        ];
        return players;
    }

    startGame() {

    }
}

var game = new Game();

document.getElementById('begin-game').addEventListener('click', () => {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

(function () {
  var x = new Game();
  console.log(x);
  return x;
}());