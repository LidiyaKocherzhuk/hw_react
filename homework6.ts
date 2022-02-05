import {spaceXService} from "./services/spaceX.service";
import {IUser} from "./interface/user.interface";


// 1) создать интерфейс на основе этого объекта:

spaceXService.getAll().then(value => value.data).then(value => {

    for (const iSpaceX of value) {
        console.log(iSpaceX.mission_name)
    }
})

// 2) протипизировать функции:

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b)
}

function incAge(someUser: IUser, inc: number):IUser {
    someUser.age += inc
    return someUser
}


console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));