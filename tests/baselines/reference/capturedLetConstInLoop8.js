//// [tests/cases/compiler/capturedLetConstInLoop8.ts] ////

//// [capturedLetConstInLoop8.ts]
function foo() {
    l0:
    for (let z = 0; z < 1; ++z) {
        l1:
        for (let x = 0; x < 1; ++x) {
            ll1:
            for (let y = 0; y < 1; ++y) {
                (function() { return x + y });
                (() => x + y);
                if (y == 1) {
                    break;
                }
                if (y == 1) {
                    break l1;
                }
                if (y == 1) {
                    break ll1;
                }
                if (y == 1) {
                    continue l0;
                }

                if (x == 2) {
                    continue;
                }
                if (x == 2) {
                    continue l1;
                }
                if (x == 2) {
                    continue ll1;
                }
                if (x == 2) {
                    return "123"
                }
                if (x == 3) {
                    return;
                }
            }
            if (x == 1) {
                break;
            }
            if (x == 1) {
                break l1;
            }
            if (x == 2) {
                continue;
            }
            if (x == 2) {
                continue l1;
            }
            if (x == 2) {
                continue l0;
            }
            if (x == 2) {
                return "456";
            }
            if (x == 3) {
                return;
            }
        }
    }
}

function foo_c() {
    l0:
    for (const z = 0; z < 1;) {
        l1:
        for (const x = 0; x < 1;) {
            ll1:
            for (const y = 0; y < 1;) {
                (function() { return x + y });
                (() => x + y);
                if (y == 1) {
                    break;
                }
                if (y == 1) {
                    break l1;
                }
                if (y == 1) {
                    break ll1;
                }
                if (y == 1) {
                    continue l0;
                }

                if (x == 2) {
                    continue;
                }
                if (x == 2) {
                    continue l1;
                }
                if (x == 2) {
                    continue ll1;
                }
                if (x == 2) {
                    return "123"
                }
                if (x == 3) {
                    return;
                }
            }
            if (x == 1) {
                break;
            }
            if (x == 1) {
                break l1;
            }
            if (x == 2) {
                continue;
            }
            if (x == 2) {
                continue l1;
            }
            if (x == 2) {
                continue l0;
            }
            if (x == 2) {
                return "456";
            }
            if (x == 3) {
                return;
            }
        }
    }
}


//// [capturedLetConstInLoop8.js]
function foo() {
    l0: for (var z_1 = 0; z_1 < 1; ++z_1) {
        var _loop_1 = function (x_1) {
            var _loop_2 = function (y_1) {
                (function () { return x_1 + y_1; });
                (function () { return x_1 + y_1; });
                if (y_1 == 1) {
                    return "break";
                }
                if (y_1 == 1) {
                    return "break-l1";
                }
                if (y_1 == 1) {
                    return "break-ll1";
                }
                if (y_1 == 1) {
                    return "continue-l0";
                }
                if (x_1 == 2) {
                    return "continue";
                }
                if (x_1 == 2) {
                    return "continue-l1";
                }
                if (x_1 == 2) {
                    return "continue-ll1";
                }
                if (x_1 == 2) {
                    return { value: "123" };
                }
                if (x_1 == 3) {
                    return { value: void 0 };
                }
            };
            ll1: for (var y_1 = 0; y_1 < 1; ++y_1) {
                var state_2 = _loop_2(y_1);
                if (typeof state_2 === "object")
                    return state_2;
                if (state_2 === "break")
                    break;
                switch (state_2) {
                    case "break-l1": return state_2;
                    case "break-ll1": break ll1;
                    case "continue-l0": return state_2;
                    case "continue-l1": return state_2;
                    case "continue-ll1": continue ll1;
                }
            }
            if (x_1 == 1) {
                return "break";
            }
            if (x_1 == 1) {
                return "break-l1";
            }
            if (x_1 == 2) {
                return "continue";
            }
            if (x_1 == 2) {
                return "continue-l1";
            }
            if (x_1 == 2) {
                return "continue-l0";
            }
            if (x_1 == 2) {
                return { value: "456" };
            }
            if (x_1 == 3) {
                return { value: void 0 };
            }
        };
        l1: for (var x_1 = 0; x_1 < 1; ++x_1) {
            var state_1 = _loop_1(x_1);
            if (typeof state_1 === "object")
                return state_1.value;
            if (state_1 === "break")
                break;
            switch (state_1) {
                case "break-l1": break l1;
                case "continue-l0": continue l0;
                case "continue-l1": continue l1;
            }
        }
    }
}
function foo_c() {
    l0: for (var z_2 = 0; z_2 < 1;) {
        var _loop_3 = function (x_2) {
            var _loop_4 = function (y_2) {
                (function () { return x_2 + y_2; });
                (function () { return x_2 + y_2; });
                if (y_2 == 1) {
                    return "break";
                }
                if (y_2 == 1) {
                    return "break-l1";
                }
                if (y_2 == 1) {
                    return "break-ll1";
                }
                if (y_2 == 1) {
                    return "continue-l0";
                }
                if (x_2 == 2) {
                    return "continue";
                }
                if (x_2 == 2) {
                    return "continue-l1";
                }
                if (x_2 == 2) {
                    return "continue-ll1";
                }
                if (x_2 == 2) {
                    return { value: "123" };
                }
                if (x_2 == 3) {
                    return { value: void 0 };
                }
            };
            ll1: for (var y_2 = 0; y_2 < 1;) {
                var state_4 = _loop_4(y_2);
                if (typeof state_4 === "object")
                    return state_4;
                if (state_4 === "break")
                    break;
                switch (state_4) {
                    case "break-l1": return state_4;
                    case "break-ll1": break ll1;
                    case "continue-l0": return state_4;
                    case "continue-l1": return state_4;
                    case "continue-ll1": continue ll1;
                }
            }
            if (x_2 == 1) {
                return "break";
            }
            if (x_2 == 1) {
                return "break-l1";
            }
            if (x_2 == 2) {
                return "continue";
            }
            if (x_2 == 2) {
                return "continue-l1";
            }
            if (x_2 == 2) {
                return "continue-l0";
            }
            if (x_2 == 2) {
                return { value: "456" };
            }
            if (x_2 == 3) {
                return { value: void 0 };
            }
        };
        l1: for (var x_2 = 0; x_2 < 1;) {
            var state_3 = _loop_3(x_2);
            if (typeof state_3 === "object")
                return state_3.value;
            if (state_3 === "break")
                break;
            switch (state_3) {
                case "break-l1": break l1;
                case "continue-l0": continue l0;
                case "continue-l1": continue l1;
            }
        }
    }
}
