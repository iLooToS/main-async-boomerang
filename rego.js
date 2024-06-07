const fs = require('fs/promises');
const { User, Rating } = require('./db/models');

async function createUser(name) {
  try {
    const data = {};
    data.name = name.trim();
    await User.create(data);
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}

async function getName(name) {
  try {
    const users = await User.findOne({ where: { name }, attributes: ['id', 'name'], raw: true });
    console.log(users);
    if (users === null) {
      await createUser(name);
    }
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}

async function updateRating(name) { // после смерти обновляет рейтинг
  try {
    const users = await User.findOne({ where: { name }, attributes: ['rating_id', 'name'], raw: true });
    const ratu = await Rating.findAll({ where: { score }, attributes: ['id', 'score'], raw: true });
    const result = ratu.find(el => el.id === users.rating_id)
    const ratu = result.score; 
    const result = await Rating.update(
      { score: ratu + 1 },
      { where: { id: users.id } },
    );
    console.log(result);
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
  createUser, getName, updateRating, deleteUser,
};
