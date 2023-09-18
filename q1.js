let mycar = {
    make: "BMW",
    model: "ghost",
    year: "2020"
}

function carProperties(mycar) {
    for(let property in mycar){
        console.log(`${property}:${mycar[property]}`);
    }
}
carProperties(mycar)

// output
// make:BMW
// model:ghost
// year:2020