//// [tests/cases/compiler/capturedLetConstInLoop11.ts] ////

//// [capturedLetConstInLoop11.ts]
for (;;) {
    let x = 1;
    () => x;
}

function foo() {
    for (;;) {
        const a = 0;
        switch(a) {
            case 0: return () => a;
        }
    }
}

//// [capturedLetConstInLoop11.js]
var _loop_1 = function () {
    var x_1 = 1;
    (function () { return x_1; });
};
for (;;) {
    _loop_1();
}
function foo() {
    var _loop_2 = function () {
        var a_1 = 0;
        switch (a_1) {
            case 0: return { value: function () { return a_1; } };
        }
    };
    for (;;) {
        var state_1 = _loop_2();
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
