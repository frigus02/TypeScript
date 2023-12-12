//// [tests/cases/compiler/capturedLetConstInLoop2.ts] ////

//// [capturedLetConstInLoop2.ts]
// ========let
function foo0(x) {
    for (let x of []) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo0_1(x) {
    for (let x in []) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo1(x) {
    for (let x = 0; x < 1; ++x) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo2(x) {
    while (1 === 1) {
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo3(x) {
    do {
        let x;
        let a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    } while (1 === 1)
}

function foo4(x) {
    for (let y = 0; y < 1; ++y) {
        let a = arguments.length;
        let x = 1;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo5(x) {
    for (let x = 0, y = 1; x < 1; ++x) {
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}


function foo6(x) {
    while (1 === 1) {
        let x, y;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}

function foo7(x) {
    do {
        let x, y;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    } while (1 === 1)
}


function foo8(x) {
    for (let y = 0; y < 1; ++y) {
        let x = 1;
        let a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}
///=======const
function foo0_c(x) {
    for (const x of []) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo0_1_c(x) {
    for (const x in []) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo1_c(x) {
    for (const x = 0; x < 1;) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo2_c(x) {
    while (1 === 1) {
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo3_c(x) {
    do {
        const x = 1;
        const a = arguments.length;
        (function() { return x + a });
        (() => x + a);
    } while (1 === 1)
}

function foo4_c(x) {
    for (const y = 0; y < 1;) {
        const a = arguments.length;
        const x = 1;
        (function() { return x + a });
        (() => x + a);
    }
}

function foo5_c(x) {
    for (const x = 0, y = 1; x < 1;) {
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}


function foo6_c(x) {
    while (1 === 1) {
        const x = 1, y =1 ;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}

function foo7_c(x) {
    do {
        const x = 1, y = 1;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    } while (1 === 1)
}


function foo8_c(x) {
    for (const y = 0; y < 1;) {
        const x = 1;
        const a = arguments.length;
        (function() { return x + y + a });
        (() => x + y + a);
    }
}

//// [capturedLetConstInLoop2.js]
// ========let
function foo0(x) {
    var _loop_1 = function (x_1) {
        var a_1 = arguments_1.length;
        (function () { return x_1 + a_1; });
        (function () { return x_1 + a_1; });
    };
    var arguments_1 = arguments;
    for (var _i = 0, _a = []; _i < _a.length; _i++) {
        var x_1 = _a[_i];
        _loop_1(x_1);
    }
}
function foo0_1(x) {
    var _loop_2 = function (x_2) {
        var a_2 = arguments_2.length;
        (function () { return x_2 + a_2; });
        (function () { return x_2 + a_2; });
    };
    var arguments_2 = arguments;
    for (var x_2 in []) {
        _loop_2(x_2);
    }
}
function foo1(x) {
    var _loop_3 = function (x_3) {
        var a_3 = arguments_3.length;
        (function () { return x_3 + a_3; });
        (function () { return x_3 + a_3; });
    };
    var arguments_3 = arguments;
    for (var x_3 = 0; x_3 < 1; ++x_3) {
        _loop_3(x_3);
    }
}
function foo2(x) {
    var _loop_4 = function () {
        var a_4 = arguments_4.length;
        (function () { return x + a_4; });
        (function () { return x + a_4; });
    };
    var arguments_4 = arguments;
    while (1 === 1) {
        _loop_4();
    }
}
function foo3(x) {
    var _loop_5 = function () {
        var x_4;
        var a_5 = arguments_5.length;
        (function () { return x_4 + a_5; });
        (function () { return x_4 + a_5; });
    };
    var arguments_5 = arguments;
    do {
        _loop_5();
    } while (1 === 1);
}
function foo4(x) {
    var _loop_6 = function (y_1) {
        var a_6 = arguments_6.length;
        var x_5 = 1;
        (function () { return x_5 + a_6; });
        (function () { return x_5 + a_6; });
    };
    var arguments_6 = arguments;
    for (var y_1 = 0; y_1 < 1; ++y_1) {
        _loop_6(y_1);
    }
}
function foo5(x) {
    var _loop_7 = function (x_6, y_2) {
        var a_7 = arguments_7.length;
        (function () { return x_6 + y_2 + a_7; });
        (function () { return x_6 + y_2 + a_7; });
    };
    var arguments_7 = arguments;
    for (var x_6 = 0, y_2 = 1; x_6 < 1; ++x_6) {
        _loop_7(x_6, y_2);
    }
}
function foo6(x) {
    var _loop_8 = function () {
        var x_7, y_3;
        var a_8 = arguments_8.length;
        (function () { return x_7 + y_3 + a_8; });
        (function () { return x_7 + y_3 + a_8; });
    };
    var arguments_8 = arguments;
    while (1 === 1) {
        _loop_8();
    }
}
function foo7(x) {
    var _loop_9 = function () {
        var x_8, y_4;
        var a_9 = arguments_9.length;
        (function () { return x_8 + y_4 + a_9; });
        (function () { return x_8 + y_4 + a_9; });
    };
    var arguments_9 = arguments;
    do {
        _loop_9();
    } while (1 === 1);
}
function foo8(x) {
    var _loop_10 = function (y_5) {
        var x_9 = 1;
        var a_10 = arguments_10.length;
        (function () { return x_9 + y_5 + a_10; });
        (function () { return x_9 + y_5 + a_10; });
    };
    var arguments_10 = arguments;
    for (var y_5 = 0; y_5 < 1; ++y_5) {
        _loop_10(y_5);
    }
}
///=======const
function foo0_c(x) {
    var _loop_11 = function (x_10) {
        var a_11 = arguments_11.length;
        (function () { return x_10 + a_11; });
        (function () { return x_10 + a_11; });
    };
    var arguments_11 = arguments;
    for (var _i = 0, _a = []; _i < _a.length; _i++) {
        var x_10 = _a[_i];
        _loop_11(x_10);
    }
}
function foo0_1_c(x) {
    var _loop_12 = function (x_11) {
        var a_12 = arguments_12.length;
        (function () { return x_11 + a_12; });
        (function () { return x_11 + a_12; });
    };
    var arguments_12 = arguments;
    for (var x_11 in []) {
        _loop_12(x_11);
    }
}
function foo1_c(x) {
    var _loop_13 = function (x_12) {
        var a_13 = arguments_13.length;
        (function () { return x_12 + a_13; });
        (function () { return x_12 + a_13; });
    };
    var arguments_13 = arguments;
    for (var x_12 = 0; x_12 < 1;) {
        _loop_13(x_12);
    }
}
function foo2_c(x) {
    var _loop_14 = function () {
        var a_14 = arguments_14.length;
        (function () { return x + a_14; });
        (function () { return x + a_14; });
    };
    var arguments_14 = arguments;
    while (1 === 1) {
        _loop_14();
    }
}
function foo3_c(x) {
    var _loop_15 = function () {
        var x_13 = 1;
        var a_15 = arguments_15.length;
        (function () { return x_13 + a_15; });
        (function () { return x_13 + a_15; });
    };
    var arguments_15 = arguments;
    do {
        _loop_15();
    } while (1 === 1);
}
function foo4_c(x) {
    var _loop_16 = function (y_6) {
        var a_16 = arguments_16.length;
        var x_14 = 1;
        (function () { return x_14 + a_16; });
        (function () { return x_14 + a_16; });
    };
    var arguments_16 = arguments;
    for (var y_6 = 0; y_6 < 1;) {
        _loop_16(y_6);
    }
}
function foo5_c(x) {
    var _loop_17 = function (x_15, y_7) {
        var a_17 = arguments_17.length;
        (function () { return x_15 + y_7 + a_17; });
        (function () { return x_15 + y_7 + a_17; });
    };
    var arguments_17 = arguments;
    for (var x_15 = 0, y_7 = 1; x_15 < 1;) {
        _loop_17(x_15, y_7);
    }
}
function foo6_c(x) {
    var _loop_18 = function () {
        var x_16 = 1, y_8 = 1;
        var a_18 = arguments_18.length;
        (function () { return x_16 + y_8 + a_18; });
        (function () { return x_16 + y_8 + a_18; });
    };
    var arguments_18 = arguments;
    while (1 === 1) {
        _loop_18();
    }
}
function foo7_c(x) {
    var _loop_19 = function () {
        var x_17 = 1, y_9 = 1;
        var a_19 = arguments_19.length;
        (function () { return x_17 + y_9 + a_19; });
        (function () { return x_17 + y_9 + a_19; });
    };
    var arguments_19 = arguments;
    do {
        _loop_19();
    } while (1 === 1);
}
function foo8_c(x) {
    var _loop_20 = function (y_10) {
        var x_18 = 1;
        var a_20 = arguments_20.length;
        (function () { return x_18 + y_10 + a_20; });
        (function () { return x_18 + y_10 + a_20; });
    };
    var arguments_20 = arguments;
    for (var y_10 = 0; y_10 < 1;) {
        _loop_20(y_10);
    }
}
