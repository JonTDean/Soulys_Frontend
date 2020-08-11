import Spawner from './Spawner';

class WorldManager{
    constructor(scene, mapData){
        // mapData 
        this.scene = scene;
        this.mapData = mapData;

        // Spawners
        this.spawners = {};
        this.lootables = {};

        // Spawner Locations
        this.playerLocations = [];
        this.lootableLocations = {};
        this.monsterLocations = {};
    }

    setup(){
        this.parseMapData();
        this.setupEventListener();
        this.setupSpawners();
        this.spawnPlayer();
    }

    parseMapData(){
        // console.log(this.mapData)

        this.mapData.forEach((layer) => {
            switch(layer.name){
                case 'player_spawner':
                    layer.objects.forEach((obj) => {
                        this.playerLocations.push([obj.x, obj.y]);
                        // console.log(this.playerLocations)
                    })
                    break;
                case 'lootable_locations':
                    layer.objects.forEach((obj) => {
                        switch(this.lootableLocations[obj.properties.spawner]){
                            case true:
                                this.lootableLocations[obj.properties.spawner].push([obj.x, obj.y]);
                                break;
                            case false:
                                this.lootableLocations[obj.properties.spawner] = [[obj.x, obj.y]];
                                break;
                            default:
                                break;
                        }
                    })
                    break;
                case 'monster_spawner':
                    layer.objects.forEach((obj) => {
                        switch(this.monsterLocations[obj.properties.spawner]){
                            case true:
                                this.monsterLocations[obj.properties.spawner].push([obj.x, obj.y]);
                                break;
                            case false:
                                this.monsterLocations[obj.properties.spawner] = [[obj.x, obj.y]];
                                break;
                            default:
                                break;
                        }
                    })
                    break;
                default:
                    console.log("Desolate Spawn")
                    break;
            }
        })
    }

    setupEventListener(){

    }

    setupSpawners(){
        Object.keys(this.lootableLocations).forEach((key) =>{
            const config = {
                spawnInterval: 3000,
                limit: 3,
                spawnerType: 'LOOTABLE',
                id: `lootable-${key}`, 
            };

            const spawner = new Spawner(
                config, 
                this.lootableLocations[key], 
                this.addLootable.bind(this), 
                this.deleteLootable.bind(this) 
            );

            this.spawners[spawner.id] = spawner;
        })
    }

    spawnPlayer(){
        const location = this.playerLocations[Math.floor(Math.random() * this.playerLocations.length)];
        // console.log(`Location: ${location}`)
        this.scene.events.emit('spawnPlayer', location);
    }

    addLootable(){

    }


}

export default WorldManager;