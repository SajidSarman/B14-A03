function generateLeaderboard(students) {
    if (Array.isArray(students) !== true) { //1
        return "Invalid";
    }

    if (students.length === 0) {  //2
        return "Invalid";
    }

    for (const student of students) {
        // if(student == undefined || typeof student !== "object" || Array.isArray(student) === true ){
        //     return "Invalid"
        // }
        if (student.name == undefined || student.score == undefined || typeof student.score !== "number") {
            return "Invalid"
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;  //3 //4
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase(); //6
    });
    return names.slice(0, 3); //7
}

let scores = [
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 80 },
    { name: "Nafisa", score: 70 },
    { name: "Nafis", score: 75 },
    
]
console.log(generateLeaderboard(scores))
// console.log(typeof scores)