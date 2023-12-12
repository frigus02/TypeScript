//// [tests/cases/compiler/nestedBlockScopedBindings3.ts] ////

//// [nestedBlockScopedBindings3.ts]
function a0() {
    {
        for (let x = 0; x < 1; ) {
            () => x;
        }
    }
    {
        for (let x;;) {
            () => x;
        }
    }
}

function a1() {
    for (let x; x < 1;) {
        () => x;
    }
    for (let x;;) {
        () => x;
    }
}

function a2() {
    for (let x; x < 1;) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
    }
}


function a3() {
    for (let x; x < 1;) {
        x = x + 1;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}

function a4() {
    for (let x; x < 1;) {
        x = x + 1;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}


function a5() {
    for (let x; x < 1;) {
        x = x + 1;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}

//// [nestedBlockScopedBindings3.js]
function a0() {
    {
        var _loop_1 = function (x_1) {
            (function () { return x_1; });
        };
        for (var x_1 = 0; x_1 < 1;) {
            _loop_1(x_1);
        }
    }
    {
        var _loop_2 = function (x_2) {
            (function () { return x_2; });
        };
        for (var x_2;;) {
            _loop_2(x_2);
        }
    }
}
function a1() {
    var _loop_3 = function (x_3) {
        (function () { return x_3; });
    };
    for (var x_3; x_3 < 1;) {
        _loop_3(x_3);
    }
    var _loop_4 = function (x_4) {
        (function () { return x_4; });
    };
    for (var x_4;;) {
        _loop_4(x_4);
    }
}
function a2() {
    for (var x_5; x_5 < 1;) {
        x_5 = x_5 + 1;
    }
    for (var x_6;;) {
        x_6 = x_6 + 2;
    }
}
function a3() {
    for (var x_7; x_7 < 1;) {
        x_7 = x_7 + 1;
    }
    switch (1) {
        case 1:
            var x_8;
            break;
    }
}
function a4() {
    var _loop_5 = function (x_9) {
        x_9 = x_9 + 1;
        (function () { return x_9; });
        out_x_1 = x_9;
    };
    var out_x_1;
    for (var x_9; x_9 < 1;) {
        _loop_5(x_9);
        x_9 = out_x_1;
    }
    switch (1) {
        case 1:
            var x_10;
            break;
    }
}
function a5() {
    var _loop_6 = function (x_11) {
        x_11 = x_11 + 1;
        (function () { return x_11; });
        out_x_2 = x_11;
    };
    var out_x_2;
    for (var x_11; x_11 < 1;) {
        _loop_6(x_11);
        x_11 = out_x_2;
    }
    switch (1) {
        case 1:
            var x_12;
            (function () { return x_12; });
            break;
    }
}
