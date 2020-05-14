// Widget
function Widget(name) {
    this.name = name;
}

Widget.prototype.showParams = function() {
    console.log(this.name);
}

// Przycisk
function Button(name, size) {
    Widget.call(this, name);
    this.size = size;
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.showParams = function() {
    Widget.prototype.showParams.call(this);
    console.log(this.size);
}