//// [tests/cases/compiler/nestedBlockScopedBindings4.ts] ////

//// [nestedBlockScopedBindings4.ts]
function a0() {
    for (let x; x < 1;) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a1() {
    for (let x; x < 1;) {
        x = x + 1;
        () => x;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a2() {
    for (let x; x < 1;) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
        () => x;
    }
}


function a3() {
    for (let x; x < 1;) {
        x = x + 1;
        () => x;
    }
    for (let x;;) {
        x = x + 2;
        () => x;
    }
}

//// [nestedBlockScopedBindings4.js]
function a0() {
    for (var x_1; x_1 < 1;) {
        x_1 = x_1 + 1;
    }
    for (var x_2;;) {
        x_2 = x_2 + 2;
    }
}
function a1() {
    var _loop_1 = function (x_3) {
        x_3 = x_3 + 1;
        (function () { return x_3; });
        out_x_1 = x_3;
    };
    var out_x_1;
    for (var x_3; x_3 < 1;) {
        _loop_1(x_3);
        x_3 = out_x_1;
    }
    for (var x_4;;) {
        x_4 = x_4 + 2;
    }
}
function a2() {
    for (var x_5; x_5 < 1;) {
        x_5 = x_5 + 1;
    }
    var _loop_2 = function (x_6) {
        x_6 = x_6 + 2;
        (function () { return x_6; });
        out_x_2 = x_6;
    };
    var out_x_2;
    for (var x_6;;) {
        _loop_2(x_6);
        x_6 = out_x_2;
    }
}
function a3() {
    var _loop_3 = function (x_7) {
        x_7 = x_7 + 1;
        (function () { return x_7; });
        out_x_3 = x_7;
    };
    var out_x_3;
    for (var x_7; x_7 < 1;) {
        _loop_3(x_7);
        x_7 = out_x_3;
    }
    var _loop_4 = function (x_8) {
        x_8 = x_8 + 2;
        (function () { return x_8; });
        out_x_4 = x_8;
    };
    var out_x_4;
    for (var x_8;;) {
        _loop_4(x_8);
        x_8 = out_x_4;
    }
}
