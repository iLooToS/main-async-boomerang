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
    this.boomerang = new Boomerang({ up: 0 });
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ up: 0 });
    this.enemy1 = new Enemy({ up: 1 });
    this.enemy2 = new Enemy({ up: 2 });
    this.enemy3 = new Enemy({ up: 3 });
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
    this.track = (new Array(this.trackLength)).fill('[ ]');
    this.track1 = (new Array(this.trackLength)).fill('[ ]');
    this.track2 = (new Array(this.trackLength)).fill('[ ]');
    this.track3 = (new Array(this.trackLength)).fill('[ ]');

    this.track[this.enemy.position] = this.enemy.skin;
    this.track1[this.enemy.position] = this.enemy1.skin;
    this.track2[this.enemy.position] = this.enemy2.skin;
    this.track3[this.enemy.position] = this.enemy3.skin;
    this.enemy.isShow = true;
    this.enemy1.isShow = true;
    this.enemy2.isShow = true;
    this.enemy3.isShow = true;

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

    if (this.boomerang.up === 0) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
    if (this.boomerang.down === 1) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
    if (this.boomerang.down === 2) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
    if (this.boomerang.down === 3) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
  }

  check() {
    this.hero.position === this.enemy.position && this.hero.up === this.enemy.up && this.enemy.isShow === true ? this.hero.die() : null;
    this.hero.position === this.enemy1.position && this.hero.up === this.enemy1.up && this.enemy1.isShow === true ? this.hero.die() : null;
    this.hero.position === this.enemy2.position && this.hero.up === this.enemy2.up && this.enemy2.isShow === true ? this.hero.die() : null;
    this.hero.position === this.enemy3.position && this.hero.up === this.enemy3.up && this.enemy3.isShow === true ? this.hero.die() : null;

    if (this.enemy.position === this.boomerang.position || this.enemy.position === this.boomerang.position + 1) {
      this.enemy.die();
    }
    if (this.enemy1.position === this.boomerang.position || this.enemy1.position === this.boomerang.position + 1) {
      this.enemy1.die();
    }
    if (this.enemy2.position === this.boomerang.position || this.enemy2.position === this.boomerang.position + 1) {
      this.enemy2.die();
    }
    if (this.enemy3.position === this.boomerang.position || this.enemy3.position === this.boomerang.position + 1) {
      this.enemy3.die();
    }
    if (!(this.hero.position === this.boomerang.position)) {
    }
    this.boomerang.position = this.hero.position + 1;
    this.boomerang.up = this.hero.up;
  }

  launchBoomerang(up) {
    if (!this.boomerang.ifFlying) {
      this.boomerang.ifFlying = true;
      this.boomerang.fly(up);
    }
  }

  play() {
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.track1, this.track2, this.track3);
      this.enemy.moveLeft();
      this.enemy1.moveLeft();
      this.enemy2.moveLeft();
      this.enemy3.moveLeft();
      if (this.boomerang.ifFlying === false) {
        this.launchBoomerang(this.hero.up);
      }
      console.log(this.boomerang.position);
      console.log(this.boomerang.ifFlying);
      console.log(this.hero.position, this.hero.up, this.hero.down);
      console.log(this.enemy.position, this.enemy.up);
      console.log(this.enemy1.position, this.enemy1.up);
      console.log(this.enemy2.position, this.enemy2.up);
      console.log(this.enemy3.position, this.enemy3.up);
      console.log(this.enemy1.isShow, this.enemy3.isShow);
      console.log(this.boomerang.position);
    }, 100);
  }
}

module.exports = Game;
