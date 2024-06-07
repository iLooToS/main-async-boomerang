const fs = require('fs/promises');
const { User } = require('./db/models');

async function createUser(name) {
  try {
    const data = {};
    data.name = name.trim();
    data.score = 0;
    await User.create(data);
  } catch ({ message }) {
    console.log(`error: ${message}`);
  }
}

async function getName(name) {
  try {
    const users = await User.findAll({ attributes: ['name'], raw: true });
    users.filter(async (el) => {
      if (!(el.includes(name))) {
        await createUser(name);
      }
      return name;
    });
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
