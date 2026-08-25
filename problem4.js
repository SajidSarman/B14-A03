function bonusScore(scores) {
    if (Array.isArray(scores) !== true) {
        return "Invalid"
    }
    if (scores.length === 0) {
        return "Invalid"
    }
    for (const score of scores) {
        if(typeof score !== "number") {
            return "Invalid"
        }
    }

    const bonus = 10
    console.log(scores)
    const addedBonus = scores.map((elem) => elem + bonus)
    console.log(addedBonus)
    const totelScore = addedBonus.reduce((accumulator, elem) => {
        return accumulator + elem
    }, 0)
    return totelScore;
}

// let playerScores = [80, 65, 90, 75]
// let playerScores = [100]
// let playerScores = []
// let playerScores = [80, "90", 70]
let playerScores = [80, null, 70]
// let playerScores = ["Score"]
console.log(bonusScore(playerScores))