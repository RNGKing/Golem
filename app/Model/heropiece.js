const BoardPiece = require('./boardpiece.js');
const Attribute = require('./attributes.js');
const url = require('url');
const path = require('path');

class HeroPiece extends BoardPiece{
    constructor(sprite){
        super(sprite, 'Hero', 'hero');
        this.attribute = new Attribute(path.join(__dirname, 'Data/HeroInitialState.json'));
    }

    
}
module.exports = HeroPiece;