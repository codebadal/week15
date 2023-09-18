let myObject = {
    name:'peter',
    id:201,
    age:23,
    joiningyear:2023,
}

console.log(Object.hasOwn(myObject,"name"));
console.log(Object.hasOwn(myObject,"id"));
console.log(Object.hasOwn(myObject,"city"));
console.log(Object.hasOwn(myObject,"phone"));


// output
// true
// true
// false
// false
