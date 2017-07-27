import { Creep } from 'screeps-globals';
import CustomCreep from 'CustomCreep';

export default class HarvesterCreep extends CustomCreep {
  constructor(creep) {
    super(creep);
    this.work();
  }

  work() {
    if (this.carry.energy < this.carryCapacity) {
      var sources = this.room.find(FIND_SOURCES);
      if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        this.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    } else {
      var targets = this.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION ||
            structure.structureType == STRUCTURE_SPAWN ||
            structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
        }
      });
      if (targets.length > 0) {
        if (this.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          this.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
        }
      }
    }
  }
}
