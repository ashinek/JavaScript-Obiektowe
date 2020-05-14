var obj = {
    id: 1,
    name: "something"
};

obj.name = "OK";

console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
        
    }
}