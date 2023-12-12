//// [tests/cases/compiler/nestedBlockScopedBindings10.ts] ////

//// [nestedBlockScopedBindings10.ts]
{
    let x;
    x = 1;
}

switch (1) {
    case 1:
        let y;
        y = 1;
        break;
}

//// [nestedBlockScopedBindings10.js]
{
    var x_1;
    x_1 = 1;
}
switch (1) {
    case 1:
        var y_1;
        y_1 = 1;
        break;
}
