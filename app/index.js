const PIXI = require('pixi.js');

let app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);

function setup()
{
    //Generate level model
    //Create the floor and wall sprites
    //Create the hero sprites 
    //Create the monsters sprites
    //Assign the Keyboard inputs

    //Set the game state to play

    

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