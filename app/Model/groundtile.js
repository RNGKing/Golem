const pixi = require('pixi.js');

class GroundTile{
    constructor(filePath){
        this.sprite = new pixi.Sprite(resources[filePath].texture);
    }
}