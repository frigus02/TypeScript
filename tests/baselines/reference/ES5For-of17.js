//// [tests/cases/conformance/statements/for-ofStatements/ES5For-of17.ts] ////

//// [ES5For-of17.ts]
for (let v of []) {
    v;
    for (let v of [v]) {
        var x = v;
        v++;
    }
}

//// [ES5For-of17.js]
for (var _i = 0, _a = []; _i < _a.length; _i++) {
    var v_1 = _a[_i];
    v_1;
    for (var _b = 0, _c = [v_2]; _b < _c.length; _b++) {
        var v_2 = _c[_b];
        var x = v_2;
        v_2++;
    }
}
