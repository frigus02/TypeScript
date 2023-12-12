//// [tests/cases/compiler/capturedLetConstInLoop10.ts] ////

//// [capturedLetConstInLoop10.ts]
class A {
    foo() {
        for (let x of [0]) {
            let f = function() { return x; };
            this.bar(f());
        }
    }
    bar(a: number) {
    }

    baz() {
        for (let x of [1]) {
            let a = function() {  return x; };
            for (let y of [1]) {
                let b = function() { return y; };
                this.bar(b());
            }
            this.bar(a());
        }
    }
    baz2() {
        for (let x of [1]) {
            let a = function() {  return x; };
            this.bar(a());
            for (let y of [1]) {
                let b = function() { return y; };
                this.bar(b());
            }
        }
    }
}

class B {
    foo() {
        let a =
            () => {
                for (let x of [0]) {
                    let f = () => x;
                    this.bar(f());
                }
            }
    }
    bar(a: number) {
    }
}

//// [capturedLetConstInLoop10.js]
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function () {
        var _loop_1 = function (x_1) {
            var f_1 = function () { return x_1; };
            this_1.bar(f_1());
        };
        var this_1 = this;
        for (var _i = 0, _a = [0]; _i < _a.length; _i++) {
            var x_1 = _a[_i];
            _loop_1(x_1);
        }
    };
    A.prototype.bar = function (a) {
    };
    A.prototype.baz = function () {
        var _loop_2 = function (x_2) {
            var a_1 = function () { return x_2; };
            var _loop_3 = function (y_1) {
                var b_1 = function () { return y_1; };
                this_2.bar(b_1());
            };
            for (var _b = 0, _c = [1]; _b < _c.length; _b++) {
                var y_1 = _c[_b];
                _loop_3(y_1);
            }
            this_2.bar(a_1());
        };
        var this_2 = this;
        for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
            var x_2 = _a[_i];
            _loop_2(x_2);
        }
    };
    A.prototype.baz2 = function () {
        var _loop_4 = function (x_3) {
            var a_2 = function () { return x_3; };
            this_3.bar(a_2());
            var _loop_5 = function (y_2) {
                var b_2 = function () { return y_2; };
                this_3.bar(b_2());
            };
            for (var _b = 0, _c = [1]; _b < _c.length; _b++) {
                var y_2 = _c[_b];
                _loop_5(y_2);
            }
        };
        var this_3 = this;
        for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
            var x_3 = _a[_i];
            _loop_4(x_3);
        }
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.foo = function () {
        var _this = this;
        var a = function () {
            var _loop_6 = function (x_4) {
                var f_2 = function () { return x_4; };
                _this.bar(f_2());
            };
            for (var _i = 0, _a = [0]; _i < _a.length; _i++) {
                var x_4 = _a[_i];
                _loop_6(x_4);
            }
        };
    };
    B.prototype.bar = function (a) {
    };
    return B;
}());
