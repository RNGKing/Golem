const PIXI = require('pixi.js');

const GameBoard = require('./Model/gameboard.js');
const HeroPiece = require('./Model/heropiece.js');

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Container = PIXI.Container;

let app = new PIXI.Application({
    width: 1200,
    height: 1000,
    antialias: true,
    transparent: false,
    resolution: 1
});



loader.add(
    ['Images/groundvar1.png',
    'Images/rockyv2.png',
    'Knight_Of_The_Forest.png'])
    .on('progress', loadProgressHandler)
    .load(setup);

let world = undefined;
let heroSprite = undefined;


document.body.appendChild(app.view);

function loadProgressHandler(loader, resource){
    console.log("loading : " + resource.url);
    console.log("progress : " + loader.progress + "%");
}

function setup()
{
    //Generate level model
    let board = new GameBoard(10,10);
    board.GenerateBasicBox();
    world = RenderBoard(board);
    //Create the floor and wall sprites
    //Create the hero sprites
    
    heroSprite = new Sprite(resources['Knight_Of_The_Forest.png'].texture);

    let hero = new HeroPiece(heroSprite);

    //Create the monsters sprites
    //Assign the Keyboard inputs

    //Set the game state to play
    
    
    
}

function RenderBoard(gameboard){
    console.log("Updating the gameboard");
    let x = 64;
    let y = 64; 
    let world = new Container();
    for(let i = 0; i < gameboard.height; i++){
        for(let j = 0; j < gameboard.width; j++){
            let sprite = gameboard.board[i][j].Definition == 1 ? new Sprite(resources['Images/groundvar1.png'].texture) : new Sprite(resources['Images/rockyv2.png'].texture);
            sprite.x = gameboard.board[i][j].x;
            sprite.y = gameboard.board[i][j].y;
            
            sprite.zOrder = -1;
            
            world.addChild(sprite);
            
        }
    }
    
    app.stage.addChild(world);
    return world;
}


function gameLoop(delta)
{
    
}

function play(delta)
{
    //This is the main game loop that will process player inputs and handle entity turns
}

function end()
{

}

function mainMenu()
{

}