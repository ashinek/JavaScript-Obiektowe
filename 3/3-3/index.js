var obj = {
    id: 1,
    getId: getId
};

function getId(){
    console.log(this.id);
};

var newObj = Object.assign({},obj);
newObj.id = 10;
newObj.getId();
obj.getId();