export default class Map{

    constructor(scene, key, tileSetName, layers = [], allLayers){        
        // Current Scene
        this.scene = scene;             // CurrentScene
        this.key = key;                 // Tiled JSON Key
        this.tileSetName = tileSetName; // Tiled Tileset Image Name
        this.layers = layers;           // Array of All Layers in Tiled JSON
        this.allLayers = allLayers;     // Object storing the state of all of the Layers created
        this.createMap();               // Runs the Map Creation process
    }

    createMap(){
        // Create the tile map
        this.map = this.scene.make.tilemap( { key: this.key } );
        
        // Add the tileset Image to our map
        this.tiles = this.map.addTilesetImage( this.tileSetName, this.tileSetName, 8, 8, 0, 0);
        
        // Create our background
        for(const layer of this.layers){
            this.allLayers[layer] = this.map.createStaticLayer(layer, this.tiles)
            .setCollisionByExclusion([-1])
            .setDisplaySize( this.scene.game.config.width, this.scene.game.config.height )
            .setDepth(1);
        }
    }

}