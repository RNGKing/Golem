const Tile = require('./tile');

class GameBoard{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.Board = [];
        for(let i = 0; i < height; i++){
            let temp = [];
            for(let j = 0; j < width; j++){
                temp[j] = new Tile(0);
                temp[j].x = j * 64;
                temp[j].y = i * 64;
            }
            this.Board[i] = temp;
        }
    }

    get board(){
        return this.Board;
    }

    GenerateBasicBox()
    {
        let posX = 1;
        let posY = 1;
        for(let i = posY; i < this.width - 1; i++){
            for(let j = posX; j < this.width - 1; j++){
                this.Board[i][j].Definition = 1;
            }
        }      
    }
}

module.exports = GameBoard;