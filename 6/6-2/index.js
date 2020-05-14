class Widget {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Button extends Widget{
    constructor(name,label){
        super(name);
        this.label = label;
    }
    handleClick() {
        return "Klik!";
    }
}

var btn = new Button("cta-btn","Zobacz Więcej");
console.log(btn);

console.log(btn.handleClick());
