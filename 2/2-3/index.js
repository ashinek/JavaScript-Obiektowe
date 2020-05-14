var obj = {
   a: 2,
   b: "OK",
   c: true, 
   "1-1": "jeden jeden"
};

function buildKey(key){
   return key + "-" + key;
}

obj["c"] = false;

console.log(obj[buildKey(1)]);