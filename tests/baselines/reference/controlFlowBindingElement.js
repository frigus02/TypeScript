//// [tests/cases/conformance/controlFlow/controlFlowBindingElement.ts] ////

//// [controlFlowBindingElement.ts]
{
    const data =  { param: 'value' };

    const {
        param = (() => { throw new Error('param is not defined') })(),
    } = data;
    
    console.log(param); // should not trigger 'Unreachable code detected.'    
}


{
    const data =  { param: 'value' };

    let foo: string | undefined = "";
    const {
        param = (() => { throw new Error('param is not defined') })(),
    } = data;
    
    foo;  // should be string  
}

{
    const data =  { param: 'value' };

    let foo: string | undefined = "";
    const {
        param = (() => { foo = undefined })(),
    } = data;
    
    foo;  // should be string | undefined
}

{
    const data =  { param: 'value' };

    let foo: string | undefined = "";
    const {
        param = (() => { return "" + 1 })(),
    } = data;
    
    foo;  // should be string
}

{
    interface Window {
        window: Window;
    }

    let foo: string | undefined;
    let window = {} as Window;
    window.window = window;

    const { [(() => { foo = ""; return 'window' as const })()]:
        { [(() => { return 'window' as const })()]: bar } } = window;

    foo;  // should be string
}

{
    interface Window {
        window: Window;
    }

    let foo: string | undefined;
    let window = {} as Window;
    window.window = window;

    const { [(() => {  return 'window' as const })()]:
        { [(() => { foo = ""; return 'window' as const })()]: bar } } = window;

    foo;  // should be string
}

{
    interface Window {
        window: Window;
    }

    let foo: string | undefined;
    let window = {} as Window;
    window.window = window;

    const { [(() => { return 'window' as const })()]:
        { [(() => { return 'window' as const })()]: bar = (() => { foo = ""; return window; })() } } = window;

    foo;  // should be string | undefined
}


//// [controlFlowBindingElement.js]
{
    var data_1 = { param: 'value' };
    var _a = data_1.param, param_1 = _a === void 0 ? (function () { throw new Error('param is not defined'); })() : _a;
    console.log(param_1); // should not trigger 'Unreachable code detected.'    
}
{
    var data_2 = { param: 'value' };
    var foo_1 = "";
    var _b = data_2.param, param_2 = _b === void 0 ? (function () { throw new Error('param is not defined'); })() : _b;
    foo_1; // should be string  
}
{
    var data_3 = { param: 'value' };
    var foo_2 = "";
    var _c = data_3.param, param_3 = _c === void 0 ? (function () { foo_2 = undefined; })() : _c;
    foo_2; // should be string | undefined
}
{
    var data_4 = { param: 'value' };
    var foo_3 = "";
    var _d = data_4.param, param_4 = _d === void 0 ? (function () { return "" + 1; })() : _d;
    foo_3; // should be string
}
{
    var foo_4;
    var window_1 = {};
    window_1.window = window_1;
    var _e = window_1, _f = (function () { foo_4 = ""; return 'window'; })(), _g = (function () { return 'window'; })(), bar_1 = _e[_f][_g];
    foo_4; // should be string
}
{
    var foo_5;
    var window_2 = {};
    window_2.window = window_2;
    var _h = window_2, _j = (function () { return 'window'; })(), _k = (function () { foo_5 = ""; return 'window'; })(), bar_2 = _h[_j][_k];
    foo_5; // should be string
}
{
    var foo_6;
    var window_3 = {};
    window_3.window = window_3;
    var _l = window_3, _m = (function () { return 'window'; })(), _o = (function () { return 'window'; })(), _p = _l[_m][_o], bar_3 = _p === void 0 ? (function () { foo_6 = ""; return window_3; })() : _p;
    foo_6; // should be string | undefined
}
