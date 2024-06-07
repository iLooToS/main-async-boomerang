const fs = require('fs/promises');
const { User } = require('./db/models');

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

async function updateRating() { // после смерти обновляет рейтинг
  try {
    // возвращает массив с кол-вом изменненых данных
    const result = await User.update(
      { name: 'Alexandr' },
      { where: { id: '123' } },
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
