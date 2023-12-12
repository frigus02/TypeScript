//// [tests/cases/compiler/destructuringTypeGuardFlow.ts] ////

//// [destructuringTypeGuardFlow.ts]
type foo = {
  bar: number | null;
  baz: string;
  nested: {
    a: number;
    b: string | null;
  }
};

const aFoo: foo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };

if (aFoo.bar && aFoo.nested.b) {
  const { bar, baz, nested: {a, b: text} } = aFoo;
  const right: number = aFoo.bar;
  const wrong: number = bar;
  const another: string = baz;
  const aAgain: number = a;
  const bAgain: string = text;
}

type bar = {
  elem1: number | null;
  elem2: foo | null;
};

const bBar = { elem1: 7, elem2: aFoo };

if (bBar.elem2 && bBar.elem2.bar && bBar.elem2.nested.b) {
  const { bar, baz, nested: {a, b: text} } = bBar.elem2;
  const right: number = bBar.elem2.bar;
  const wrong: number = bar;
  const another: string = baz;
  const aAgain: number = a;
  const bAgain: string = text;
}


//// [destructuringTypeGuardFlow.js]
var aFoo = { bar: 3, baz: "b", nested: { a: 1, b: "y" } };
if (aFoo.bar && aFoo.nested.b) {
    var bar_1 = aFoo.bar, baz_1 = aFoo.baz, _a = aFoo.nested, a_1 = _a.a, text_1 = _a.b;
    var right_1 = aFoo.bar;
    var wrong_1 = bar_1;
    var another_1 = baz_1;
    var aAgain_1 = a_1;
    var bAgain_1 = text_1;
}
var bBar = { elem1: 7, elem2: aFoo };
if (bBar.elem2 && bBar.elem2.bar && bBar.elem2.nested.b) {
    var _b = bBar.elem2, bar_2 = _b.bar, baz_2 = _b.baz, _c = _b.nested, a_2 = _c.a, text_2 = _c.b;
    var right_2 = bBar.elem2.bar;
    var wrong_2 = bar_2;
    var another_2 = baz_2;
    var aAgain_2 = a_2;
    var bAgain_2 = text_2;
}
