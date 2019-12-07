// const Room = require('../db/models/Room');
const RoomRepository = require('../db/repositories/RoomRepository');

const repo = new RoomRepository();

const roomController = {
  createRoom(req, res) {
    try {
      const userId = req.body.userId;
      const roomId = repo.create(userId);
      res.status(201).send({ roomId });
    } catch (e) {
      res.status(500).send(e.message);
    }
  },
  joinRoom(req, res) {
    try {
      const userId = req.body.userId;
      const roomId = req.body.roomId;
      const room = repo.getRoom(roomId);

      room.join(userId);
      res.sendStatus(201);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
};

module.exports = roomController;
