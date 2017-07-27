//Useful things exist here...

class Util {
  constructor() {
    //Global Variables
    this.creepRoles = ['harvester', 'upgrader'];
  }

  //Simply removes dead creeps from memory
  garbageCollection() {
    for (var name in Memory.creeps) {
      if (!Game.creeps[name]) {
        console.log('Clearing non-existing creep memory:', name, Memory.creeps[name].role);
        delete Memory.creeps[name];
      }
    }
  }
}

export default (new Util);
