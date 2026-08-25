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

// let people = [
//     { name: "A", isActive: true },
//     { name: "B", isActive: false },
//     { name: "CC", isActive: true }
// ]

// let people = []

let people = [{isActive: true}]

// let people = "fvdfvdvd"

console.log(filterActiveUsers(people))  