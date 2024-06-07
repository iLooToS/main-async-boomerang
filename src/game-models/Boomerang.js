// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(args = {}) {
    this.skin = '🌀';
    this.position = 1;
    this.up = args.up;
    this.ifFlying = false;
  }

  fly(num) {
    this.ifFlying = true;
    this.up = num;
    this.moveRight();
    this.moveLeft();
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
}

module.exports = Boomerang;
