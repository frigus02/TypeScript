//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames52.ts] ////

//// [computedPropertyNames52.js]
const array = [];
for (let i = 0; i < 10; ++i) {
    array.push(class C {
        [i] = () => C;
        static [i] = 100;
    })
}


//// [computedPropertyNames52-emit.js]
var _a;
var array = [];
var _loop_1 = function (i_1) {
    var _b = void 0, _c = void 0;
    array.push((_c = /** @class */ (function () {
            function C() {
                this[_b] = function () { return _c; };
            }
            return C;
        }()),
        _b = i_1,
        _a = i_1,
        _c[_a] = 100,
        _c));
};
for (var i_1 = 0; i_1 < 10; ++i_1) {
    _loop_1(i_1);
}
