function fn(){
    console.log(this.a);
}

var obj1 = {
    a: 2,
    fn: fn
};

fn.call(obj1);  //jeżeli nie dodam funkcji do obiektu
fn.apply(obj1); //j.w

obj1.fn(); //obiekt we wlasciwosciach ma dodana funkcje (fn: fn)

fn();