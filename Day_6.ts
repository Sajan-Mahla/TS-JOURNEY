type User = {
    id: number;
    name: string;
    age: number;
    role: string;
}

const users: User[] = [
    { id: 1, name: "Sajan", age: 19, role: "iOS Developer" },
    { id: 2, name: "Rahul", age: 21, role: "Backend Developer" },
    { id: 3, name: "Ankit", age: 20, role: "Designer" }
]

function getUserInfo(user: User): string {
    return `${user.name} is ${user.age} years old and works as a ${user.role}.`
}

users.forEach((user) => {
    console.log(getUserInfo(user))
})