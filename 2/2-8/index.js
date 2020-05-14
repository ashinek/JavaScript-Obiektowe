var user = {
    id: 1,
    role: "author"
};

Object.defineProperty(user, "id",{
    writable: false
});

user.id = 10;

var newUser = Object.assign({},user);

newUser.id = 22;


console.log(Object.getOwnPropertyDescriptor(newUser,"id"));
console.log(newUser);
console.log(user);