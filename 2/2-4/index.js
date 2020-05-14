var obj = {
   a: 2,
   b: "OK",
   c: true,
   1: "Jeden",
   "1-1": "Jeden Jeden"
};

for (const key in obj){
   if (obj.hasOwnProperty(key)){
      console.log(obj[key]);
   }
};

console.log(Object.getOwnPropertyNames(obj));