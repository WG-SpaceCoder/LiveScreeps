import Util from 'Util';
import Spawn from 'Spawn';
import DynamicCreep from 'DynamicCreep';

//Main Game Loop
export function loop() {
  Util.garbageCollection(); //ALWAYS PERFORM THIS TASK TO PREVENT MEMORY LEAKS

  if (Game.cpu.bucket == undefined || Game.cpu.bucket > 1000) {
    // ***Game logic goes here***

    // Creep Logic
    for (var creepName in Game.creeps) {
      var creep = new DynamicCreep(creepName);
    }

    // Room Logic
    for (var roomName in Game.rooms) {
      // console.log('Executing in room ' + roomName);
      // Spawn Logic
      var spawns = Game.rooms[roomName].find(FIND_MY_SPAWNS);
      for (var spawnIndex in spawns) {
        // console.log('in main: ' + spawns[spawnIndex].id);
        new Spawn(spawns[spawnIndex].id);
      }
    }
  } else {
    console.log('Game.cpu.bucket:', Game.cpu.bucket);
  }
}





//Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );
