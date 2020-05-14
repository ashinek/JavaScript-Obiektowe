var obj = {
    id: 1,
    name: undefined
};

if (obj.hasOwnProperty("name")){
    console.log(obj.name);
}
else{
    console.log("nie ma takiej wlasciwosci");
}