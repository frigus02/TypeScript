//// [tests/cases/compiler/blockScopedBindingsReassignedInLoop6.ts] ////

//// [blockScopedBindingsReassignedInLoop6.ts]
function f1() {
    for (let [x, y] = [1, 2]; x < y; ++x, --y) {
        let a = () => x++ + y++;
        if (x == 1)
            break;
        else if (y == 2)
            y = 5;
        else
            return;
    }
}

function f2() {
    for (let [{a: x, b: {c: y}}] = [{a: 1, b: {c: 2}}]; x < y; ++x, --y) {
        let a = () => x++ + y++;
        if (x == 1)
            break;
        else if (y == 2)
            y = 5;
        else
            return;
    }
}







//// [blockScopedBindingsReassignedInLoop6.js]
function f1() {
    var _loop_1 = function (x_1, y_1) {
        var a_1 = function () { return x_1++ + y_1++; };
        if (x_1 == 1)
            return out_x_1 = x_1, out_y_1 = y_1, "break";
        else if (y_1 == 2)
            y_1 = 5;
        else
            return { value: void 0 };
        out_x_1 = x_1;
        out_y_1 = y_1;
    };
    var out_x_1, out_y_1;
    for (var _a = [1, 2], x_1 = _a[0], y_1 = _a[1]; x_1 < y_1; ++x_1, --y_1) {
        var state_1 = _loop_1(x_1, y_1);
        x_1 = out_x_1;
        y_1 = out_y_1;
        if (typeof state_1 === "object")
            return state_1.value;
        if (state_1 === "break")
            break;
    }
}
function f2() {
    var _loop_2 = function (x_2, y_2) {
        var a_2 = function () { return x_2++ + y_2++; };
        if (x_2 == 1)
            return out_x_2 = x_2, out_y_2 = y_2, "break";
        else if (y_2 == 2)
            y_2 = 5;
        else
            return { value: void 0 };
        out_x_2 = x_2;
        out_y_2 = y_2;
    };
    var out_x_2, out_y_2;
    for (var _a = [{ a: 1, b: { c: 2 } }][0], x_2 = _a.a, y_2 = _a.b.c; x_2 < y_2; ++x_2, --y_2) {
        var state_2 = _loop_2(x_2, y_2);
        x_2 = out_x_2;
        y_2 = out_y_2;
        if (typeof state_2 === "object")
            return state_2.value;
        if (state_2 === "break")
            break;
    }
}
