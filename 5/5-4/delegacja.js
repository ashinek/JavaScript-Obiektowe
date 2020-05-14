var Widget = {
    init: function(name){
        this.name = name;
    },
    showParams: function(){
        console.log(this.name);
    }
};

var Button = Object.create(Widget);
Button.initButton = function(name,size){
    this.init(name);
    this.size = size;
};

Button.showButtonParams = function(){
    this.showParams();
    console.log(this.size);
    
}

var btn = Object.create(Button);
btn.initButton('cta-button', 'large');
console.log(btn);
btn.showButtonParams();
