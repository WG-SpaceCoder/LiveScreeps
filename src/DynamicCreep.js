import Util from 'Util';
import CustomCreep from 'CustomCreep';
import HarvesterCreep from 'Harvester';
import UpgraderCreep from 'Upgrader';

export default class DynamicCreep {
  constructor(creepName) {
    var creep = Game.creeps[creepName];
    if (Util.creepRoles.indexOf(creep.memory.role) == -1) {
      console.log('Hey theres a creep without a role... You should fix that right away')
    }
    const classes = {
      harvester: HarvesterCreep,
      upgrader: UpgraderCreep
    };
    return new classes[creep.memory.role](creep.id);
  }
}
