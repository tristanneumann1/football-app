const { Router } = require('express');
const roomController = require('../controllers/roomController.js');

const apiRouter = Router();

apiRouter.route('/createRoom')
  .post(roomController.createRoom);

apiRouter.route('/joinRoom')
  .post(roomController.joinRoom);

module.exports = apiRouter;
