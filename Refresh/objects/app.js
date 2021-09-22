class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

const turtle = new Enemy(25, "Squiddle", 10);
const bug = new Enemy(15, "Buggy", 3);

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    this.legs = legs;
    this.dmg = dmg;
  }
}

const buddy = new Bug(100, "Buddy", 12, 6, 200);

console.log(buddy);
buddy.getInfo();
