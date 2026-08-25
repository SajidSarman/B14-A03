// p1
function studentIntroduction(student) {
    if(typeof student !== "object" || Array.isArray(student) === true || student === null) {
        return "Invalid"
    }

    if(Object.keys(student).length === 0) {
        return "Invalid"
    }

    let {name, age, course} = student

    if(name == undefined || age == undefined || course == undefined){
        return "Invalid"
    }
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
}

// p2
function filterActiveUsers(users) {
    if (Array.isArray(users) !== true) {
        return "Invalid";
    }
    if (users.length === 0) {
        return "Invalid";
    }

    for (const user of users) {
        if (user.name == undefined || user.isActive == undefined) {
            return "Invalid"
        }
    }

    let activeUser = users.filter((elem) => {
        let { name, isActive } = elem
        return isActive === true
    })
    return activeUser;

}

// p3
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid"
    }

    let arrCaption = caption.split(" ")
    let hashCaption = []
    let hashCount = 0
    for (let arr of arrCaption) {
        if (arr.startsWith("#") === true) {
            hashCaption.push(arr)
            hashCount++
        }
    }
    let longHashLength = 0
    let longHash;
    for (let hash of hashCaption) {
        if (hash.length > longHashLength) {
            longHashLength = hash.length
            longHash = hash
        }
    }

    let longCapWithOutHash = longHash !== undefined ? longHash.slice(1) : "";

    return {
        hashtagCount: hashCount,
        longestTag: longCapWithOutHash
    }
}

// p4
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
    const addedBonus = scores.map((elem) => elem + bonus)
    const totalScore = addedBonus.reduce((accumulator, elem) => {
        return accumulator + elem
    }, 0)
    return totalScore;
}

// p5
function generateLeaderboard(students) {
    if (Array.isArray(students) !== true) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        if (student.name == undefined || student.score == undefined || typeof student.score !== "number") {
            return "Invalid"
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });
    return names.slice(0, 3);
}
