// Враг.

class Enemy {
  constructor(args = {}) {
    this.generateSkin();
    // this.position = Math.floor(Math.random() * 30);
    this.position = 30;
    this.up = args.up;
    this.isDead = false;
    this.isShow = false;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    // this.position = Math.floor(Math.random() * 25);
    this.position = 30;
    this.isDead = true;
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
