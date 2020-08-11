export function playerMovement(cursors, player, velocity){
    player.body.setVelocity(0); // Default Player Velocity

    //// 4-Way Movement [Arrow Keys]
    // Left and Right Movement
    if(cursors.left.isDown){
        player.body.setVelocityX(-velocity);
        // console.log(`left: ${player.x}`);
    }else if(cursors.right.isDown){
        player.body.setVelocityX(velocity);
        // console.log(`right: ${player.x}`);
    }

    // Up and Down Movement
    if(cursors.up.isDown){
        player.body.setVelocityY(-velocity);
        // console.log(`up: ${player.y}`);
    }else if(cursors.down.isDown){
        player.body.setVelocityY(velocity);
        // console.log(`down ${player.y}`);
    }

    player.body.velocity.normalize().scale(velocity);
}


