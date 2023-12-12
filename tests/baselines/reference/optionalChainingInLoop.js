//// [tests/cases/conformance/expressions/optionalChaining/optionalChainingInLoop.ts] ////

//// [optionalChainingInLoop.ts]
// https://github.com/microsoft/TypeScript/issues/40643
const list: any[] = []
for (const comp of list) {
    comp.sp.y = comp.sp.r.find((k: any) => k.c == (comp.xp ? '1' : '0'))
    for (const item of comp.c) {
        item.v = !!item.t?.length
    }
}

//// [optionalChainingInLoop.js]
var _a;
// https://github.com/microsoft/TypeScript/issues/40643
var list = [];
var _loop_1 = function (comp_1) {
    comp_1.sp.y = comp_1.sp.r.find(function (k) { return k.c == (comp_1.xp ? '1' : '0'); });
    for (var _b = 0, _c = comp_1.c; _b < _c.length; _b++) {
        var item_1 = _c[_b];
        item_1.v = !!((_a = item_1.t) === null || _a === void 0 ? void 0 : _a.length);
    }
};
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var comp_1 = list_1[_i];
    _loop_1(comp_1);
}
