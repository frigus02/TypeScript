//// [tests/cases/compiler/unusedVariablesWithUnderscoreInForOfLoop.ts] ////

//// [unusedVariablesWithUnderscoreInForOfLoop.ts]
function t1() {
    for (const [_a, b] of [['key', 1]]) {
        console.log(b);
    }

    for (const [a, _b] of [['key', 1]]) {
        console.log(a);
    }

    for (const [_a, _b] of [['key', 1]]) {}
}


function t2() {
    for (const [_a, b] of [['key', 1]]) {}

    for (const [a, _b] of [['key', 1]]) {}

    for (const [a, b] of [['key', 1]]) {}
}

function t3() {
    for (const [[[_a, b]]] of [[[['key', 1]]]]) {}

    for (const [[[a, _b]]] of [[[['key', 1]]]]) {}

    for (const [[[a, b]]] of [[[['key', 1]]]]) {}
}


//// [unusedVariablesWithUnderscoreInForOfLoop.js]
function t1() {
    for (var _i = 0, _c = [['key', 1]]; _i < _c.length; _i++) {
        var _d = _c[_i], _a_1 = _d[0], b_1 = _d[1];
        console.log(b_1);
    }
    for (var _e = 0, _f = [['key', 1]]; _e < _f.length; _e++) {
        var _g = _f[_e], a_1 = _g[0], _b_1 = _g[1];
        console.log(a_1);
    }
    for (var _h = 0, _j = [['key', 1]]; _h < _j.length; _h++) {
        var _k = _j[_h], _a_2 = _k[0], _b_2 = _k[1];
    }
}
function t2() {
    for (var _i = 0, _c = [['key', 1]]; _i < _c.length; _i++) {
        var _d = _c[_i], _a_3 = _d[0], b_2 = _d[1];
    }
    for (var _e = 0, _f = [['key', 1]]; _e < _f.length; _e++) {
        var _g = _f[_e], a_2 = _g[0], _b_3 = _g[1];
    }
    for (var _h = 0, _j = [['key', 1]]; _h < _j.length; _h++) {
        var _k = _j[_h], a_3 = _k[0], b_3 = _k[1];
    }
}
function t3() {
    for (var _i = 0, _c = [[[['key', 1]]]]; _i < _c.length; _i++) {
        var _d = _c[_i][0][0], _a_4 = _d[0], b_4 = _d[1];
    }
    for (var _e = 0, _f = [[[['key', 1]]]]; _e < _f.length; _e++) {
        var _g = _f[_e][0][0], a_4 = _g[0], _b_4 = _g[1];
    }
    for (var _h = 0, _j = [[[['key', 1]]]]; _h < _j.length; _h++) {
        var _k = _j[_h][0][0], a_5 = _k[0], b_5 = _k[1];
    }
}
