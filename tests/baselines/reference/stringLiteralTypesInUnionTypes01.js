//// [tests/cases/conformance/types/stringLiteral/stringLiteralTypesInUnionTypes01.ts] ////

//// [stringLiteralTypesInUnionTypes01.ts]
type T = "foo" | "bar" | "baz";

var x: "foo" | "bar" | "baz" = undefined;
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

//// [stringLiteralTypesInUnionTypes01.js]
var x = undefined;
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


//// [stringLiteralTypesInUnionTypes01.d.ts]
type T = "foo" | "bar" | "baz";
declare var x: "foo" | "bar" | "baz";
declare var y: T;
