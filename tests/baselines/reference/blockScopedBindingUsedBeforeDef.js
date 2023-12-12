//// [tests/cases/compiler/blockScopedBindingUsedBeforeDef.ts] ////

//// [blockScopedBindingUsedBeforeDef.ts]
// 1:
for (let {[a]: a} of [{ }]) continue;

// 2:
for (let {[a]: a} = { }; false; ) continue;

// 3:
let {[b]: b} = { };

//// [blockScopedBindingUsedBeforeDef.js]
// 1:
for (var _i = 0, _a = [{}]; _i < _a.length; _i++) {
    var _b = a_1, a_1 = _a[_i][_b];
    continue;
}
// 2:
for (var _c = {}, _d = a_2, a_2 = _c[_d]; false;)
    continue;
// 3:
var _e = {}, _f = b, b = _e[_f];
