const PIXI = require('pixi.js');
const Sprite = PIXI.Sprite;

class BoardPiece{
    constructor(sprite, name, type)
    {
        this.sprite = sprite;
        this.name = name;
        this.type = type;
    }
}
module.exports = BoardPiece;