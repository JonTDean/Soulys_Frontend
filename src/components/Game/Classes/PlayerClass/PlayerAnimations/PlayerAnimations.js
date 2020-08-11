import { handleWalkingAnims, handleIdleAnims } from './StartPlayerAnims';

const direction = {
    left: "left",
    right: "right",
    up: "up",
    down: "down",
}

// Set State for Current Direction in order to handle Animations on Keypresses
let currentDirection = direction.down;

// Activate Player Walking Animation Based on Keypress
export function playAnims(cursors, player){

    // console.log( cursors );
    if(cursors.left.isDown){
        console.log("Pressing Left")
        currentDirection = direction.left;
        handleWalkingAnims(player, currentDirection);

    }else if(cursors.right.isDown){
        console.log("Pressing Right")
        currentDirection = direction.right;
        handleWalkingAnims(player, currentDirection);

    }else if(cursors.up.isDown){
        console.log("Pressing Up")
        currentDirection = direction.up;
        handleWalkingAnims(player, currentDirection);

    }else if(cursors.down.isDown){
        console.log("Pressing Down")
        currentDirection = direction.down;
        handleWalkingAnims(player, currentDirection);

    }else{
        handleIdleAnims(player, currentDirection)
    }
}


//// Handles all of the Player Animations
// - Idle [u,d,l,r]
// - Walking [u,d,l,r]
// - Attack [u,d,l,r]
// - Dashing [u,d,l,r]

//// Plans for the Future:
// I need to incorporate 8-Way travel
//      [ul, su, ur]
//      [sl, idle, sr]
//      [dl, sd, dr]
// "ul: Up Left"        || "su: Straight Up"    || "up: Up Right"
// "sl: Straight Left"  || "idle: no movement"  || "sr: Straight Right"
//  "dl: Down Left"     || "sd: Straight Down"  || "dr: Down Right"
// By utilizing 8-Way Travel I'll be able to make smoother and more interactive controls