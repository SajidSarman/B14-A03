function studentIntroduction(student) {
    if(typeof student !== "object" || Array.isArray(student) === true || student === null) {
        return "Invalid"
    }

    if(Object.keys(student).length === 0) {
        return "Invalid"
    }

    let {name, age, course} = student
    // console.log(name, age, course)

    if(name == undefined || age == undefined || course == undefined){
        return "Invalid"
    }
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
}

let info = {
    name: "Rafi",
    age: 18,
    course: "JavaScript"
}
// let info = [];

console.log(studentIntroduction(info))
// console.log(Object.entries(info).length)
// console.log(Object.values(info).length)
