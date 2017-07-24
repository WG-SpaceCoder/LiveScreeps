import { Spawn } from 'screeps-globals';

export default class CustomSpawn extends Spawn {
  constructor(spawn){
    super(spawn);
    console.log(this.name);
    this.harvesterCountMax = 2;

    this.work();
  }

  work(){
    var harvesterCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    if(harvesterCount < this.harvesterCountMax){
      console.log('There are only ' + harvesterCount + '/' + harvesterCountMax + '. Spawning new Harvester.');
      spawnSimpleCreep('harvester');
    }
  }

  spawnSimpleCreep(role){
    var simpleCreep = this.createCreep([WORK,CARRY,MOVE], undefined, {role: role});
    if (simpleCreep){
      console.log(this.name + ' is spawning a new ' + role + ' named ' + simpleCreep);
    } else {
      console.log('Failed to spawn new ' + role + '. Error code: ' + simpleCreep);
    }
  }
}
