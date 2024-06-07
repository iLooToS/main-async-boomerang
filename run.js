// Основной файл.
// Запускает игру.
const fs = require('fs/promises');
const Game = require('./src/Game');
const { getName } = require('./rego');

getName(process.argv[2]);
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры.
game.play();
