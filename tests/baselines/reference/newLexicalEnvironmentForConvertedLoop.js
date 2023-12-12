//// [tests/cases/compiler/newLexicalEnvironmentForConvertedLoop.ts] ////

//// [newLexicalEnvironmentForConvertedLoop.ts]
function baz(x: any) {
  return [[x, x]];
}

function foo(set: any) {
  for (const [value, i] of baz(set.values)) {
    const bar: any = [];
    (() => bar);

    set.values.push(...[]);
  }
};

//// [newLexicalEnvironmentForConvertedLoop.js]
function baz(x) {
    return [[x, x]];
}
function foo(set) {
    var _loop_1 = function (value_1, i_1) {
        var _c;
        var bar_1 = [];
        (function () { return bar_1; });
        (_c = set.values).push.apply(_c, []);
    };
    for (var _i = 0, _a = baz(set.values); _i < _a.length; _i++) {
        var _b = _a[_i], value_1 = _b[0], i_1 = _b[1];
        _loop_1(value_1, i_1);
    }
}
;
