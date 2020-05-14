var Widget = {
    init: function(name){
        this.name = name;
    }
}

var hasLabel = {
    setLabel: function(label){
        this.label = label;
    }
};

var isClickable = {
    handleClick: function(){
        return "Klik!";
    }
}

var ctaBtn = Object.assign(Object.create(Widget), hasLabel, isClickable);

ctaBtn.init('cta-Button');
ctaBtn.setLabel('Zobacz ofertę!');

console.log(ctaBtn);
console.log(ctaBtn.handleClick());

