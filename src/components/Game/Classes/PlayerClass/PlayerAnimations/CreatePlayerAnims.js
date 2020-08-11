// Create Player Walking Animation
export function createWalkingAnims(anims){
    //// Walking
    // Player Walk Left
    anims.create({
        key: 'playerWalkLeft',
        frames: anims.generateFrameNumbers("playerWalkLeft"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Walk Right
    anims.create({
        key: 'playerWalkRight',
        frames: anims.generateFrameNumbers("playerWalkRight"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Walk Up
    anims.create({
        key: 'playerWalkUp',
        frames: anims.generateFrameNumbers("playerWalkUp"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Walk Down
    anims.create({
        key: 'playerWalkDown',
        frames: anims.generateFrameNumbers("playerWalkDown"),
        frameRate: 10,
        repeat: -1,
    });
}

// Create Player Idle Animation
export function createIdleAnims(anims){
    //// Idle
    // Player Idle Left
    anims.create({
        key: 'playerIdleLeft',
        frames: anims.generateFrameNumbers("playerIdleLeft"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Idle Right
    anims.create({
        key: 'playerIdleRight',
        frames: anims.generateFrameNumbers("playerIdleRight"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Idle Up
    anims.create({
        key: 'playerIdleUp',
        frames: anims.generateFrameNumbers("playerIdleUp"),
        frameRate: 10,
        repeat: -1,
    });

    // Player Idle Down
    anims.create({
        key: 'playerIdleDown',
        frames: anims.generateFrameNumbers("playerIdleDown"),
        frameRate: 10,
        repeat: -1,
    });
}