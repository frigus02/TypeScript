//// [tests/cases/conformance/statements/for-ofStatements/ES5For-of13.ts] ////

//// [ES5For-of13.ts]
for (let v of ['a', 'b', 'c']) {
    var x = v;
}

//// [ES5For-of13.js]
for (var _i = 0, _a = ['a', 'b', 'c']; _i < _a.length; _i++) {
    var v_1 = _a[_i];
    var x = v_1;
}
//# sourceMappingURL=ES5For-of13.js.map