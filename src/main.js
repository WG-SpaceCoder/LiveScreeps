import Util from 'Util';
import Spawn from 'Spawn';


//Main Game Loop
export function loop() {
    Util.garbageCollection(); //ALWAYS PERFORM THIS TASK TO PREVENT MEMORY LEAKS

    if (Game.cpu.bucket == undefined || Game.cpu.bucket > 1000) {
        //Game logic goes here
        for (var roomName in Game.rooms){
          var spawns = Game.rooms[roomName].find(FIND_MY_SPAWNS);
          for (var spawnIndex in spawns){
            console.log('in main: ' + spawns[spawnIndex].id);
            new Spawn (spawns[spawnIndex].id);
          }
        }
    } else {
        console.log('Game.cpu.bucket:', Game.cpu.bucket);
    }
}





//Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Harvester1' );
