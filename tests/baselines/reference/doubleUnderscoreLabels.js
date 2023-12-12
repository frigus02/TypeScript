//// [tests/cases/compiler/doubleUnderscoreLabels.ts] ////

//// [doubleUnderscoreLabels.ts]
function doThing() {
    __call: while (true) {
        aLabel: for (let i = 0; i < 10; i++) {
            if (i === 3) {
                break __call;
            }
            if (i === 5) {
                break aLabel;
            }
        }
    }
}
doThing();

//// [doubleUnderscoreLabels.js]
function doThing() {
    __call: while (true) {
        aLabel: for (var i_1 = 0; i_1 < 10; i_1++) {
            if (i_1 === 3) {
                break __call;
            }
            if (i_1 === 5) {
                break aLabel;
            }
        }
    }
}
doThing();
