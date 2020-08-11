export function loadPlayer(scene){
    //// Load Default Player for now
    //// Later set it up so the spritesheet is dynamically loaded based on the player selection
    
    // Load player Walking
    loadPlayerWalking(scene);
    
    // Load Idle Anims
    loadIdleAnims(scene);
}

// Load Walking Spritesheets
function loadPlayerWalking(scene){
        //// Walking Anims
        // Walk Left 
        scene.load.spritesheet('playerWalkLeft', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Walk/Char_walk_left.png', {
            frameWidth: 16,
            frameHeight: 17
        });
    
        // Walk Right
        scene.load.spritesheet('playerWalkRight', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Walk/Char_walk_right.png', {
            frameWidth: 16,
            frameHeight: 17
        });
    
        // Walk Up
        scene.load.spritesheet('playerWalkUp', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Walk/Char_walk_up.png', {
            frameWidth: 16,
            frameHeight: 17
        });
    
        // Walk Down
        scene.load.spritesheet('playerWalkDown', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Walk/Char_walk_down.png', {
            frameWidth: 16,
            frameHeight: 17
        });
}

// Load Idle Spritesheets
function loadIdleAnims(scene){
    //// Idle Anims
    // Idle Left 
    scene.load.spritesheet('playerIdleLeft', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Idle/Char_idle_left.png', {
        frameWidth: 16,
        frameHeight: 16
    });

    // Idle Right
    scene.load.spritesheet('playerIdleRight', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Idle/Char_idle_right.png', {
        frameWidth: 16,
        frameHeight: 16
    });

    // Idle Up
    scene.load.spritesheet('playerIdleUp', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Idle/Char_idle_up.png', {
        frameWidth: 16,
        frameHeight: 16
    });

    // Idle Down
    scene.load.spritesheet('playerIdleDown', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Player/Idle/Char_idle_down.png', {
        frameWidth: 16,
        frameHeight: 16
    });
}