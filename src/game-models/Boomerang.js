// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(args = {}) {
    this.skin = '🌀';
    this.position = 0;
    this.up = args.up;
    this.ifFlying = false;
  }

  fly(enemy) {
    this.ifFlying = true;
    if (enemy.isDead === false) {
      this.moveRight();
    }
    if (enemy.isDead === true) {
      this.moveLeft();
    }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
