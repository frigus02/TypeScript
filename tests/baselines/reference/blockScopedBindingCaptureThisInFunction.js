//// [tests/cases/compiler/blockScopedBindingCaptureThisInFunction.ts] ////

//// [blockScopedBindingCaptureThisInFunction.ts]
// https://github.com/Microsoft/TypeScript/issues/11038
() => function () {
    for (let someKey in {}) {
        this.helloWorld();
        () => someKey;
    }
};

//// [blockScopedBindingCaptureThisInFunction.js]
// https://github.com/Microsoft/TypeScript/issues/11038
(function () { return function () {
    var _loop_1 = function (someKey_1) {
        this_1.helloWorld();
        (function () { return someKey_1; });
    };
    var this_1 = this;
    for (var someKey_1 in {}) {
        _loop_1(someKey_1);
    }
}; });
