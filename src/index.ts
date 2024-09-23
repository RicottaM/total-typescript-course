import addNumbers from "./lesson-01/addNumbers";
import addObjectNumbers from "./lesson-02/addObjectNumbers";
import { Params } from "./lesson-02/paramsModel";

// lesson-01
console.log("Lesson-01 result: ", addNumbers(2, 5));
console.log("Lesson-01 result: ", addNumbers(2.13, -5.08));

// lesson-02
const obj1: Params = {
    first: 1,
    second: 2,
}

const obj2: Params = {
    first: -1.05,
    second: 2.98,
}

console.log("Lesson-02 result: ", addObjectNumbers(obj1));
console.log("Lesson-02 result: ", addObjectNumbers(obj2));
