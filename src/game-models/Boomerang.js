// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 1;
    this.up = 0;
    this.down = 0;
    this.ifFlying = false;
  }

  fly() {
    this.ifFlying = true;
    this.moveRight();
    // this.moveLeft();
  }

  moveLeft(heroPosition) {
    // if (this.position <= 0) {
    //   this.postion = 0;
    // }
    if (this.position === heroPosition) {
      this.ifFlying = false;
      this.position = heroPosition + 1;
      return;
    }
    this.ifFlying = false;
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
}

module.exports = Boomerang;
