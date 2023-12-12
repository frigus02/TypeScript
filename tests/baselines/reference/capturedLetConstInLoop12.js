//// [tests/cases/compiler/capturedLetConstInLoop12.ts] ////

//// [capturedLetConstInLoop12.ts]
(function() {
    "use strict";

    for (let i = 0; i < 4; i++) {
        (() => [i] = [i + 1])();
    }
})();

(function() {
    "use strict";

    for (let i = 0; i < 4; i++) {
        (() => ({a:i} = {a:i + 1}))();
    }
})();

//// [capturedLetConstInLoop12.js]
(function () {
    "use strict";
    var _loop_1 = function (i_1) {
        (function () {
            var _a;
            return _a = [i_1 + 1], i_1 = _a[0], _a;
        })();
        out_i_1 = i_1;
    };
    var out_i_1;
    for (var i_1 = 0; i_1 < 4; i_1++) {
        _loop_1(i_1);
        i_1 = out_i_1;
    }
})();
(function () {
    "use strict";
    var _loop_2 = function (i_2) {
        (function () {
            var _a;
            return (_a = { a: i_2 + 1 }, i_2 = _a.a, _a);
        })();
        out_i_2 = i_2;
    };
    var out_i_2;
    for (var i_2 = 0; i_2 < 4; i_2++) {
        _loop_2(i_2);
        i_2 = out_i_2;
    }
})();
