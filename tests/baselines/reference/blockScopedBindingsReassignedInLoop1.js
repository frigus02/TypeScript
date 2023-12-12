//// [tests/cases/compiler/blockScopedBindingsReassignedInLoop1.ts] ////

//// [blockScopedBindingsReassignedInLoop1.ts]
declare function use(n: number): void;
(function () {
  'use strict'
  for (let i = 0; i < 9; ++i) {
    (() => use(++i))();
  }
})();

//// [blockScopedBindingsReassignedInLoop1.js]
(function () {
    'use strict';
    var _loop_1 = function (i_1) {
        (function () { return use(++i_1); })();
        out_i_1 = i_1;
    };
    var out_i_1;
    for (var i_1 = 0; i_1 < 9; ++i_1) {
        _loop_1(i_1);
        i_1 = out_i_1;
    }
})();
