export function loadStartingMap(scene){
    // console.log("Loaded Into BootScene")
    // console.log("This.game.scene -> :", this.game);

    //// Load Starting Map
    // TileMap.png
    scene.load.image('tileset_master', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Map/tileset_master.png');
    // console.log("Loaded SpriteSheet");
    
    // TileMap JSON
    scene.load.tilemapTiledJSON('map', 'https://project-pure-beyond.s3.amazonaws.com/Soulys/Map/character_starting_map.json');
    // console.log("Loaded TileMap TiledJSON");
}