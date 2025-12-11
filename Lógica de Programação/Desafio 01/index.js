let heroes = [
    { name: "Luna", xp: 7500 },
    { name: "Sun", xp: 12000 },
    { name: "Azev", xp: 4500 }
];

for (let i = 0; i < heroes.length; i++) {
    let hero = heroes[i];
    let level = "";

    if (hero.xp < 1000) {
        level = "Iron";
    } else if (hero.xp >= 1001 && hero.xp <= 2000) {
        level = "Bronze";
    } else if (hero.xp >= 2001 && hero.xp <= 5000) {
        level = "Silver";
    } else if (hero.xp >= 5001 && hero.xp <= 7000) {
        level = "Gold";
    } else if (hero.xp >= 7001 && hero.xp <= 8000) {
        level = "Platinum";
    } else if (hero.xp >= 8001 && hero.xp <= 9000) {
        level = "Ascendant";
    } else if (hero.xp >= 9001 && hero.xp <= 10000) {
        level = "Immortal";
    } else if (hero.xp >= 10001) {
        level = "Radiant";
    }

    console.log(`The hero named ${hero.name} is at the level: ${level}`);
}
