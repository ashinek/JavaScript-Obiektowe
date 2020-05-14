"use strict"
var obj = {
    a: 1,
    b: 2
};

Object.freeze(obj);

//Object.seal(obj);
//obj.a = "ok"; //freeze blokuje calkowicie dodawanie zmian do wlasciwosci obiektu
//delete obj.a; nie da się

console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log(obj);