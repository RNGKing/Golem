const PIXI = require('pixi.js');
const Sprite = PIXI.Sprite;

class ViewTile{
    constructor(spriteTile, x, y)
    {
        this.spriteTexture = spriteTile;
        this.x = x;
        this.y = y;
    }
}

module.exports = ViewTile;