//Useful things exist here...

//Simply removes dead creeps from memory
function garbageCollection() {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            console.log('Clearing non-existing creep memory:', name, Memory.creeps[name].role);
            delete Memory.creeps[name];
        }
    }
}




module.exports = {
  garbageCollection: garbageCollection
};
