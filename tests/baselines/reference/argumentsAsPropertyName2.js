//// [tests/cases/compiler/argumentsAsPropertyName2.ts] ////

//// [argumentsAsPropertyName2.ts]
// target: es5

function foo() {
    for (let x = 0; x < 1; ++x) {
        let i : number;
        [].forEach(function () { i });
        ({ arguments: 0 });
        ({ arguments });
        ({ arguments: arguments });
    }
}


//// [argumentsAsPropertyName2.js]
// target: es5
function foo() {
    var _loop_1 = function (x_1) {
        var i_1;
        [].forEach(function () { i_1; });
        ({ arguments: 0 });
        ({ arguments: arguments_1 });
        ({ arguments: arguments_1 });
    };
    var arguments_1 = arguments;
    for (var x_1 = 0; x_1 < 1; ++x_1) {
        _loop_1(x_1);
    }
}
