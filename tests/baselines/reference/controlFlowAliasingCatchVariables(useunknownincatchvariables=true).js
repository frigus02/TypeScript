//// [tests/cases/conformance/controlFlow/controlFlowAliasingCatchVariables.ts] ////

//// [controlFlowAliasingCatchVariables.ts]
try {}
catch (e) {
    const isString = typeof e === 'string';
    if (isString) {
        e.toUpperCase(); // e string
    }

    if (typeof e === 'string') {
        e.toUpperCase(); // e string
    }
}

try {}
catch (e) {
    const isString = typeof e === 'string';

    e = 1;

    if (isString) {
        e.toUpperCase(); // e any/unknown
    }

    if (typeof e === 'string') {
        e.toUpperCase(); // e string
    }
}


//// [controlFlowAliasingCatchVariables.js]
try { }
catch (e) {
    var isString_1 = typeof e === 'string';
    if (isString_1) {
        e.toUpperCase(); // e string
    }
    if (typeof e === 'string') {
        e.toUpperCase(); // e string
    }
}
try { }
catch (e) {
    var isString_2 = typeof e === 'string';
    e = 1;
    if (isString_2) {
        e.toUpperCase(); // e any/unknown
    }
    if (typeof e === 'string') {
        e.toUpperCase(); // e string
    }
}
