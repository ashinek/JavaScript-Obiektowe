var options = {};
console.log(options + options);

// Object.prototype

//teraz stworzymy obiekt ktory nic nie otrzymuje!

var option = Object.create(null);
//console.log(option.toString); no nie bangla bo nie ma prototypu jakze mi przykro
option['a'] = 1;
option['b'] = 2;
console.log(option);