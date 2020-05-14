var obj = {
    a: 1,
    b: 2
};

obj.d = "ok";

Object.preventExtensions(obj);
obj.a = "Nowa wartość";
obj.c = "ok";
delete obj.b;

console.log(Object.isExtensible(obj));
console.log(obj);