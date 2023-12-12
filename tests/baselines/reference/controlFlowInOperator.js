//// [tests/cases/conformance/controlFlow/controlFlowInOperator.ts] ////

//// [controlFlowInOperator.ts]
const a = 'a';
const b = 'b';
const d = 'd';

type A = { [a]: number; };
type B = { [b]: string; };

declare const c: A | B;

if ('a' in c) {
    c;      // A
    c['a']; // number;
}

if ('d' in c) {
    c; // never
}

if (a in c) {
    c;    // A
    c[a]; // number;
}

if (d in c) {
    c; // never
}

// repro from https://github.com/microsoft/TypeScript/issues/54790

function uniqueID_54790(
  id: string | undefined,
  seenIDs: { [key: string]: string }
): string {
  if (id === undefined) {
    id = "1";
  }
  if (!(id in seenIDs)) {
    return id;
  }
  for (let i = 1; i < Number.MAX_VALUE; i++) {
    const newID = `${id}-${i}`;
    if (!(newID in seenIDs)) {
      return newID;
    }
  }
  throw Error("heat death of the universe");
}

function uniqueID_54790_2(id: string | number, seenIDs: object) {
  id = "a";
  for (let i = 1; i < 3; i++) {
    const newID = `${id}`;
    if (newID in seenIDs) {
    }
  }
}

function uniqueID_54790_3(id: string | number, seenIDs: object) {
  id = "a";
  for (let i = 1; i < 3; i++) {
    const newID = id;
    if (newID in seenIDs) {
    }
  }
}


//// [controlFlowInOperator.js]
var a = 'a';
var b = 'b';
var d = 'd';
if ('a' in c) {
    c; // A
    c['a']; // number;
}
if ('d' in c) {
    c; // never
}
if (a in c) {
    c; // A
    c[a]; // number;
}
if (d in c) {
    c; // never
}
// repro from https://github.com/microsoft/TypeScript/issues/54790
function uniqueID_54790(id, seenIDs) {
    if (id === undefined) {
        id = "1";
    }
    if (!(id in seenIDs)) {
        return id;
    }
    for (var i_1 = 1; i_1 < Number.MAX_VALUE; i_1++) {
        var newID_1 = "".concat(id, "-").concat(i_1);
        if (!(newID_1 in seenIDs)) {
            return newID_1;
        }
    }
    throw Error("heat death of the universe");
}
function uniqueID_54790_2(id, seenIDs) {
    id = "a";
    for (var i_2 = 1; i_2 < 3; i_2++) {
        var newID_2 = "".concat(id);
        if (newID_2 in seenIDs) {
        }
    }
}
function uniqueID_54790_3(id, seenIDs) {
    id = "a";
    for (var i_3 = 1; i_3 < 3; i_3++) {
        var newID_3 = id;
        if (newID_3 in seenIDs) {
        }
    }
}
