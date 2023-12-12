//// [tests/cases/compiler/blockScopedBindingsReassignedInLoop3.ts] ////

//// [blockScopedBindingsReassignedInLoop3.ts]
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break;
            }
            else {
                y++;
            }
        }
        
        y = 5;
    }
}


for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue;
    }
    else {
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue;
            }
            else {
                y++;
            }
        }
        
        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        break loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                break loop1;
            }
            else {
                y++;
                break loop2
            }
        }
        
        y = 5;
    }
}

loop2:
for (let x = 1, y = 2; x < y; ++x, --y) {
    let a = () => x++ + y++;
    if (x == 1) {
        continue loop2;
    }
    else {
        loop1:
        for (let a = 1; a < 5; --a) {
            let f = () => a;
            if (a) {
                a = x;
                continue loop1;
            }
            else {
                y++;
                continue loop2
            }
        }
        
        y = 5;
    }
}


//// [blockScopedBindingsReassignedInLoop3.js]
var _loop_1 = function (x_1, y_1) {
    var a_1 = function () { return x_1++ + y_1++; };
    if (x_1 == 1) {
        return out_x_1 = x_1, out_y_1 = y_1, "break";
    }
    else {
        var _loop_5 = function (a_2) {
            var f_1 = function () { return a_2; };
            if (a_2) {
                a_2 = x_1;
                return out_a_1 = a_2, "break";
            }
            else {
                y_1++;
            }
            out_a_1 = a_2;
        };
        var out_a_1;
        for (var a_2 = 1; a_2 < 5; --a_2) {
            var state_4 = _loop_5(a_2);
            a_2 = out_a_1;
            if (state_4 === "break")
                break;
        }
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
    var a_3 = function () { return x_2++ + y_2++; };
    if (x_2 == 1) {
        return out_x_2 = x_2, out_y_2 = y_2, "continue";
    }
    else {
        var _loop_6 = function (a_4) {
            var f_2 = function () { return a_4; };
            if (a_4) {
                a_4 = x_2;
                return out_a_2 = a_4, "continue";
            }
            else {
                y_2++;
            }
            out_a_2 = a_4;
        };
        var out_a_2;
        for (var a_4 = 1; a_4 < 5; --a_4) {
            _loop_6(a_4);
            a_4 = out_a_2;
        }
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
    var a_5 = function () { return x_3++ + y_3++; };
    if (x_3 == 1) {
        return out_x_3 = x_3, out_y_3 = y_3, "break-loop2";
    }
    else {
        var _loop_7 = function (a_6) {
            var f_3 = function () { return a_6; };
            if (a_6) {
                a_6 = x_3;
                return out_a_3 = a_6, "break-loop1";
            }
            else {
                y_3++;
                return out_a_3 = a_6, "break-loop2";
            }
            out_a_3 = a_6;
        };
        var out_a_3;
        loop1: for (var a_6 = 1; a_6 < 5; --a_6) {
            var state_5 = _loop_7(a_6);
            a_6 = out_a_3;
            switch (state_5) {
                case "break-loop1": break loop1;
                case "break-loop2": return state_5;
            }
        }
        y_3 = 5;
    }
    out_x_3 = x_3;
    out_y_3 = y_3;
};
var out_x_3, out_y_3;
loop2: for (var x_3 = 1, y_3 = 2; x_3 < y_3; ++x_3, --y_3) {
    var state_2 = _loop_3(x_3, y_3);
    x_3 = out_x_3;
    y_3 = out_y_3;
    switch (state_2) {
        case "break-loop2": break loop2;
    }
}
var _loop_4 = function (x_4, y_4) {
    var a_7 = function () { return x_4++ + y_4++; };
    if (x_4 == 1) {
        return out_x_4 = x_4, out_y_4 = y_4, "continue-loop2";
    }
    else {
        var _loop_8 = function (a_8) {
            var f_4 = function () { return a_8; };
            if (a_8) {
                a_8 = x_4;
                return out_a_4 = a_8, "continue-loop1";
            }
            else {
                y_4++;
                return out_a_4 = a_8, "continue-loop2";
            }
            out_a_4 = a_8;
        };
        var out_a_4;
        loop1: for (var a_8 = 1; a_8 < 5; --a_8) {
            var state_6 = _loop_8(a_8);
            a_8 = out_a_4;
            switch (state_6) {
                case "continue-loop1": continue loop1;
                case "continue-loop2": return state_6;
            }
        }
        y_4 = 5;
    }
    out_x_4 = x_4;
    out_y_4 = y_4;
};
var out_x_4, out_y_4;
loop2: for (var x_4 = 1, y_4 = 2; x_4 < y_4; ++x_4, --y_4) {
    var state_3 = _loop_4(x_4, y_4);
    x_4 = out_x_4;
    y_4 = out_y_4;
    switch (state_3) {
        case "continue-loop2": continue loop2;
    }
}
