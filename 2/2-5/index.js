function showMsg(){
    return "Witaj Admin"
};

var user = {
    name: "admin",
    showMsg: showMsg
};

console.log(user.showMsg());