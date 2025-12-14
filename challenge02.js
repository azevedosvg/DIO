function calculateRank(victories, defeats) {
    const balance = victories - defeats;
    let rank = '';
    
    if (balance < 10) {
        rank = 'Iron';
    } else if (balance >= 11 && balance <= 20) {
        rank = 'Bronze';
    } else if (balance >= 21 && balance <= 50) {
        rank = 'Silver';
    } else if (balance >= 51 && balance <= 80) {
        rank = 'Gold';
    } else if (balance >= 81 && balance <= 90) {
        rank = 'Platinum';
    } else if (balance >= 91 && balance <= 100) {
        rank = 'Diamond';
    } else if (balance >= 101) {
        rank = 'Immortal';
    }
    
    return `The Hero has a balance of ${balance} and is at the ${rank} level.`;
}

console.log(calculateRank(60, 40));
