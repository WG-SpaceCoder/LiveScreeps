import { Creep } from 'screeps-globals';

export default class CustomCreep extends Creep {
  constructor(creep) {
    super(creep);
  }

  moveTo(destination, opts) {
    if (opts == undefined) {
      opts = { visualizePathStyle: { stroke: '#ffffff' } };
    }
    opts.noPathFinding = true;
    let err = super.moveTo(destination, opts);
    if (err = ERR_NO_PATH) {
      opts.noPathFinding = false;
      err = super.moveTo(destination, opts);
    }
  }
}
