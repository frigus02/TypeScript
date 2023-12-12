//// [tests/cases/compiler/unusedSwitchStatement.ts] ////

//// [unusedSwitchStatement.ts]
switch (1) {
    case 0:
        let x;
        break;
    case 1:
        const c = 1;
        break;
    default:
        let z = 2;
}


switch (2) {
    case 0:
        let x;
    case 1:
        x=1;
}

//// [unusedSwitchStatement.js]
switch (1) {
    case 0:
        var x_1;
        break;
    case 1:
        var c_1 = 1;
        break;
    default:
        var z_1 = 2;
}
switch (2) {
    case 0:
        var x_2;
    case 1:
        x_2 = 1;
}
