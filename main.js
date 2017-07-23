//Main Game Loop
export function loop() {
    garbageCollection(); //ALWAYS PERFORM THIS TASK TO PREVENT MEMORY LEAKS

    if (!('bucket' in Game.cpu) || Game.cpu.bucket > 1000) {
        //Game logic goes here
    } else {
        console.log('Game.spu.bucket:', Game.cpu.bucket);
    }
}

//Simply removes dead creeps from memory
function garbageCollection() {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            console.log('Clearing non-existing creep memory:', name, Memory.creeps[name].role);
            delete Memory.creeps[name];
        }
    }
}
