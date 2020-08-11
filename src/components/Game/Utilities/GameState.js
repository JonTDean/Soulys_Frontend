export function GameState(phaser, boot, plugin){
    return({
        width: 1200,
        height: 720,
        type: phaser.AUTO, 
        parent: 'gameContainer',
        dom: {
            createContainer: true
        },
        scale: {
            autoCenter: phaser.Scale.CENTER_BOTH,
            width: 1200,
            height: 720,
        },
        render: {
            antialias: true,
            pixelArt: true,
            roundPixels: true
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: true
            }
        },
        scene: boot,
    })

}