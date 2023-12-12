//// [tests/cases/conformance/classes/classExpressions/classExpressionLoop.ts] ////

//// [classExpressionLoop.ts]
let arr = [];
for (let i = 0; i < 10; ++i) {
    arr.push(class C {
        prop = i;
    });
}


//// [classExpressionLoop.js]
var arr = [];
var _loop_1 = function (i_1) {
    arr.push(/** @class */ (function () {
        function C() {
            this.prop = i_1;
        }
        return C;
    }()));
};
for (var i_1 = 0; i_1 < 10; ++i_1) {
    _loop_1(i_1);
}
