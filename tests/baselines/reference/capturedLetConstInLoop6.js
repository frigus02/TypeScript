//// [tests/cases/compiler/capturedLetConstInLoop6.ts] ////

//// [capturedLetConstInLoop6.ts]
// ====let
for (let x of []) {
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

for (let x in []) {
    (function() { return x});
    (() => x);
    if (x == "1") {
        break;
    }
    if (x == "2") {
        continue;
    }
}


for (let x = 0; x < 1; ++x) {
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

while (1 === 1) {
    let x;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

do {
    let x;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

for (let x = 0, y = 1; x < 1; ++x) {
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

while (1 === 1) {
    let x, y;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

do {
    let x, y;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
} while (1 === 1)

for (let y = 0; y < 1; ++y) {
    let x = 1;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

// ====const

for (const x of []) {
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

for (const x in []) {
    (function() { return x});
    (() => x);
    if (x == "1") {
        break;
    }
    if (x == "2") {
        continue;
    }
}


for (const x = 0; x < 1;) {
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

while (1 === 1) {
    const x = 1;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

do {
    const x = 1;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    (function() { return x});
    (() => x);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

for (const x = 0, y = 1; x < 1;) {
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

while (1 === 1) {
    const x = 1, y = 1;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}

do {
    const x = 1, y = 1;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
} while (1 === 1)

for (const y = 0; y < 1;) {
    const x = 1;
    (function() { return x + y});
    (() => x + y);
    if (x == 1) {
        break;
    }
    if (x == 2) {
        continue;
    }
}



//// [capturedLetConstInLoop6.js]
var _loop_1 = function (x_1) {
    (function () { return x_1; });
    (function () { return x_1; });
    if (x_1 == 1) {
        return "break";
    }
    if (x_1 == 2) {
        return "continue";
    }
};
// ====let
for (var _i = 0, _a = []; _i < _a.length; _i++) {
    var x_1 = _a[_i];
    var state_1 = _loop_1(x_1);
    if (state_1 === "break")
        break;
}
var _loop_2 = function (x_2) {
    (function () { return x_2; });
    (function () { return x_2; });
    if (x_2 == "1") {
        return "break";
    }
    if (x_2 == "2") {
        return "continue";
    }
};
for (var x_2 in []) {
    var state_2 = _loop_2(x_2);
    if (state_2 === "break")
        break;
}
var _loop_3 = function (x_3) {
    (function () { return x_3; });
    (function () { return x_3; });
    if (x_3 == 1) {
        return "break";
    }
    if (x_3 == 2) {
        return "continue";
    }
};
for (var x_3 = 0; x_3 < 1; ++x_3) {
    var state_3 = _loop_3(x_3);
    if (state_3 === "break")
        break;
}
var _loop_4 = function () {
    var x_4;
    (function () { return x_4; });
    (function () { return x_4; });
    if (x_4 == 1) {
        return "break";
    }
    if (x_4 == 2) {
        return "continue";
    }
};
while (1 === 1) {
    var state_4 = _loop_4();
    if (state_4 === "break")
        break;
}
var _loop_5 = function () {
    var x_5;
    (function () { return x_5; });
    (function () { return x_5; });
    if (x_5 == 1) {
        return "break";
    }
    if (x_5 == 2) {
        return "continue";
    }
};
do {
    var state_5 = _loop_5();
    if (state_5 === "break")
        break;
} while (1 === 1);
var _loop_6 = function (y_1) {
    var x_6 = 1;
    (function () { return x_6; });
    (function () { return x_6; });
    if (x_6 == 1) {
        return "break";
    }
    if (x_6 == 2) {
        return "continue";
    }
};
for (var y_1 = 0; y_1 < 1; ++y_1) {
    var state_6 = _loop_6(y_1);
    if (state_6 === "break")
        break;
}
var _loop_7 = function (x_7, y_2) {
    (function () { return x_7 + y_2; });
    (function () { return x_7 + y_2; });
    if (x_7 == 1) {
        return "break";
    }
    if (x_7 == 2) {
        return "continue";
    }
};
for (var x_7 = 0, y_2 = 1; x_7 < 1; ++x_7) {
    var state_7 = _loop_7(x_7, y_2);
    if (state_7 === "break")
        break;
}
var _loop_8 = function () {
    var x_8, y_3;
    (function () { return x_8 + y_3; });
    (function () { return x_8 + y_3; });
    if (x_8 == 1) {
        return "break";
    }
    if (x_8 == 2) {
        return "continue";
    }
};
while (1 === 1) {
    var state_8 = _loop_8();
    if (state_8 === "break")
        break;
}
var _loop_9 = function () {
    var x_9, y_4;
    (function () { return x_9 + y_4; });
    (function () { return x_9 + y_4; });
    if (x_9 == 1) {
        return "break";
    }
    if (x_9 == 2) {
        return "continue";
    }
};
do {
    var state_9 = _loop_9();
    if (state_9 === "break")
        break;
} while (1 === 1);
var _loop_10 = function (y_5) {
    var x_10 = 1;
    (function () { return x_10 + y_5; });
    (function () { return x_10 + y_5; });
    if (x_10 == 1) {
        return "break";
    }
    if (x_10 == 2) {
        return "continue";
    }
};
for (var y_5 = 0; y_5 < 1; ++y_5) {
    var state_10 = _loop_10(y_5);
    if (state_10 === "break")
        break;
}
var _loop_11 = function (x_11) {
    (function () { return x_11; });
    (function () { return x_11; });
    if (x_11 == 1) {
        return "break";
    }
    if (x_11 == 2) {
        return "continue";
    }
};
// ====const
for (var _b = 0, _c = []; _b < _c.length; _b++) {
    var x_11 = _c[_b];
    var state_11 = _loop_11(x_11);
    if (state_11 === "break")
        break;
}
var _loop_12 = function (x_12) {
    (function () { return x_12; });
    (function () { return x_12; });
    if (x_12 == "1") {
        return "break";
    }
    if (x_12 == "2") {
        return "continue";
    }
};
for (var x_12 in []) {
    var state_12 = _loop_12(x_12);
    if (state_12 === "break")
        break;
}
var _loop_13 = function (x_13) {
    (function () { return x_13; });
    (function () { return x_13; });
    if (x_13 == 1) {
        return "break";
    }
    if (x_13 == 2) {
        return "continue";
    }
};
for (var x_13 = 0; x_13 < 1;) {
    var state_13 = _loop_13(x_13);
    if (state_13 === "break")
        break;
}
var _loop_14 = function () {
    var x_14 = 1;
    (function () { return x_14; });
    (function () { return x_14; });
    if (x_14 == 1) {
        return "break";
    }
    if (x_14 == 2) {
        return "continue";
    }
};
while (1 === 1) {
    var state_14 = _loop_14();
    if (state_14 === "break")
        break;
}
var _loop_15 = function () {
    var x_15 = 1;
    (function () { return x_15; });
    (function () { return x_15; });
    if (x_15 == 1) {
        return "break";
    }
    if (x_15 == 2) {
        return "continue";
    }
};
do {
    var state_15 = _loop_15();
    if (state_15 === "break")
        break;
} while (1 === 1);
var _loop_16 = function (y_6) {
    var x_16 = 1;
    (function () { return x_16; });
    (function () { return x_16; });
    if (x_16 == 1) {
        return "break";
    }
    if (x_16 == 2) {
        return "continue";
    }
};
for (var y_6 = 0; y_6 < 1;) {
    var state_16 = _loop_16(y_6);
    if (state_16 === "break")
        break;
}
var _loop_17 = function (x_17, y_7) {
    (function () { return x_17 + y_7; });
    (function () { return x_17 + y_7; });
    if (x_17 == 1) {
        return "break";
    }
    if (x_17 == 2) {
        return "continue";
    }
};
for (var x_17 = 0, y_7 = 1; x_17 < 1;) {
    var state_17 = _loop_17(x_17, y_7);
    if (state_17 === "break")
        break;
}
var _loop_18 = function () {
    var x_18 = 1, y_8 = 1;
    (function () { return x_18 + y_8; });
    (function () { return x_18 + y_8; });
    if (x_18 == 1) {
        return "break";
    }
    if (x_18 == 2) {
        return "continue";
    }
};
while (1 === 1) {
    var state_18 = _loop_18();
    if (state_18 === "break")
        break;
}
var _loop_19 = function () {
    var x_19 = 1, y_9 = 1;
    (function () { return x_19 + y_9; });
    (function () { return x_19 + y_9; });
    if (x_19 == 1) {
        return "break";
    }
    if (x_19 == 2) {
        return "continue";
    }
};
do {
    var state_19 = _loop_19();
    if (state_19 === "break")
        break;
} while (1 === 1);
var _loop_20 = function (y_10) {
    var x_20 = 1;
    (function () { return x_20 + y_10; });
    (function () { return x_20 + y_10; });
    if (x_20 == 1) {
        return "break";
    }
    if (x_20 == 2) {
        return "continue";
    }
};
for (var y_10 = 0; y_10 < 1;) {
    var state_20 = _loop_20(y_10);
    if (state_20 === "break")
        break;
}
