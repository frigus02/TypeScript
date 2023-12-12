//// [tests/cases/compiler/sourceMapValidationDestructuringForObjectBindingPattern.ts] ////

//// [sourceMapValidationDestructuringForObjectBindingPattern.ts]
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

let robot: Robot = { name: "mower", skill: "mowing" };
let multiRobot: MultiRobot = { name: "mower", skills: { primary: "mowing", secondary: "none" } };
function getRobot() {
    return robot;
}
function getMultiRobot() {
    return multiRobot;
}

for (let {name: nameA } = robot, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA } = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA } = <Robot>{ name: "trimmer", skill: "trimming" }, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } = multiRobot, i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let { skills: { primary: primaryA, secondary: secondaryA } } =
    <MultiRobot>{ name: "trimmer", skills: { primary: "trimming", secondary: "edging" } },
    i = 0; i < 1; i++) {
    console.log(primaryA);
}

for (let {name: nameA, skill: skillA } = robot, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA, skill: skillA } = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA, skill: skillA } = <Robot>{ name: "trimmer", skill: "trimming" }, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } = multiRobot, i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(primaryA);
}
for (let {name: nameA, skills: { primary: primaryA, secondary: secondaryA } } =
    <MultiRobot>{ name: "trimmer", skills: { primary: "trimming", secondary: "edging" } },
    i = 0; i < 1; i++) {
    console.log(primaryA);
}

//// [sourceMapValidationDestructuringForObjectBindingPattern.js]
var robot = { name: "mower", skill: "mowing" };
var multiRobot = { name: "mower", skills: { primary: "mowing", secondary: "none" } };
function getRobot() {
    return robot;
}
function getMultiRobot() {
    return multiRobot;
}
for (var nameA_1 = robot.name, i_1 = 0; i_1 < 1; i_1++) {
    console.log(nameA_1);
}
for (var nameA_2 = getRobot().name, i_2 = 0; i_2 < 1; i_2++) {
    console.log(nameA_2);
}
for (var nameA_3 = { name: "trimmer", skill: "trimming" }.name, i_3 = 0; i_3 < 1; i_3++) {
    console.log(nameA_3);
}
for (var _a = multiRobot.skills, primaryA_1 = _a.primary, secondaryA_1 = _a.secondary, i_4 = 0; i_4 < 1; i_4++) {
    console.log(primaryA_1);
}
for (var _b = getMultiRobot().skills, primaryA_2 = _b.primary, secondaryA_2 = _b.secondary, i_5 = 0; i_5 < 1; i_5++) {
    console.log(primaryA_2);
}
for (var _c = { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }.skills, primaryA_3 = _c.primary, secondaryA_3 = _c.secondary, i_6 = 0; i_6 < 1; i_6++) {
    console.log(primaryA_3);
}
for (var nameA_4 = robot.name, skillA_1 = robot.skill, i_7 = 0; i_7 < 1; i_7++) {
    console.log(nameA_4);
}
for (var _d = getRobot(), nameA_5 = _d.name, skillA_2 = _d.skill, i_8 = 0; i_8 < 1; i_8++) {
    console.log(nameA_5);
}
for (var _e = { name: "trimmer", skill: "trimming" }, nameA_6 = _e.name, skillA_3 = _e.skill, i_9 = 0; i_9 < 1; i_9++) {
    console.log(nameA_6);
}
for (var nameA_7 = multiRobot.name, _f = multiRobot.skills, primaryA_4 = _f.primary, secondaryA_4 = _f.secondary, i_10 = 0; i_10 < 1; i_10++) {
    console.log(primaryA_4);
}
for (var _g = getMultiRobot(), nameA_8 = _g.name, _h = _g.skills, primaryA_5 = _h.primary, secondaryA_5 = _h.secondary, i_11 = 0; i_11 < 1; i_11++) {
    console.log(primaryA_5);
}
for (var _j = { name: "trimmer", skills: { primary: "trimming", secondary: "edging" } }, nameA_9 = _j.name, _k = _j.skills, primaryA_6 = _k.primary, secondaryA_6 = _k.secondary, i_12 = 0; i_12 < 1; i_12++) {
    console.log(primaryA_6);
}
//# sourceMappingURL=sourceMapValidationDestructuringForObjectBindingPattern.js.map