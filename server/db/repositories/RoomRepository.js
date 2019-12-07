const Room = require('../models/Room');

class RoomRepository {
  rooms = {};
  id = 0;
  create(adminId) {
    const room = new Room(adminId);
    const id = this.id;
    this.rooms[id] = room;
    this.id++;
    return id;
  }
  getRoom(roomId) {
    return this.rooms[roomId];
  }
}

module.exports = RoomRepository;
