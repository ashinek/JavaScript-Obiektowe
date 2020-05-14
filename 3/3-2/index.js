var obj = {

    get id(){
        return this._id_.toString();
    },
    set id(v){
        this._id_ = v;
    }
};

obj.id = 2;
console.log(Object.getOwnPropertyDescriptor(obj,"id"));
console.log(Object.getOwnPropertyDescriptor(obj,"_id_"));
console.log(typeof obj.id);