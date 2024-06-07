// Наш герой.

class Hero {
  constructor() {
    this.skin = '.🤠'; // можете использовать любые emoji '💃'
    this.position = 0;
    this.down = 0;
    this.up = 0;
  }

  moveLeft() {
    if (this.position <= 0) {
      this.postion = 0;
    }
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  moveUp() {
    if (this.up === 1) {
      this.up -= 1;
      this.down -= 1;
      return;
    }
    if (this.up === 2) {
      this.up -= 1;
      this.down -= 1;
      return;
    }
    if (this.up === 3) {
      this.up -= 1;
      this.down -= 1;
      return;
    }
    if (this.up === 0) {
      return;
    }
  }

  moveDown() {
    if (this.down === 1) {
      this.up += 1;
      this.down += 1;
      return;
    }
    if (this.down === 2) {
      this.up += 1;
      this.down += 1;
      return;
    }
    if (this.down === 3) {
      return;
    }
    if (this.up === 0) {
      this.down += 1;
      this.up += 1;
    }
  }

  attack(enemy) {
    this.boomerang.fly(enemy);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
