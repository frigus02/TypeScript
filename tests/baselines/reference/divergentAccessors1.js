//// [tests/cases/compiler/divergentAccessors1.ts] ////

//// [divergentAccessors1.ts]
// Accessors in interfaces/types

{
    interface IHasGetSet {
        get foo(): number;
        set foo(v: number | string);
    }
    
    const ihgs: IHasGetSet = null as any;
    ihgs.foo = "32";
    let r_ihgs_foo: number = ihgs.foo;
}

{
    type T_HasGetSet = {
        get foo(): number;
        set foo(v: number | string);
    }
    
    const t_hgs: T_HasGetSet = null as any;
    t_hgs.foo = "32";
    let r_t_hgs_foo: number = t_hgs.foo;
}


//// [divergentAccessors1.js]
"use strict";
// Accessors in interfaces/types
{
    var ihgs_1 = null;
    ihgs_1.foo = "32";
    var r_ihgs_foo_1 = ihgs_1.foo;
}
{
    var t_hgs_1 = null;
    t_hgs_1.foo = "32";
    var r_t_hgs_foo_1 = t_hgs_1.foo;
}
