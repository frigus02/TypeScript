//// [tests/cases/compiler/nestedBlockScopedBindings6.ts] ////

//// [nestedBlockScopedBindings6.ts]
function a0() {
    for (let x of [1]) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a1() {
    for (let x of [1]) {
        x = x + 1;
        () => x;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a2() {
    for (let x of [1]) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
        () => x;
    }
}

function a3() {
    for (let x of [1]) {
        x = x + 1;
        () => x;
    }
    for (let x;;) {
        x = x + 2;
        () => x;
    }
}

function a4() {
    for (let x of [1]) {
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
    for (let x of [1]) {
        x = x + 1;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}

function a6() {
    for (let x of [1]) {
        x = x + 1;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}

function a7() {
    for (let x of [1]) {
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

//// [nestedBlockScopedBindings6.js]
function a0() {
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_1 = _a[_i];
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
    };
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_3 = _a[_i];
        _loop_1(x_3);
    }
    for (var x_4;;) {
        x_4 = x_4 + 2;
    }
}
function a2() {
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_5 = _a[_i];
        x_5 = x_5 + 1;
    }
    var _loop_2 = function (x_6) {
        x_6 = x_6 + 2;
        (function () { return x_6; });
        out_x_1 = x_6;
    };
    var out_x_1;
    for (var x_6;;) {
        _loop_2(x_6);
        x_6 = out_x_1;
    }
}
function a3() {
    var _loop_3 = function (x_7) {
        x_7 = x_7 + 1;
        (function () { return x_7; });
    };
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_7 = _a[_i];
        _loop_3(x_7);
    }
    var _loop_4 = function (x_8) {
        x_8 = x_8 + 2;
        (function () { return x_8; });
        out_x_2 = x_8;
    };
    var out_x_2;
    for (var x_8;;) {
        _loop_4(x_8);
        x_8 = out_x_2;
    }
}
function a4() {
    var _loop_5 = function (x_9) {
        x_9 = x_9 + 1;
        (function () { return x_9; });
    };
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_9 = _a[_i];
        _loop_5(x_9);
    }
    switch (1) {
        case 1:
            var x_10;
            break;
    }
}
function a5() {
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_11 = _a[_i];
        x_11 = x_11 + 1;
    }
    switch (1) {
        case 1:
            var x_12;
            (function () { return x_12; });
            break;
    }
}
function a6() {
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_13 = _a[_i];
        x_13 = x_13 + 1;
    }
    switch (1) {
        case 1:
            var x_14;
            break;
    }
}
function a7() {
    var _loop_6 = function (x_15) {
        x_15 = x_15 + 1;
        (function () { return x_15; });
    };
    for (var _i = 0, _a = [1]; _i < _a.length; _i++) {
        var x_15 = _a[_i];
        _loop_6(x_15);
    }
    switch (1) {
        case 1:
            var x_16;
            (function () { return x_16; });
            break;
    }
}
