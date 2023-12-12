//// [tests/cases/conformance/types/stringLiteral/stringLiteralTypesInUnionTypes03.ts] ////

//// [stringLiteralTypesInUnionTypes03.ts]
type T = number | "foo" | "bar";

var x: "foo" | "bar" | number;
var y: T = undefined;

if (x === "foo") {
    let a = x;
}
else if (x !== "bar") {
    let b = x || y;
}
else {
    let c = x;
    let d = y;
    let e: (typeof x) | (typeof y) = c || d;
}

x = y;
y = x;

//// [stringLiteralTypesInUnionTypes03.js]
var x;
var y = undefined;
if (x === "foo") {
    var a_1 = x;
}
else if (x !== "bar") {
    var b_1 = x || y;
}
else {
    var c_1 = x;
    var d_1 = y;
    var e_1 = c_1 || d_1;
}
x = y;
y = x;


//// [stringLiteralTypesInUnionTypes03.d.ts]
type T = number | "foo" | "bar";
declare var x: "foo" | "bar" | number;
declare var y: T;
