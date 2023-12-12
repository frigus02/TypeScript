//// [tests/cases/compiler/continueInLoopsWithCapturedBlockScopedBindings1.ts] ////

//// [continueInLoopsWithCapturedBlockScopedBindings1.ts]
function foo() {
    for (const i of [0, 1]) {
        if (i === 0) {
            continue;
        }

        // Trigger non-simple-loop emit
        (() => {
            return i;
        })();
    }
}

//// [continueInLoopsWithCapturedBlockScopedBindings1.js]
function foo() {
    var _loop_1 = function (i_1) {
        if (i_1 === 0) {
            return "continue";
        }
        // Trigger non-simple-loop emit
        (function () {
            return i_1;
        })();
    };
    for (var _i = 0, _a = [0, 1]; _i < _a.length; _i++) {
        var i_1 = _a[_i];
        _loop_1(i_1);
    }
}
