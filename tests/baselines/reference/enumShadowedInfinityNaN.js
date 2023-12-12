//// [tests/cases/conformance/enums/enumShadowedInfinityNaN.ts] ////

//// [enumShadowedInfinityNaN.ts]
// https://github.com/microsoft/TypeScript/issues/54981

{
  let Infinity = {};
  enum En {
    X = Infinity
  }
}

{
  let NaN = {};
  enum En {
    X = NaN
  }
}


//// [enumShadowedInfinityNaN.js]
// https://github.com/microsoft/TypeScript/issues/54981
{
    var Infinity_1 = {};
    var En_1;
    (function (En) {
        En[En["X"] = Infinity_1] = "X";
    })(En_1 || (En_1 = {}));
}
{
    var NaN_1 = {};
    var En_2;
    (function (En) {
        En[En["X"] = NaN_1] = "X";
    })(En_2 || (En_2 = {}));
}
