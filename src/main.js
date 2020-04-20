/*
Binaisha Dastoor 
CMPM120

Rocket Patrol Modification
 S-Rank Tier
 -Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (50 POINTS)

 I changed the game into a lighter version. In the new game, there is a bee that when "fired" goes towards the flowers. When 
 it lands on the flower, the flower dissapears as the bee takes takes pollen. There is also a new background of a sky and grass.
 The sounds effects are also changed to better fit the theme. 

 Starting Tier
 -Track a high score that persists across scenes and display it in the UI (10 POINTS)
 The game saves your high score between plays and displays it on the game over page. 
 - Add your own (copyright-free) background music to the Play scene (10 POINTS)
 The play scene has music added. The music also fits into the new UI theme. 
 -Allow the player to control the Rocket after it's fired (10 POINTS)
 The player can use the left and right arrows to control the rocket after it is fired. 

 Novice Tier
 -Create a new title screen (15 POINTS)
 I created a new title screen to fit in the new aesthetics of the game. I redesigned it using aseprite to fit the theme and UI change. 

 #FACADE Tier
 -Move "rocket"(or bee in this case) to the top of the screen and have it move down instead of up. (10 POINTS)
 In order for my game to make sense, I shifted the bee to the top of the screen and when fire is pressed, the bee moves down towards the bottom
 of the screen. 
 I think this is worth 10 points because it should belong in the starting tier. It is a simple task that does require modification and 
 understanding of the code. It also involves editing the conditions which the "rocket" is reset. 
-Obstacle to avoid (15 POINTS)
 In this game, I added an obstacle in the type of a bird. When the bee comes in contact with the bird, the player loses 20 point. The
 bird moves in the opposite direction of the flowers and the Y coordinate is randomized at each reset. 
 I think this is worth 15 points because it belongs in the novice tier. It required me to create new artwork and do outside research
 on how to use the random feature for the Y-coordinate. 

 Total: 10+ 10 + 10 + 50 + 15 + 10 + 15 = 120

 All artwork is done by me on aseprite. All sound effects and music is from sound bible (copyright free).  
 * 
 */

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}
// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;