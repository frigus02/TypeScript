//// [tests/cases/compiler/nestedBlockScopedBindings5.ts] ////

//// [nestedBlockScopedBindings5.ts]
function a0() {
    for (let x in []) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a1() {
    for (let x in []) {
        x = x + 1;
        () => x;
    }
    for (let x;;) {
        x = x + 2;
    }
}

function a2() {
    for (let x in []) {
        x = x + 1;
    }
    for (let x;;) {
        x = x + 2;
        () => x;
    }
}


function a3() {
    for (let x in []) {
        x = x + 1;
        () => x;
    }
    for (let x;false;) {
        x = x + 2;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
    
}

function a4() {
    for (let x in []) {
        x = x + 1;
    }
    for (let x;false;) {
        x = x + 2;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
    
}

function a5() {
    let y;
    for (let x in []) {
        x = x + 1;
    }
    for (let x;false;) {
        x = x + 2;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
    
}

//// [nestedBlockScopedBindings5.js]
function a0() {
    for (var x_1 in []) {
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
    for (var x_3 in []) {
        _loop_1(x_3);
    }
    for (var x_4;;) {
        x_4 = x_4 + 2;
    }
}
function a2() {
    for (var x_5 in []) {
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
    for (var x_7 in []) {
        _loop_3(x_7);
    }
    var _loop_4 = function (x_8) {
        x_8 = x_8 + 2;
        (function () { return x_8; });
        out_x_2 = x_8;
    };
    var out_x_2;
    for (var x_8; false;) {
        _loop_4(x_8);
        x_8 = out_x_2;
    }
    switch (1) {
        case 1:
            var x_9;
            (function () { return x_9; });
            break;
    }
}
function a4() {
    for (var x_10 in []) {
        x_10 = x_10 + 1;
    }
    for (var x_11; false;) {
        x_11 = x_11 + 2;
    }
    switch (1) {
        case 1:
            var x_12;
            (function () { return x_12; });
            break;
    }
}
function a5() {
    var y;
    for (var x_13 in []) {
        x_13 = x_13 + 1;
    }
    var _loop_5 = function (x_14) {
        x_14 = x_14 + 2;
        (function () { return x_14; });
        out_x_3 = x_14;
    };
    var out_x_3;
    for (var x_14; false;) {
        _loop_5(x_14);
        x_14 = out_x_3;
    }
    switch (1) {
        case 1:
            var x_15;
            break;
    }
}
