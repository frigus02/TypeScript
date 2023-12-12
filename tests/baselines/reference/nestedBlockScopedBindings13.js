//// [tests/cases/compiler/nestedBlockScopedBindings13.ts] ////

//// [nestedBlockScopedBindings13.ts]
for (; false;) {
    let x;
    () => x;
}

for (; false;) {
    let y;
    y = 1;
}

//// [nestedBlockScopedBindings13.js]
var _loop_1 = function () {
    var x_1;
    (function () { return x_1; });
};
for (; false;) {
    _loop_1();
}
for (; false;) {
    var y_1 = void 0;
    y_1 = 1;
}
