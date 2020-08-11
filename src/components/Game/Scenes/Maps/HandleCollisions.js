// Collision Colliders
export function handleCollisionColliders(scene, allLayers){
    // // console.log(allLayers)
    for(const layer of Object.keys(allLayers)){
            scene.physics.add.collider(scene.player, allLayers[layer]);
    }
}