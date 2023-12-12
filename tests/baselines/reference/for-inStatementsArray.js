//// [tests/cases/conformance/statements/for-inStatements/for-inStatementsArray.ts] ////

//// [for-inStatementsArray.ts]
let a: Date[];
let b: boolean[];

for (let x in a) {
    let a1 = a[x];
    let a2 = a[(x)];
    let a3 = a[+x];
    let b1 = b[x];
    let b2 = b[(x)];
    let b3 = b[+x];
}

for (let x in a) {
    for (let y in a) {
        for (let z in a) {
            let a1 = a[x];
            let a2 = a[y];
            let a3 = a[z];
        }
    }
}

let i: string;
let j: string;
for (i in a) {
    for (j in b) {
        let a1 = a[i];
        let a2 = a[j];
    }
}

var s: string;
for (var s in a) {
    let a1 = a[s];
}
for (s in a) {
    let a1 = a[s];
}


//// [for-inStatementsArray.js]
var a;
var b;
for (var x_1 in a) {
    var a1_1 = a[x_1];
    var a2_1 = a[(x_1)];
    var a3_1 = a[+x_1];
    var b1_1 = b[x_1];
    var b2_1 = b[(x_1)];
    var b3_1 = b[+x_1];
}
for (var x_2 in a) {
    for (var y_1 in a) {
        for (var z_1 in a) {
            var a1_2 = a[x_2];
            var a2_2 = a[y_1];
            var a3_2 = a[z_1];
        }
    }
}
var i;
var j;
for (i in a) {
    for (j in b) {
        var a1_3 = a[i];
        var a2_3 = a[j];
    }
}
var s;
for (var s in a) {
    var a1_4 = a[s];
}
for (s in a) {
    var a1_5 = a[s];
}
