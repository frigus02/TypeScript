//// [tests/cases/conformance/types/keyof/keyofAndForIn.ts] ////

//// [keyofAndForIn.ts]
// Repro from #12513

function f1<K extends string, T>(obj: { [P in K]: T }, k: K) {
    const b = k in obj;
    let k1: K;
    for (k1 in obj) {
        let x1 = obj[k1];
    }
    for (let k2 in obj) {
        let x2 = obj[k2];
    }
}

function f2<T>(obj: { [P in keyof T]: T[P] }, k: keyof T) {
    const b = k in obj;
    let k1: keyof T;
    for (k1 in obj) {
        let x1 = obj[k1];
    }
    for (let k2 in obj) {
        let x2 = obj[k2];
    }
}

function f3<T, K extends keyof T>(obj: { [P in K]: T[P] }, k: K) {
    const b = k in obj;
    let k1: K;
    for (k1 in obj) {
        let x1 = obj[k1];
    }
    for (let k2 in obj) {
        let x2 = obj[k2];
    }
}

//// [keyofAndForIn.js]
// Repro from #12513
function f1(obj, k) {
    var b = k in obj;
    var k1;
    for (k1 in obj) {
        var x1_1 = obj[k1];
    }
    for (var k2_1 in obj) {
        var x2_1 = obj[k2_1];
    }
}
function f2(obj, k) {
    var b = k in obj;
    var k1;
    for (k1 in obj) {
        var x1_2 = obj[k1];
    }
    for (var k2_2 in obj) {
        var x2_2 = obj[k2_2];
    }
}
function f3(obj, k) {
    var b = k in obj;
    var k1;
    for (k1 in obj) {
        var x1_3 = obj[k1];
    }
    for (var k2_3 in obj) {
        var x2_3 = obj[k2_3];
    }
}


//// [keyofAndForIn.d.ts]
declare function f1<K extends string, T>(obj: {
    [P in K]: T;
}, k: K): void;
declare function f2<T>(obj: {
    [P in keyof T]: T[P];
}, k: keyof T): void;
declare function f3<T, K extends keyof T>(obj: {
    [P in K]: T[P];
}, k: K): void;
