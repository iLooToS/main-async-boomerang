// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

// Какая-то функция.

function runInteractiveConsole(game, boomerang) {
  const keyboard = {
    a: () => {
      game.hero.moveLeft();
      game.boomerang.moveLeft();
    },
    d: () => {
      game.hero.moveRight();
      game.boomerang.moveRight();
    },
    w: () => {
      game.hero.moveUp();
      game.boomerang.moveUp();
    },
    s: () => {
      game.hero.moveDown();
      game.boomerang.moveDown();
    },
    e: () => game.boomerang.fly(),
    y: () => console.log('y'),
  };
  game.play();
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

module.exports = runInteractiveConsole;
