import { Creep } from 'screeps-globals';
import CustomCreep from 'CustomCreep';

export default class UpgraderCreep extends CustomCreep {
  constructor(creep) {
    super(creep);
    this.setWork();
    this.doWork();
  }

  setWork() {
    if (this.carry.energy == 0) {
      this.memory.work = 'gather';
    } else {
      this.memory.work = 'upgrade';
    }
  }

  doWork() {
    if (this.memory.work == 'gather') {
      var sources = this.room.find(FIND_SOURCES);
      if (this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        this.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    } else {
      if (this.transfer(this.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        this.moveTo(this.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
      }
    }
  }
}
