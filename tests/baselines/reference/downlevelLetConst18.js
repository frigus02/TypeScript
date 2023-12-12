//// [tests/cases/compiler/downlevelLetConst18.ts] ////

//// [downlevelLetConst18.ts]
'use strict'

for (let x; ;) {
    function foo() { x };
}

for (let x; ;) {
    function foo1() { x };
}

for (let x; ;) {
    (() => { x })();
}

for (const x = 1; ;) {
    (() => { x })();
}

for (let x; ;) {
    ({ foo() { x }})
}

for (let x; ;) {
    ({ get foo() { return x } })
}

for (let x; ;) {
    ({ set foo(v) { x } })
}


//// [downlevelLetConst18.js]
'use strict';
var _loop_1 = function (x_1) {
    function foo() { x_1; }
    ;
};
for (var x_1;;) {
    _loop_1(x_1);
}
var _loop_2 = function (x_2) {
    function foo1() { x_2; }
    ;
};
for (var x_2;;) {
    _loop_2(x_2);
}
var _loop_3 = function (x_3) {
    (function () { x_3; })();
};
for (var x_3;;) {
    _loop_3(x_3);
}
var _loop_4 = function (x_4) {
    (function () { x_4; })();
};
for (var x_4 = 1;;) {
    _loop_4(x_4);
}
var _loop_5 = function (x_5) {
    ({ foo: function () { x_5; } });
};
for (var x_5;;) {
    _loop_5(x_5);
}
var _loop_6 = function (x_6) {
    ({ get foo() { return x_6; } });
};
for (var x_6;;) {
    _loop_6(x_6);
}
var _loop_7 = function (x_7) {
    ({ set foo(v) { x_7; } });
};
for (var x_7;;) {
    _loop_7(x_7);
}
