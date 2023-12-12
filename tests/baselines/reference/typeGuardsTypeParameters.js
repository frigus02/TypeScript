//// [tests/cases/conformance/controlFlow/typeGuardsTypeParameters.ts] ////

//// [typeGuardsTypeParameters.ts]
// Type guards involving type parameters produce intersection types

class C {
    prop: string;
}

function f1<T>(x: T) {
    if (x instanceof C) {
        let v1: T = x;
        let v2: C = x;
        x.prop;
    }
}

function f2<T>(x: T) {
    if (typeof x === "string") {
        let v1: T = x;
        let v2: string = x;
        x.length;
    }
}

// Repro from #13872

function fun<T>(item: { [P in keyof T]: T[P] }) {
    const strings: string[] = [];
    for (const key in item) {
        const value = item[key];
        if (typeof value === "string") {
            strings.push(value);
        }
    }
}


//// [typeGuardsTypeParameters.js]
// Type guards involving type parameters produce intersection types
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
function f1(x) {
    if (x instanceof C) {
        var v1_1 = x;
        var v2_1 = x;
        x.prop;
    }
}
function f2(x) {
    if (typeof x === "string") {
        var v1_2 = x;
        var v2_2 = x;
        x.length;
    }
}
// Repro from #13872
function fun(item) {
    var strings = [];
    for (var key_1 in item) {
        var value_1 = item[key_1];
        if (typeof value_1 === "string") {
            strings.push(value_1);
        }
    }
}
