let myObject = {
    name:"peter",
    id:502,
    age:23,
    city:"bhopal",
    state:"M.P"
}

function noOfProperties(a) {
    return Object.keys(a).length
}

console.log(noOfProperties(myObject));

// output
// 5