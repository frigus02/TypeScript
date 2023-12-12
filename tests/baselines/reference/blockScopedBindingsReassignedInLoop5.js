//// [tests/cases/compiler/blockScopedBindingsReassignedInLoop5.ts] ////

//// [blockScopedBindingsReassignedInLoop5.ts]
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) 
        break;
    else 
        y = 5;
}


//// [blockScopedBindingsReassignedInLoop5.js]
var _loop_1 = function (x_1, y_1) {
    var a_1 = function () { return x_1++ + y_1++; };
    if (x_1 == 1)
        return out_x_1 = x_1, out_y_1 = y_1, "break";
    else
        y_1 = 5;
    out_x_1 = x_1;
    out_y_1 = y_1;
};
var out_x_1, out_y_1;
for (var x_1 = 1, y_1 = 2; x_1 < y_1; ++x_1, --y_1) {
    var state_1 = _loop_1(x_1, y_1);
    x_1 = out_x_1;
    y_1 = out_y_1;
    if (state_1 === "break")
        break;
}
