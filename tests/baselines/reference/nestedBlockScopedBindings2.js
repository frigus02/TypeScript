//// [tests/cases/compiler/nestedBlockScopedBindings2.ts] ////

//// [nestedBlockScopedBindings2.ts]
function a0() {
    {
        let x = 1;
        () => x;
    }
    {
        let x = 1;
    }
}

function a1() {
    {
        let x;
    }
    {
        let x = 1;
        () => x;
    }
}

function a2() {
    {
        let x = 1;
        () => x;
    }
    {
        let x;
        () => x;
    }
}


function a3() {
    {
        let x = 1;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}


function a4() {
    {
        let x;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}


function a5() {
    {
        let x;
        () => x;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}

function a6() {
    switch (1) {
        case 1:
            let x;
            break;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}

function a7() {
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
    switch (1) {
        case 1:
            let x;
            break;
    }
}

function a8() {
    switch (1) {
        case 1:
            let x;
            break;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}

function a9() {
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
    switch (1) {
        case 1:
            let x;
            () => x;
            break;
    }
}


//// [nestedBlockScopedBindings2.js]
function a0() {
    {
        var x_1 = 1;
        (function () { return x_1; });
    }
    {
        var x_2 = 1;
    }
}
function a1() {
    {
        var x_3;
    }
    {
        var x_4 = 1;
        (function () { return x_4; });
    }
}
function a2() {
    {
        var x_5 = 1;
        (function () { return x_5; });
    }
    {
        var x_6;
        (function () { return x_6; });
    }
}
function a3() {
    {
        var x_7 = 1;
        (function () { return x_7; });
    }
    switch (1) {
        case 1:
            var x_8;
            (function () { return x_8; });
            break;
    }
}
function a4() {
    {
        var x_9;
    }
    switch (1) {
        case 1:
            var x_10;
            (function () { return x_10; });
            break;
    }
}
function a5() {
    {
        var x_11;
        (function () { return x_11; });
    }
    switch (1) {
        case 1:
            var x_12;
            break;
    }
}
function a6() {
    switch (1) {
        case 1:
            var x_13;
            break;
    }
    switch (1) {
        case 1:
            var x_14;
            break;
    }
}
function a7() {
    switch (1) {
        case 1:
            var x_15;
            (function () { return x_15; });
            break;
    }
    switch (1) {
        case 1:
            var x_16;
            break;
    }
}
function a8() {
    switch (1) {
        case 1:
            var x_17;
            break;
    }
    switch (1) {
        case 1:
            var x_18;
            (function () { return x_18; });
            break;
    }
}
function a9() {
    switch (1) {
        case 1:
            var x_19;
            (function () { return x_19; });
            break;
    }
    switch (1) {
        case 1:
            var x_20;
            (function () { return x_20; });
            break;
    }
}
