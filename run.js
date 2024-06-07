// Основной файл.
// Запускает игру.
const fs = require('fs/promises');
const Game = require('./src/Game');
const { getName } = require('./rego');
const runInteractiveConsole = require('./src/keyboard');

getName(process.argv[2]);

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
// runInteractiveConsole(game);
