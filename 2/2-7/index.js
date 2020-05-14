var obj = {
    id: 1,
    name: "Something"
};

Object.defineProperty(obj, "id",{
    value: 10,
    writable: false,
    enumerable: false,
    configurable:false
});

Object.defineProperty(obj, "user",{
    value: "admin",
    writable: true,
    enumerable: true,
    configurable:true
});

obj.id = 34; //nie zagodo

console.log(obj.id);
console.log(obj.user);

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    }
}