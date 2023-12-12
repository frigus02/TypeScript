//// [tests/cases/compiler/narrowCommaOperatorNestedWithinLHS.ts] ////

//// [narrowCommaOperatorNestedWithinLHS.ts]
const otherValue = () => true;
const value: { inner: number | string } = null as any;

function isNumber(obj: any): obj is number {
    return true; // method implementation irrelevant
}

if (typeof (otherValue(), value).inner === 'number') {
    const a = value.inner; // number
    const b: number = (otherValue(), value).inner; // string | number , but should be number
}

if (isNumber((otherValue(), value).inner)) {
    const a = value.inner; // number
    const b: number = (otherValue(), value).inner; // string | number , but should be number
}

//// [narrowCommaOperatorNestedWithinLHS.js]
var otherValue = function () { return true; };
var value = null;
function isNumber(obj) {
    return true; // method implementation irrelevant
}
if (typeof (otherValue(), value).inner === 'number') {
    var a_1 = value.inner; // number
    var b_1 = (otherValue(), value).inner; // string | number , but should be number
}
if (isNumber((otherValue(), value).inner)) {
    var a_2 = value.inner; // number
    var b_2 = (otherValue(), value).inner; // string | number , but should be number
}
