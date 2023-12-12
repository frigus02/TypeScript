//// [tests/cases/conformance/statements/for-ofStatements/ES5For-of21.ts] ////

//// [ES5For-of21.ts]
for (let v of []) {
    for (let _i of []) { }
}

//// [ES5For-of21.js]
for (var _a = 0, _b = []; _a < _b.length; _a++) {
    var v_1 = _b[_a];
    for (var _c = 0, _d = []; _c < _d.length; _c++) {
        var _i_1 = _d[_c];
    }
}
