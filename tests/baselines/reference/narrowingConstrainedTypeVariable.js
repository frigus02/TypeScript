//// [tests/cases/conformance/types/typeRelationships/instanceOf/narrowingConstrainedTypeVariable.ts] ////

//// [narrowingConstrainedTypeVariable.ts]
// Repro from #20138

class C { }

function f1<T extends C>(v: T | string): void {
    if (v instanceof C) {
        const x: T = v;
    }
    else {
        const s: string = v;
    }
}

class D { }

function f2<T extends C, U extends D>(v: T | U) {
    if (v instanceof C) {
        const x: T = v;
    }
    else {
        const y: U = v;
    }
}

class E { x: string | undefined }

function f3<T extends E>(v: T | { x: string }) {
    if (v instanceof E) {
        const x: T = v;
    }
    else {
        const y: { x: string } = v;
    }
}


//// [narrowingConstrainedTypeVariable.js]
"use strict";
// Repro from #20138
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
function f1(v) {
    if (v instanceof C) {
        var x_1 = v;
    }
    else {
        var s_1 = v;
    }
}
var D = /** @class */ (function () {
    function D() {
    }
    return D;
}());
function f2(v) {
    if (v instanceof C) {
        var x_2 = v;
    }
    else {
        var y_1 = v;
    }
}
var E = /** @class */ (function () {
    function E() {
    }
    return E;
}());
function f3(v) {
    if (v instanceof E) {
        var x_3 = v;
    }
    else {
        var y_2 = v;
    }
}
