//// [tests/cases/compiler/blockScopedBindingsReassignedInLoop2.ts] ////

//// [blockScopedBindingsReassignedInLoop2.ts]
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break;
    }
    else {
        y = 5;
    }
}

for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue;
    }
    else {
        y = 5;
    }
}

loop:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break loop;
    }
    else {
        y = 5;
    }
}

loop:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue loop;
    }
    else {
        y = 5;
    }
}

//// [blockScopedBindingsReassignedInLoop2.js]
var _loop_1 = function (x_1, y_1) {
    var a_1 = function () { return x_1++ + y_1++; };
    if (x_1 == 1) {
        return out_x_1 = x_1, out_y_1 = y_1, "break";
    }
    else {
        y_1 = 5;
    }
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
var _loop_2 = function (x_2, y_2) {
    var a_2 = function () { return x_2++ + y_2++; };
    if (x_2 == 1) {
        return out_x_2 = x_2, out_y_2 = y_2, "continue";
    }
    else {
        y_2 = 5;
    }
    out_x_2 = x_2;
    out_y_2 = y_2;
};
var out_x_2, out_y_2;
for (var x_2 = 1, y_2 = 2; x_2 < y_2; ++x_2, --y_2) {
    _loop_2(x_2, y_2);
    x_2 = out_x_2;
    y_2 = out_y_2;
}
var _loop_3 = function (x_3, y_3) {
    var a_3 = function () { return x_3++ + y_3++; };
    if (x_3 == 1) {
        return out_x_3 = x_3, out_y_3 = y_3, "break-loop";
    }
    else {
        y_3 = 5;
    }
    out_x_3 = x_3;
    out_y_3 = y_3;
};
var out_x_3, out_y_3;
loop: for (var x_3 = 1, y_3 = 2; x_3 < y_3; ++x_3, --y_3) {
    var state_2 = _loop_3(x_3, y_3);
    x_3 = out_x_3;
    y_3 = out_y_3;
    switch (state_2) {
        case "break-loop": break loop;
    }
}
var _loop_4 = function (x_4, y_4) {
    var a_4 = function () { return x_4++ + y_4++; };
    if (x_4 == 1) {
        return out_x_4 = x_4, out_y_4 = y_4, "continue-loop";
    }
    else {
        y_4 = 5;
    }
    out_x_4 = x_4;
    out_y_4 = y_4;
};
var out_x_4, out_y_4;
loop: for (var x_4 = 1, y_4 = 2; x_4 < y_4; ++x_4, --y_4) {
    var state_3 = _loop_4(x_4, y_4);
    x_4 = out_x_4;
    y_4 = out_y_4;
    switch (state_3) {
        case "continue-loop": continue loop;
    }
}
