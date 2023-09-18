let myMap = new Map();

function user(name,id,email) {
    const userinfo = {id ,email};
    myMap.set(name,userinfo);
}

function updateUser(name,id,email) {
    if (myMap.has(name)) {
        let user = myMap.get(name);
        user.id = id;
        user.email = email;
    }

}

function userdelate(name) {
    myMap.delete(name)
}

user('robart',201,'robart@codebadal.com')
user('sitev',202,'sitev@codebadal.com')

console.log(myMap);

updateUser('robart',205,'rob12@codebadal.com')
updateUser('sitev',210,'sit12@codebadal.com')

console.log(myMap);

userdelate('robart')

console.log(myMap);

// output
// Map(2) {
//     'robart' => { id: 201, email: 'robart@codebadal.com' },
//     'sitev' => { id: 202, email: 'sitev@codebadal.com' }
//   }
//   Map(2) {
//     'robart' => { id: 205, email: 'rob12@codebadal.com' },
//     'sitev' => { id: 210, email: 'sit12@codebadal.com' }
//   }
//   Map(1) { 'sitev' => { id: 210, email: 'sit12@codebadal.com' } }
  