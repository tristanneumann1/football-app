const RoomRepository = require('./RoomRepository');

describe('Room Reopository', () => {
  let roomRepository;
  let adminId = 123;
  beforeEach(() => {
    // GIVEN
    roomRepository = new RoomRepository();
    adminId = 123;
  });
  it('creates a room and returns it\'s id', () => {
    // WHEN
    const roomId = roomRepository.create(adminId);

    // THEN
    expect(roomRepository.rooms[roomId]).toBeDefined();
  });
  it('can get a room by id', () => {
    // WHEN
    const roomId = roomRepository.create(adminId);

    // THEN
    expect(roomRepository.getRoom(roomId)).toBeDefined();
  });
});
