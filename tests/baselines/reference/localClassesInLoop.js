//// [tests/cases/compiler/localClassesInLoop.ts] ////

//// [localClassesInLoop.ts]
declare function use(a: any);

"use strict"
var data = [];
for (let x = 0; x < 2; ++x) {
    class C { }
    data.push(() => C);
}

use(data[0]() === data[1]());

//// [localClassesInLoop.js]
"use strict";
var data = [];
var _loop_1 = function (x_1) {
    var C_1 = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    data.push(function () { return C_1; });
};
for (var x_1 = 0; x_1 < 2; ++x_1) {
    _loop_1(x_1);
}
use(data[0]() === data[1]());
