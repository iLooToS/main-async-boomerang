// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.track1 = [];
    this.track2 = [];
    this.track3 = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track1 = (new Array(this.trackLength)).fill(' ');
    this.track2 = (new Array(this.trackLength)).fill(' ');
    this.track3 = (new Array(this.trackLength)).fill(' ');

    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track1[this.enemy.position] = this.enemy.skin;
    this.track2[this.enemy.position] = this.enemy.skin;
    this.track3[this.enemy.position] = this.enemy.skin;

    if (this.hero.up === 0) {
      this.track[this.hero.position] = this.hero.skin;
    }
    if (this.hero.down === 1) {
      this.track1[this.hero.position] = this.hero.skin;
    }
    if (this.hero.down === 2) {
      this.track2[this.hero.position] = this.hero.skin;
    }
    if (this.hero.down === 3) {
      this.track3[this.hero.position] = this.hero.skin;
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      return true;
    }
    if (this.enemy.position === this.boomerang.position) {
      this.enemy.die();
      return true;
    }
    if (!(this.hero.position === this.boomerang.position)) {
      this.launchBoomerang();
      return true;
    } this.boomerang.position = null;
    return false;
  }

  launchBoomerang() {
    if (!this.boomerang.ifFlying) {
      this.boomerang.ifFlying = true;
      this.boomerang.position = this.hero.position + 1;
      this.boomerang.fly(this.enemy);
    }
  }

  play() {
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.track1, this.track2, this.track3);
    }, 60);
  }
}

module.exports = Game;
