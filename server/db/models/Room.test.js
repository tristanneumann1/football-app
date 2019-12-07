const Room = require('./Room');

describe('Room', () => {
  it('get\'s created with an admin userId', () => {
    // GIVEN
    const adminId = 123;
    // WHEN
    const room = new Room(adminId);
    // THEN
    expect(room.adminId).toBe(adminId);
  });

  it('adds the admin to the players list', () => {
    // GIVEN
    const adminId = 123;
    // WHEN
    const room = new Room(adminId);
    // THEN
    expect(room.players.includes(adminId)).toBe(true);
  });

  it('can allow players to join the room', () => {
    // GIVEN
    const adminId = 123;
    const playerId = 456;
    const room = new Room(adminId);
    // WHEN
    room.join(playerId);
    // THEN
    expect(room.players.includes(playerId)).toBe(true);
  });

  it('doesn\'t allow an existing player to join again', () => {
    // GIVEN
    const adminId = 123;
    const playerId = 456;
    const room = (new Room(adminId)).join(playerId);
    // WHEN
    const playerJoins = () => { room.join(playerId); };
    // THEN
    expect(playerJoins).toThrow('[UserCannotJoinRoom] Player is already on team');
  });
});
