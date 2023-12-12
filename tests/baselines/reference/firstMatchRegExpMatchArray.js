//// [tests/cases/compiler/firstMatchRegExpMatchArray.ts] ////

//// [firstMatchRegExpMatchArray.ts]
const match = ''.match(/ /)

if (match !== null) {
    const foo: string = match[0]
    const bar: string = match[1]
}


//// [firstMatchRegExpMatchArray.js]
"use strict";
var match = ''.match(/ /);
if (match !== null) {
    var foo_1 = match[0];
    var bar_1 = match[1];
}
