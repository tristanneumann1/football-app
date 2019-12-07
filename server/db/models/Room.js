class Room {
  adminId;
  players = [];
  constructor(adminId) {
    this.adminId = adminId;
    this.players.push(adminId);
  }
  join(playerId) {
    if (!this.players.includes(playerId)) {
      this.players.push(playerId);
      return this;
    }
    throw new Error('[UserCannotJoinRoom] Player is already on team');
  }
}

module.exports = Room;
