const ViewTile = require('./viewtile');

class Camera{
    constructor(pixiApp)
    {
        this.pixiApp = pixiApp;
        this.CameraTiles = [];
        for(let i = 0; i < 10; i++){
            let temp = [];
            for(let j = 0; j < 10; j++)
            {
                temp[j] = new ViewTile(undefined, j * 64, i * 64);
            }
            CameraTiles[i] = temp;
        }
    }

    

}

