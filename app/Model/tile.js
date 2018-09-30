class Tile{
    constructor(type){
        this.Definition = type;
        this.x = 0;
        this.y = 0;
        this.Contents = [];
    }

    SetWorldPosition(x, y){
        this.x = x;
        this.y = y;
    }

    GetWorldPosition(){
        //Returns an array of the tile's world position in x and y
        return [this.x, this.y];
    }

}

module.exports = Tile;