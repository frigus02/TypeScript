//// [tests/cases/compiler/transformArrowInBlockScopedLoopVarInitializer.ts] ////

//// [transformArrowInBlockScopedLoopVarInitializer.ts]
// https://github.com/Microsoft/TypeScript/issues/11236
while (true)
{
    let local = null;
    var a = () => local; // <-- Lambda should be converted to function()
}

//// [transformArrowInBlockScopedLoopVarInitializer.js]
var _loop_1 = function () {
    var local_1 = null;
    a = function () { return local_1; }; // <-- Lambda should be converted to function()
};
var a;
// https://github.com/Microsoft/TypeScript/issues/11236
while (true) {
    _loop_1();
}
