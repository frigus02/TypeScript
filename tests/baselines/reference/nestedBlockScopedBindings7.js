//// [tests/cases/compiler/nestedBlockScopedBindings7.ts] ////

//// [nestedBlockScopedBindings7.ts]
for (let x; false;) {
    () => x;
}

for (let y; false;) {
    y = 1;
}

//// [nestedBlockScopedBindings7.js]
var _loop_1 = function (x_1) {
    (function () { return x_1; });
};
for (var x_1; false;) {
    _loop_1(x_1);
}
for (var y_1; false;) {
    y_1 = 1;
}
