//// [tests/cases/compiler/capturedLetConstInLoop4.ts] ////

//// [capturedLetConstInLoop4.ts]
//======let
export function exportedFoo() {
    return v0 + v00 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8;
}

for (let x of []) {
    var v0 = x;
    (function() { return x + v0});
    (() => x);    
}

for (let x in []) {
    var v00 = x;
    (function() { return x + v00});
    (() => x);    
}

for (let x = 0; x < 1; ++x) {
    var v1 = x;
    (function() { return x + v1});
    (() => x);
}

while (1 === 1) {
    let x;
    var v2 = x;
    (function() { return x + v2});
    (() => x);
}

do {
    let x;
    var v3 = x;
    (function() { return x + v3});
    (() => x);
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    var v4 = x;
    (function() { return x + v4});
    (() => x);
}

for (let x = 0, y = 1; x < 1; ++x) {
    var v5 = x;
    (function() { return x + y + v5});
    (() => x + y);
}

while (1 === 1) {
    let x, y;
    var v6 = x;
    (function() { return x + y + v6});
    (() => x + y);
}

do {
    let x, y;
    var v7 = x;
    (function() { return x + y + v7});
    (() => x + y);
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    var v8 = x;
    (function() { return x + y + v8});
    (() => x + y);
}

//======const
export function exportedFoo2() {
    return v0_c + v00_c + v1_c + v2_c + v3_c + v4_c + v5_c + v6_c + v7_c + v8_c;
}

for (const x of []) {
    var v0_c = x;
    (function() { return x + v0_c});
    (() => x);    
}

for (const x in []) {
    var v00_c = x;
    (function() { return x + v00});
    (() => x);    
}

for (const x = 0; x < 1;) {
    var v1_c = x;
    (function() { return x + v1_c});
    (() => x);
}

while (1 === 1) {
    const x =1;
    var v2_c = x;
    (function() { return x + v2_c});
    (() => x);
}

do {
    const x = 1;
    var v3_c = x;
    (function() { return x + v3_c});
    (() => x);
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    var v4_c = x;
    (function() { return x + v4_c});
    (() => x);
}

for (const x = 0, y = 1; x < 1;) {
    var v5_c = x;
    (function() { return x + y + v5_c});
    (() => x + y);
}

while (1 === 1) {
    const x = 1, y = 1;
    var v6_c = x;
    (function() { return x + y + v6_c});
    (() => x + y);
}

do {
    const x = 1, y = 1;
    var v7_c = x;
    (function() { return x + y + v7_c});
    (() => x + y);
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    var v8_c = x;
    (function() { return x + y + v8_c});
    (() => x + y);
}


//// [capturedLetConstInLoop4.js]
System.register([], function (exports_1, context_1) {
    "use strict";
    var v0, v00, v1, v2, v3, v4, v5, v6, v7, v8, v0_c, v00_c, v1_c, v2_c, v3_c, v4_c, v5_c, v6_c, v7_c, v8_c;
    var __moduleName = context_1 && context_1.id;
    //======let
    function exportedFoo() {
        return v0 + v00 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8;
    }
    exports_1("exportedFoo", exportedFoo);
    //======const
    function exportedFoo2() {
        return v0_c + v00_c + v1_c + v2_c + v3_c + v4_c + v5_c + v6_c + v7_c + v8_c;
    }
    exports_1("exportedFoo2", exportedFoo2);
    return {
        setters: [],
        execute: function () {
            var _loop_1 = function (x_1) {
                v0 = x_1;
                (function () { return x_1 + v0; });
                (function () { return x_1; });
            };
            for (var _i = 0, _a = []; _i < _a.length; _i++) {
                var x_1 = _a[_i];
                _loop_1(x_1);
            }
            var _loop_2 = function (x_2) {
                v00 = x_2;
                (function () { return x_2 + v00; });
                (function () { return x_2; });
            };
            for (var x_2 in []) {
                _loop_2(x_2);
            }
            var _loop_3 = function (x_3) {
                v1 = x_3;
                (function () { return x_3 + v1; });
                (function () { return x_3; });
            };
            for (var x_3 = 0; x_3 < 1; ++x_3) {
                _loop_3(x_3);
            }
            var _loop_4 = function () {
                var x_4;
                v2 = x_4;
                (function () { return x_4 + v2; });
                (function () { return x_4; });
            };
            while (1 === 1) {
                _loop_4();
            }
            var _loop_5 = function () {
                var x_5;
                v3 = x_5;
                (function () { return x_5 + v3; });
                (function () { return x_5; });
            };
            do {
                _loop_5();
            } while (1 === 1);
            var _loop_6 = function (y_1) {
                var x_6 = 1;
                v4 = x_6;
                (function () { return x_6 + v4; });
                (function () { return x_6; });
            };
            for (var y_1 = 0; y_1 < 1; ++y_1) {
                _loop_6(y_1);
            }
            var _loop_7 = function (x_7, y_2) {
                v5 = x_7;
                (function () { return x_7 + y_2 + v5; });
                (function () { return x_7 + y_2; });
            };
            for (var x_7 = 0, y_2 = 1; x_7 < 1; ++x_7) {
                _loop_7(x_7, y_2);
            }
            var _loop_8 = function () {
                var x_8, y_3;
                v6 = x_8;
                (function () { return x_8 + y_3 + v6; });
                (function () { return x_8 + y_3; });
            };
            while (1 === 1) {
                _loop_8();
            }
            var _loop_9 = function () {
                var x_9, y_4;
                v7 = x_9;
                (function () { return x_9 + y_4 + v7; });
                (function () { return x_9 + y_4; });
            };
            do {
                _loop_9();
            } while (1 === 1);
            var _loop_10 = function (y_5) {
                var x_10 = 1;
                v8 = x_10;
                (function () { return x_10 + y_5 + v8; });
                (function () { return x_10 + y_5; });
            };
            for (var y_5 = 0; y_5 < 1; ++y_5) {
                _loop_10(y_5);
            }
            var _loop_11 = function (x_11) {
                v0_c = x_11;
                (function () { return x_11 + v0_c; });
                (function () { return x_11; });
            };
            for (var _b = 0, _c = []; _b < _c.length; _b++) {
                var x_11 = _c[_b];
                _loop_11(x_11);
            }
            var _loop_12 = function (x_12) {
                v00_c = x_12;
                (function () { return x_12 + v00; });
                (function () { return x_12; });
            };
            for (var x_12 in []) {
                _loop_12(x_12);
            }
            var _loop_13 = function (x_13) {
                v1_c = x_13;
                (function () { return x_13 + v1_c; });
                (function () { return x_13; });
            };
            for (var x_13 = 0; x_13 < 1;) {
                _loop_13(x_13);
            }
            var _loop_14 = function () {
                var x_14 = 1;
                v2_c = x_14;
                (function () { return x_14 + v2_c; });
                (function () { return x_14; });
            };
            while (1 === 1) {
                _loop_14();
            }
            var _loop_15 = function () {
                var x_15 = 1;
                v3_c = x_15;
                (function () { return x_15 + v3_c; });
                (function () { return x_15; });
            };
            do {
                _loop_15();
            } while (1 === 1);
            var _loop_16 = function (y_6) {
                var x_16 = 1;
                v4_c = x_16;
                (function () { return x_16 + v4_c; });
                (function () { return x_16; });
            };
            for (var y_6 = 0; y_6 < 1;) {
                _loop_16(y_6);
            }
            var _loop_17 = function (x_17, y_7) {
                v5_c = x_17;
                (function () { return x_17 + y_7 + v5_c; });
                (function () { return x_17 + y_7; });
            };
            for (var x_17 = 0, y_7 = 1; x_17 < 1;) {
                _loop_17(x_17, y_7);
            }
            var _loop_18 = function () {
                var x_18 = 1, y_8 = 1;
                v6_c = x_18;
                (function () { return x_18 + y_8 + v6_c; });
                (function () { return x_18 + y_8; });
            };
            while (1 === 1) {
                _loop_18();
            }
            var _loop_19 = function () {
                var x_19 = 1, y_9 = 1;
                v7_c = x_19;
                (function () { return x_19 + y_9 + v7_c; });
                (function () { return x_19 + y_9; });
            };
            do {
                _loop_19();
            } while (1 === 1);
            var _loop_20 = function (y_10) {
                var x_20 = 1;
                v8_c = x_20;
                (function () { return x_20 + y_10 + v8_c; });
                (function () { return x_20 + y_10; });
            };
            for (var y_10 = 0; y_10 < 1;) {
                _loop_20(y_10);
            }
        }
    };
});
