//// [tests/cases/conformance/classes/classDeclarations/classDeclarationLoop.ts] ////

//// [classDeclarationLoop.ts]
const arr = [];
for (let i = 0; i < 10; ++i) {
    class C {
        prop = i;
    }
    arr.push(C);
}


//// [classDeclarationLoop.js]
var arr = [];
var _loop_1 = function (i_1) {
    var C_1 = /** @class */ (function () {
        function C() {
            this.prop = i_1;
        }
        return C;
    }());
    arr.push(C_1);
};
for (var i_1 = 0; i_1 < 10; ++i_1) {
    _loop_1(i_1);
}
