import { Spawn } from 'screeps-globals';

export default class CustomSpawn extends Spawn {
  constructor(spawn) {
    super(spawn);
    // console.log(this.name);
    this.harvesterCountMax = 2;
    this.upgraderCreepMax = 1

    this.work();
  }

  work() {
    var harvesterCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length;
    if (harvesterCount < this.harvesterCountMax) {
      console.log('There are only ' + harvesterCount + '/' + this.harvesterCountMax + '. Spawning new Harvester.');
      this.spawnSimpleCreep('harvester');
      return;
    }
    var upgraderCount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader').length;
    if (upgraderCount < this.upgraderCreepMax) {
      console.log('There are only ' + upgraderCount + '/' + this.upgraderCreepMax + '. Spawning new Upgrader.');
      this.spawnSimpleCreep('upgrader');
      return;
    }
  }

  spawnSimpleCreep(role) {
    var simpleCreep = this.createCreep([WORK, CARRY, MOVE], undefined, { role: role });
    if (simpleCreep) {
      console.log(this.name + ' is spawning a new ' + role + ' named ' + simpleCreep);
    } else {
      console.log('Failed to spawn new ' + role + '. Error code: ' + simpleCreep);
    }
  }
}
