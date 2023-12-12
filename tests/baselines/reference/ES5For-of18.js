//// [tests/cases/conformance/statements/for-ofStatements/ES5For-of18.ts] ////

//// [ES5For-of18.ts]
for (let v of []) {
    v;
}
for (let v of []) {
    v;
}


//// [ES5For-of18.js]
for (var _i = 0, _a = []; _i < _a.length; _i++) {
    var v_1 = _a[_i];
    v_1;
}
for (var _b = 0, _c = []; _b < _c.length; _b++) {
    var v_2 = _c[_b];
    v_2;
}
