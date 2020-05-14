/*var counter = {
    count: 0,
    increment: function(){
        setTimeout((function(){
            this.count++;
            console.log(this.count)
        }).bind(this),1000);
    }
};
//klasyczne rozwiązanie problemu z 'this'
counter.increment();*/

//rozwiązanie problemu z 'this' za pomoca 'arrow function'
//funkcja strzalkowa nie posiada wlasnego 'this', wiec odnosi sie do obiektu counter

var counter = {
    count: 0,
    increment: function(){
        setTimeout(()=> {
            this.count++;
            console.log(this.count);
        },1000);
    }
    
};

counter.increment();