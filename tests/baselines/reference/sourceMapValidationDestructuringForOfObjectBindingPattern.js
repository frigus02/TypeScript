//// [tests/cases/compiler/sourceMapValidationDestructuringForOfObjectBindingPattern.ts] ////

//// [sourceMapValidationDestructuringForOfObjectBindingPattern.ts]
declare var console: {
    log(msg: any): void;
}
interface Robot {
    name: string;
    skill: string;
}

interface MultiRobot {
    name: string;
    skills: {
        primary: string;
        secondary: string;
    };
}

let robots: Robot[] = [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }];
let multiRobots: MultiRobot[] = [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }];

function getRobots() {
    return robots;
}

function getMultiRobots() {
    return multiRobots;
}

for (let {name: nameA } of robots) {
    console.log(nameA);
}
for (let {name: nameA } of getRobots()) {
    console.log(nameA);
}
for (let {name: nameA } of [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }]) {
    console.log(nameA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } of multiRobots) {
    console.log(primaryA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } of getMultiRobots()) {
    console.log(primaryA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } of [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }]) {
    console.log(primaryA);
}

for (let {name: nameA, skill: skillA } of robots) {
    console.log(nameA);
}
for (let {name: nameA, skill: skillA } of getRobots()) {
    console.log(nameA);
}
for (let {name: nameA, skill: skillA } of [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }]) {
    console.log(nameA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } of multiRobots) {
    console.log(nameA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } of getMultiRobots()) {
    console.log(nameA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } of [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }]) {
    console.log(nameA);
}

//// [sourceMapValidationDestructuringForOfObjectBindingPattern.js]
var robots = [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }];
var multiRobots = [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }];
function getRobots() {
    return robots;
}
function getMultiRobots() {
    return multiRobots;
}
for (var _i = 0, robots_1 = robots; _i < robots_1.length; _i++) {
    var nameA_1 = robots_1[_i].name;
    console.log(nameA_1);
}
for (var _a = 0, _b = getRobots(); _a < _b.length; _a++) {
    var nameA_2 = _b[_a].name;
    console.log(nameA_2);
}
for (var _c = 0, _d = [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }]; _c < _d.length; _c++) {
    var nameA_3 = _d[_c].name;
    console.log(nameA_3);
}
for (var _e = 0, multiRobots_1 = multiRobots; _e < multiRobots_1.length; _e++) {
    var _f = multiRobots_1[_e].skills, primaryA_1 = _f.primary, secondaryA_1 = _f.secondary;
    console.log(primaryA_1);
}
for (var _g = 0, _h = getMultiRobots(); _g < _h.length; _g++) {
    var _j = _h[_g].skills, primaryA_2 = _j.primary, secondaryA_2 = _j.secondary;
    console.log(primaryA_2);
}
for (var _k = 0, _l = [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }]; _k < _l.length; _k++) {
    var _m = _l[_k].skills, primaryA_3 = _m.primary, secondaryA_3 = _m.secondary;
    console.log(primaryA_3);
}
for (var _o = 0, robots_2 = robots; _o < robots_2.length; _o++) {
    var _p = robots_2[_o], nameA_4 = _p.name, skillA_1 = _p.skill;
    console.log(nameA_4);
}
for (var _q = 0, _r = getRobots(); _q < _r.length; _q++) {
    var _s = _r[_q], nameA_5 = _s.name, skillA_2 = _s.skill;
    console.log(nameA_5);
}
for (var _t = 0, _u = [{ name: "mower", skill: "mowing" }, { name: "trimmer", skill: "trimming" }]; _t < _u.length; _t++) {
    var _v = _u[_t], nameA_6 = _v.name, skillA_3 = _v.skill;
    console.log(nameA_6);
}
for (var _w = 0, multiRobots_2 = multiRobots; _w < multiRobots_2.length; _w++) {
    var _x = multiRobots_2[_w], nameA_7 = _x.name, _y = _x.skills, primaryA_4 = _y.primary, secondaryA_4 = _y.secondary;
    console.log(nameA_7);
}
for (var _z = 0, _0 = getMultiRobots(); _z < _0.length; _z++) {
    var _1 = _0[_z], nameA_8 = _1.name, _2 = _1.skills, primaryA_5 = _2.primary, secondaryA_5 = _2.secondary;
    console.log(nameA_8);
}
for (var _3 = 0, _4 = [{ name: "mower", skills: { primary: "mowing", secondary: "none" } },
    { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }]; _3 < _4.length; _3++) {
    var _5 = _4[_3], nameA_9 = _5.name, _6 = _5.skills, primaryA_6 = _6.primary, secondaryA_6 = _6.secondary;
    console.log(nameA_9);
}
//# sourceMappingURL=sourceMapValidationDestructuringForOfObjectBindingPattern.js.map