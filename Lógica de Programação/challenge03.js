class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackType;

    if (this.type === "mage") {
      attackType = "magic";
    } else if (this.type === "warrior") {
      attackType = "sword";
    } else if (this.type === "monk") {
      attackType = "martial arts";
    } else if (this.type === "ninja") {
      attackType = "shuriken";
    } else {
      attackType = "basic attack";
    }

    console.log(`The ${this.type} attacked using ${attackType}`);
  }
}

const hero1 = new Hero("Arthas", 30, "warrior");
hero1.attack();

const hero2 = new Hero("Merlin", 150, "mage");
hero2.attack();

const hero3 = new Hero("Lee", 28, "monk");
hero3.attack();

const hero4 = new Hero("Hanzo", 25, "ninja");
hero4.attack();
