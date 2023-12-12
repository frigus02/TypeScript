//// [tests/cases/compiler/sourceMapValidationDestructuringForObjectBindingPatternDefaultValues.ts] ////

//// [sourceMapValidationDestructuringForObjectBindingPatternDefaultValues.ts]
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
        primary?: string;
        secondary?: string;
    };
}

let robot: Robot = { name: "mower", skill: "mowing" };
let multiRobot: MultiRobot = { name: "mower", skills: { primary: "mowing", secondary: "none" } };
function getRobot() {
    return robot;
}
function getMultiRobot() {
    return multiRobot;
}

for (let {name: nameA= "noName" } = robot, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA = "noName" } = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA = "noName" } = <Robot>{ name: "trimmer", skill: "trimming" }, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = multiRobot, i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = <MultiRobot>{ name: "trimmer", skills: { primary: "trimming", secondary: "edging" } },
    i = 0; i < 1; i++) {
    console.log(primaryA);
}

for (let {name: nameA = "noName", skill: skillA = "skill" } = robot, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA = "noName", skill: skillA = "skill" } = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA = "noName", skill: skillA = "skill" } = <Robot>{ name: "trimmer", skill: "trimming" }, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {
    name: nameA = "noName",
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = multiRobot, i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {
    name: nameA = "noName",
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {
    name: nameA = "noName",
    skills: {
        primary: primaryA = "primary",
        secondary: secondaryA = "secondary"
    } = { primary: "none", secondary: "none" }
} = <MultiRobot>{ name: "trimmer", skills: { primary: "trimming", secondary: "edging" } },
    i = 0; i < 1; i++) {
    console.log(primaryA);
}

//// [sourceMapValidationDestructuringForObjectBindingPatternDefaultValues.js]
var robot = { name: "mower", skill: "mowing" };
var multiRobot = { name: "mower", skills: { primary: "mowing", secondary: "none" } };
function getRobot() {
    return robot;
}
function getMultiRobot() {
    return multiRobot;
}
for (var _a = robot.name, nameA_1 = _a === void 0 ? "noName" : _a, i_1 = 0; i_1 < 1; i_1++) {
    console.log(nameA_1);
}
for (var _b = getRobot().name, nameA_2 = _b === void 0 ? "noName" : _b, i_2 = 0; i_2 < 1; i_2++) {
    console.log(nameA_2);
}
for (var _c = { name: "trimmer", skill: "trimming" }.name, nameA_3 = _c === void 0 ? "noName" : _c, i_3 = 0; i_3 < 1; i_3++) {
    console.log(nameA_3);
}
for (var _d = multiRobot.skills, _e = _d === void 0 ? { primary: "none", secondary: "none" } : _d, _f = _e.primary, primaryA_1 = _f === void 0 ? "primary" : _f, _g = _e.secondary, secondaryA_1 = _g === void 0 ? "secondary" : _g, i_4 = 0; i_4 < 1; i_4++) {
    console.log(primaryA_1);
}
for (var _h = getMultiRobot().skills, _j = _h === void 0 ? { primary: "none", secondary: "none" } : _h, _k = _j.primary, primaryA_2 = _k === void 0 ? "primary" : _k, _l = _j.secondary, secondaryA_2 = _l === void 0 ? "secondary" : _l, i_5 = 0; i_5 < 1; i_5++) {
    console.log(primaryA_2);
}
for (var _m = { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }.skills, _o = _m === void 0 ? { primary: "none", secondary: "none" } : _m, _p = _o.primary, primaryA_3 = _p === void 0 ? "primary" : _p, _q = _o.secondary, secondaryA_3 = _q === void 0 ? "secondary" : _q, i_6 = 0; i_6 < 1; i_6++) {
    console.log(primaryA_3);
}
for (var _r = robot.name, nameA_4 = _r === void 0 ? "noName" : _r, _s = robot.skill, skillA_1 = _s === void 0 ? "skill" : _s, i_7 = 0; i_7 < 1; i_7++) {
    console.log(nameA_4);
}
for (var _t = getRobot(), _u = _t.name, nameA_5 = _u === void 0 ? "noName" : _u, _v = _t.skill, skillA_2 = _v === void 0 ? "skill" : _v, i_8 = 0; i_8 < 1; i_8++) {
    console.log(nameA_5);
}
for (var _w = { name: "trimmer", skill: "trimming" }, _x = _w.name, nameA_6 = _x === void 0 ? "noName" : _x, _y = _w.skill, skillA_3 = _y === void 0 ? "skill" : _y, i_9 = 0; i_9 < 1; i_9++) {
    console.log(nameA_6);
}
for (var _z = multiRobot.name, nameA_7 = _z === void 0 ? "noName" : _z, _0 = multiRobot.skills, _1 = _0 === void 0 ? { primary: "none", secondary: "none" } : _0, _2 = _1.primary, primaryA_4 = _2 === void 0 ? "primary" : _2, _3 = _1.secondary, secondaryA_4 = _3 === void 0 ? "secondary" : _3, i_10 = 0; i_10 < 1; i_10++) {
    console.log(primaryA_4);
}
for (var _4 = getMultiRobot(), _5 = _4.name, nameA_8 = _5 === void 0 ? "noName" : _5, _6 = _4.skills, _7 = _6 === void 0 ? { primary: "none", secondary: "none" } : _6, _8 = _7.primary, primaryA_5 = _8 === void 0 ? "primary" : _8, _9 = _7.secondary, secondaryA_5 = _9 === void 0 ? "secondary" : _9, i_11 = 0; i_11 < 1; i_11++) {
    console.log(primaryA_5);
}
for (var _10 = { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }, _11 = _10.name, nameA_9 = _11 === void 0 ? "noName" : _11, _12 = _10.skills, _13 = _12 === void 0 ? { primary: "none", secondary: "none" } : _12, _14 = _13.primary, primaryA_6 = _14 === void 0 ? "primary" : _14, _15 = _13.secondary, secondaryA_6 = _15 === void 0 ? "secondary" : _15, i_12 = 0; i_12 < 1; i_12++) {
    console.log(primaryA_6);
}
//# sourceMappingURL=sourceMapValidationDestructuringForObjectBindingPatternDefaultValues.js.map