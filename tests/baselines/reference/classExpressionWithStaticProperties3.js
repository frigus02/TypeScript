//// [tests/cases/compiler/classExpressionWithStaticProperties3.ts] ////

//// [classExpressionWithStaticProperties3.ts]
declare var console: any;
const arr: {y(): number}[] = [];
for (let i = 0; i < 3; i++) {
    arr.push(class C {
        static x = i;
        static y = () => C.x * 2;
    });
}
arr.forEach(C => console.log(C.y()));

//// [classExpressionWithStaticProperties3.js]
var arr = [];
var _loop_1 = function (i_1) {
    var _a = void 0;
    arr.push((_a = /** @class */ (function () {
            function C() {
            }
            return C;
        }()),
        _a.x = i_1,
        _a.y = function () { return _a.x * 2; },
        _a));
};
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
arr.forEach(function (C) { return console.log(C.y()); });
