// Activate Player Walking Animations Based on Last Direction Player Faced
export function handleWalkingAnims(player, direction){
    switch(direction){
        case "left":
            player.anims.play("playerWalkLeft", true);
            break;

        case "right":
            player.anims.play("playerWalkRight", true);
            break;

        case "up":
            player.anims.play("playerWalkUp", true);
            break;
            
        case "down":
            player.anims.play("playerWalkDown", true);
            break;

        default:
            handleIdleAnims(player, direction)
            break;
    }
}

// Active Player Idle Animations Based on Last Direction Player Faced
export function handleIdleAnims(player, direction){
    switch(direction){
        case "left":
            player.anims.play(`playerIdleLeft`, true);
            break;

        case "right":
            player.anims.play(`playerIdleRight`, true);
            break;

        case "up":
            player.anims.play(`playerIdleUp`, true);
            break;

        case "down":
            player.anims.play(`playerIdleDown`, true);
            break;
   
        default:
            player.anims.stop()
            break;
    }
}
