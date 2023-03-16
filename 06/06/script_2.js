function sum(a) {

    let temp = a;

    function f(b) {
        temp += b;
        return f;
    }

    f.toString = function() {
        return temp;
    }

    return f;
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) );
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );