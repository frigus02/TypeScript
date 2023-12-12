//// [tests/cases/compiler/capturedLetConstInLoop1.ts] ////

//// [capturedLetConstInLoop1.ts]
declare function use(x: any): any;

//==== let
for (let x in {}) {
    (function() { return x});
    (() => x);
}

for (let x of []) {
    (function() { return x});
    (() => x);
}

for (let x = 0; x < 1; ++x) {
    (function() { return x});
    (() => x);
}

while (1 === 1) {
    let x;
    (function() { return x});
    (() => x);
}

do {
    let x;
    (function() { return x});
    (() => x);
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    (function() { return x});
    (() => x);
}

for (let x = 0, y = 1; x < 1; ++x) {
    (function() { return x + y});
    (() => x + y);
}

while (1 === 1) {
    let x, y;
    (function() { return x + y});
    (() => x + y);
}

do {
    let x, y;
    (function() { return x + y});
    (() => x + y);
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    (function() { return x + y});
    (() => x + y);
}

for (let y = (use(() => y), 0); y < 1; ++y) {
}

for (let y = 0; use(() => y), y < 1; ++y) {
}

for (let y = 0; y < 1; use(() => y), ++y) {
}

for (let y = (use(() => y), 0); use(() => y), y < 1; use(() => y), ++y) {
    use(() => y);
}

//=========const
for (const x in {}) {
    (function() { return x});
    (() => x);
}

for (const x of []) {
    (function() { return x});
    (() => x);
}

for (const x = 0; x < 1;) {
    (function() { return x});
    (() => x);
}

while (1 === 1) {
    const x = 1;
    (function() { return x});
    (() => x);
}

do {
    const x = 1;
    (function() { return x});
    (() => x);
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    (function() { return x});
    (() => x);
}

for (const x = 0, y = 1; x < 1;) {
    (function() { return x + y});
    (() => x + y);
}

while (1 === 1) {
    const x = 1, y = 1;
    (function() { return x + y});
    (() => x + y);
}

do {
    const x = 1, y = 1;
    (function() { return x + y});
    (() => x + y);
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    (function() { return x + y});
    (() => x + y);
}

// https://github.com/Microsoft/TypeScript/issues/20594
declare const sobj: { [x: string]: any };
for (let sx in sobj) {
    (() => sobj[sx]);
}
declare const iobj: { [x: number]: any };
for (let ix in iobj) {
    (() => iobj[ix]);
}

//// [capturedLetConstInLoop1.js]
var _loop_1 = function (x_1) {
    (function () { return x_1; });
    (function () { return x_1; });
};
//==== let
for (var x_1 in {}) {
    _loop_1(x_1);
}
var _loop_2 = function (x_2) {
    (function () { return x_2; });
    (function () { return x_2; });
};
for (var _i = 0, _a = []; _i < _a.length; _i++) {
    var x_2 = _a[_i];
    _loop_2(x_2);
}
var _loop_3 = function (x_3) {
    (function () { return x_3; });
    (function () { return x_3; });
};
for (var x_3 = 0; x_3 < 1; ++x_3) {
    _loop_3(x_3);
}
var _loop_4 = function () {
    var x_4;
    (function () { return x_4; });
    (function () { return x_4; });
};
while (1 === 1) {
    _loop_4();
}
var _loop_5 = function () {
    var x_5;
    (function () { return x_5; });
    (function () { return x_5; });
};
do {
    _loop_5();
} while (1 === 1);
var _loop_6 = function (y_1) {
    var x_6 = 1;
    (function () { return x_6; });
    (function () { return x_6; });
};
for (var y_1 = 0; y_1 < 1; ++y_1) {
    _loop_6(y_1);
}
var _loop_7 = function (x_7, y_2) {
    (function () { return x_7 + y_2; });
    (function () { return x_7 + y_2; });
};
for (var x_7 = 0, y_2 = 1; x_7 < 1; ++x_7) {
    _loop_7(x_7, y_2);
}
var _loop_8 = function () {
    var x_8, y_3;
    (function () { return x_8 + y_3; });
    (function () { return x_8 + y_3; });
};
while (1 === 1) {
    _loop_8();
}
var _loop_9 = function () {
    var x_9, y_4;
    (function () { return x_9 + y_4; });
    (function () { return x_9 + y_4; });
};
do {
    _loop_9();
} while (1 === 1);
var _loop_10 = function (y_5) {
    var x_10 = 1;
    (function () { return x_10 + y_5; });
    (function () { return x_10 + y_5; });
};
for (var y_5 = 0; y_5 < 1; ++y_5) {
    _loop_10(y_5);
}
var _loop_init_1 = function () {
    var y_6 = (use(function () { return y_6; }), 0);
    out_y_1 = y_6;
};
var out_y_1;
_loop_init_1();
for (var y_6 = out_y_1; y_6 < 1; ++y_6) {
}
var _loop_11 = function (y_7) {
    if (inc_1)
        ++y_7;
    else
        inc_1 = true;
    if (!(use(function () { return y_7; }), y_7 < 1))
        return out_y_2 = y_7, "break";
    out_y_2 = y_7;
};
var out_y_2, inc_1 = false;
for (var y_7 = 0;;) {
    var state_1 = _loop_11(y_7);
    y_7 = out_y_2;
    if (state_1 === "break")
        break;
}
var _loop_12 = function (y_8) {
    if (inc_2)
        use(function () { return y_8; }), ++y_8;
    else
        inc_2 = true;
    out_y_3 = y_8;
};
var out_y_3, inc_2 = false;
for (var y_8 = 0; y_8 < 1;) {
    _loop_12(y_8);
    y_8 = out_y_3;
}
var _loop_init_2 = function () {
    var y_9 = (use(function () { return y_9; }), 0);
    out_y_4 = y_9;
};
var _loop_13 = function (y_9) {
    if (inc_3)
        use(function () { return y_9; }), ++y_9;
    else
        inc_3 = true;
    if (!(use(function () { return y_9; }), y_9 < 1))
        return out_y_4 = y_9, "break";
    use(function () { return y_9; });
    out_y_4 = y_9;
};
var out_y_4, inc_3 = false;
_loop_init_2();
for (var y_9 = out_y_4;;) {
    var state_2 = _loop_13(y_9);
    y_9 = out_y_4;
    if (state_2 === "break")
        break;
}
var _loop_14 = function (x_11) {
    (function () { return x_11; });
    (function () { return x_11; });
};
//=========const
for (var x_11 in {}) {
    _loop_14(x_11);
}
var _loop_15 = function (x_12) {
    (function () { return x_12; });
    (function () { return x_12; });
};
for (var _b = 0, _c = []; _b < _c.length; _b++) {
    var x_12 = _c[_b];
    _loop_15(x_12);
}
var _loop_16 = function (x_13) {
    (function () { return x_13; });
    (function () { return x_13; });
};
for (var x_13 = 0; x_13 < 1;) {
    _loop_16(x_13);
}
var _loop_17 = function () {
    var x_14 = 1;
    (function () { return x_14; });
    (function () { return x_14; });
};
while (1 === 1) {
    _loop_17();
}
var _loop_18 = function () {
    var x_15 = 1;
    (function () { return x_15; });
    (function () { return x_15; });
};
do {
    _loop_18();
} while (1 === 1);
var _loop_19 = function (y_10) {
    var x_16 = 1;
    (function () { return x_16; });
    (function () { return x_16; });
};
for (var y_10 = 0; y_10 < 1;) {
    _loop_19(y_10);
}
var _loop_20 = function (x_17, y_11) {
    (function () { return x_17 + y_11; });
    (function () { return x_17 + y_11; });
};
for (var x_17 = 0, y_11 = 1; x_17 < 1;) {
    _loop_20(x_17, y_11);
}
var _loop_21 = function () {
    var x_18 = 1, y_12 = 1;
    (function () { return x_18 + y_12; });
    (function () { return x_18 + y_12; });
};
while (1 === 1) {
    _loop_21();
}
var _loop_22 = function () {
    var x_19 = 1, y_13 = 1;
    (function () { return x_19 + y_13; });
    (function () { return x_19 + y_13; });
};
do {
    _loop_22();
} while (1 === 1);
var _loop_23 = function (y_14) {
    var x_20 = 1;
    (function () { return x_20 + y_14; });
    (function () { return x_20 + y_14; });
};
for (var y_14 = 0; y_14 < 1;) {
    _loop_23(y_14);
}
var _loop_24 = function (sx_1) {
    (function () { return sobj[sx_1]; });
};
for (var sx_1 in sobj) {
    _loop_24(sx_1);
}
var _loop_25 = function (ix_1) {
    (function () { return iobj[ix_1]; });
};
for (var ix_1 in iobj) {
    _loop_25(ix_1);
}
