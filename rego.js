const fs = require('fs/promises');
const { User, Game, Rating } = require('./db/models');

async function createGame(userId, gameScore, gameId = 0) {
  try {
    const data = {};
    data.user_id = userId;
    data.score = gameScore;

    if (gameId === 0) {
      await Game.create(data);
    } else {
      await Game.update(data, { where: { id: gameId } });
    }
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}
async function createUser(name) {
  try {
    const data = {};
    data.name = name.trim();
    await User.create(data);
    const users = await User.findOne({ where: { name }, attributes: ['id', 'name'], raw: true });
    await createGame(users.id, 1);
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}

async function getName(name) {
  try {
    const users = await User.findOne({ where: { name }, attributes: ['id', 'name'], raw: true });
    if (users === null) {
      await createUser(name);
    } else {
      const games = await Game.findOne({ where: { user_id: users.id }, attributes: ['id', 'score'], raw: true });

      games.score += 1;
      await createGame(users.id, games.score, games.id);
    }
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}

async function deleteUser(name) { // можно удалить пользователя
  try {
    const nsmeTrim = name.trim();
    const result = await User.destroy({ where: { id: nsmeTrim } });
    console.log(result);
  } catch ({ message }) {
    console.log(message);
  }
}
module.exports = {
  createUser, getName, deleteUser,
};
