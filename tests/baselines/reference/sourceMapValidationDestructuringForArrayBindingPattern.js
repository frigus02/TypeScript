//// [tests/cases/compiler/sourceMapValidationDestructuringForArrayBindingPattern.ts] ////

//// [sourceMapValidationDestructuringForArrayBindingPattern.ts]
declare var console: {
    log(msg: any): void;
}
type Robot = [number, string, string];
type MultiSkilledRobot = [string, [string, string]];

let robotA: Robot = [1, "mower", "mowing"];
function getRobot() {
    return robotA;
}

let multiRobotA: MultiSkilledRobot = ["mower", ["mowing", ""]];
let multiRobotB: MultiSkilledRobot = ["trimmer", ["trimming", "edging"]];
function getMultiRobot() {
    return multiRobotA;
}

for (let [, nameA] = robotA, i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let [, nameA] = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let [, nameA] = [2, "trimmer", "trimming"], i = 0; i < 1; i++) {
    console.log(nameA);
}
for (let [, [primarySkillA, secondarySkillA]] = multiRobotA, i = 0; i < 1; i++) {
    console.log(primarySkillA);
}
for (let [, [primarySkillA, secondarySkillA]] = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(primarySkillA);
}
for (let [, [primarySkillA, secondarySkillA]] = ["trimmer", ["trimming", "edging"]], i = 0; i < 1; i++) {
    console.log(primarySkillA);
}

for (let [numberB] = robotA, i = 0; i < 1; i++) {
    console.log(numberB);
}
for (let [numberB] = getRobot(), i = 0; i < 1; i++) {
    console.log(numberB);
}
for (let [numberB] = [2, "trimmer", "trimming"], i = 0; i < 1; i++) {
    console.log(numberB);
}
for (let [nameB] = multiRobotA, i = 0; i < 1; i++) {
    console.log(nameB);
}
for (let [nameB] = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(nameB);
}
for (let [nameB] = ["trimmer", ["trimming", "edging"]], i = 0; i < 1; i++) {
    console.log(nameB);
}

for (let [numberA2, nameA2, skillA2] = robotA, i = 0; i < 1; i++) {
    console.log(nameA2);
}
for (let [numberA2, nameA2, skillA2] = getRobot(), i = 0; i < 1; i++) {
    console.log(nameA2);
}
for (let [numberA2, nameA2, skillA2] = [2, "trimmer", "trimming"], i = 0; i < 1; i++) {
    console.log(nameA2);
}
for (let [nameMA, [primarySkillA, secondarySkillA]] = multiRobotA, i = 0; i < 1; i++) {
    console.log(nameMA);
}
for (let [nameMA, [primarySkillA, secondarySkillA]] = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(nameMA);
}
for (let [nameMA, [primarySkillA, secondarySkillA]] = ["trimmer", ["trimming", "edging"]], i = 0; i < 1; i++) {
    console.log(nameMA);
}

for (let [numberA3, ...robotAInfo] = robotA, i = 0; i < 1; i++) {
    console.log(numberA3);
}
for (let [numberA3, ...robotAInfo] = getRobot(), i = 0; i < 1; i++) {
    console.log(numberA3);
}
for (let [numberA3, ...robotAInfo] = [2, "trimmer", "trimming"], i = 0; i < 1; i++) {
    console.log(numberA3);
}
for (let [...multiRobotAInfo] = multiRobotA, i = 0; i < 1; i++) {
    console.log(multiRobotAInfo);
}
for (let [...multiRobotAInfo] = getMultiRobot(), i = 0; i < 1; i++) {
    console.log(multiRobotAInfo);
}
for (let [...multiRobotAInfo] = ["trimmer", ["trimming", "edging"]], i = 0; i < 1; i++) {
    console.log(multiRobotAInfo);
}

//// [sourceMapValidationDestructuringForArrayBindingPattern.js]
var robotA = [1, "mower", "mowing"];
function getRobot() {
    return robotA;
}
var multiRobotA = ["mower", ["mowing", ""]];
var multiRobotB = ["trimmer", ["trimming", "edging"]];
function getMultiRobot() {
    return multiRobotA;
}
for (var nameA_1 = robotA[1], i_1 = 0; i_1 < 1; i_1++) {
    console.log(nameA_1);
}
for (var _a = getRobot(), nameA_2 = _a[1], i_2 = 0; i_2 < 1; i_2++) {
    console.log(nameA_2);
}
for (var _b = [2, "trimmer", "trimming"], nameA_3 = _b[1], i_3 = 0; i_3 < 1; i_3++) {
    console.log(nameA_3);
}
for (var _c = multiRobotA[1], primarySkillA_1 = _c[0], secondarySkillA_1 = _c[1], i_4 = 0; i_4 < 1; i_4++) {
    console.log(primarySkillA_1);
}
for (var _d = getMultiRobot(), _e = _d[1], primarySkillA_2 = _e[0], secondarySkillA_2 = _e[1], i_5 = 0; i_5 < 1; i_5++) {
    console.log(primarySkillA_2);
}
for (var _f = ["trimmer", ["trimming", "edging"]], _g = _f[1], primarySkillA_3 = _g[0], secondarySkillA_3 = _g[1], i_6 = 0; i_6 < 1; i_6++) {
    console.log(primarySkillA_3);
}
for (var numberB_1 = robotA[0], i_7 = 0; i_7 < 1; i_7++) {
    console.log(numberB_1);
}
for (var numberB_2 = getRobot()[0], i_8 = 0; i_8 < 1; i_8++) {
    console.log(numberB_2);
}
for (var numberB_3 = [2, "trimmer", "trimming"][0], i_9 = 0; i_9 < 1; i_9++) {
    console.log(numberB_3);
}
for (var nameB_1 = multiRobotA[0], i_10 = 0; i_10 < 1; i_10++) {
    console.log(nameB_1);
}
for (var nameB_2 = getMultiRobot()[0], i_11 = 0; i_11 < 1; i_11++) {
    console.log(nameB_2);
}
for (var nameB_3 = ["trimmer", ["trimming", "edging"]][0], i_12 = 0; i_12 < 1; i_12++) {
    console.log(nameB_3);
}
for (var numberA2_1 = robotA[0], nameA2_1 = robotA[1], skillA2_1 = robotA[2], i_13 = 0; i_13 < 1; i_13++) {
    console.log(nameA2_1);
}
for (var _h = getRobot(), numberA2_2 = _h[0], nameA2_2 = _h[1], skillA2_2 = _h[2], i_14 = 0; i_14 < 1; i_14++) {
    console.log(nameA2_2);
}
for (var _j = [2, "trimmer", "trimming"], numberA2_3 = _j[0], nameA2_3 = _j[1], skillA2_3 = _j[2], i_15 = 0; i_15 < 1; i_15++) {
    console.log(nameA2_3);
}
for (var nameMA_1 = multiRobotA[0], _k = multiRobotA[1], primarySkillA_4 = _k[0], secondarySkillA_4 = _k[1], i_16 = 0; i_16 < 1; i_16++) {
    console.log(nameMA_1);
}
for (var _l = getMultiRobot(), nameMA_2 = _l[0], _m = _l[1], primarySkillA_5 = _m[0], secondarySkillA_5 = _m[1], i_17 = 0; i_17 < 1; i_17++) {
    console.log(nameMA_2);
}
for (var _o = ["trimmer", ["trimming", "edging"]], nameMA_3 = _o[0], _p = _o[1], primarySkillA_6 = _p[0], secondarySkillA_6 = _p[1], i_18 = 0; i_18 < 1; i_18++) {
    console.log(nameMA_3);
}
for (var numberA3_1 = robotA[0], robotAInfo_1 = robotA.slice(1), i_19 = 0; i_19 < 1; i_19++) {
    console.log(numberA3_1);
}
for (var _q = getRobot(), numberA3_2 = _q[0], robotAInfo_2 = _q.slice(1), i_20 = 0; i_20 < 1; i_20++) {
    console.log(numberA3_2);
}
for (var _r = [2, "trimmer", "trimming"], numberA3_3 = _r[0], robotAInfo_3 = _r.slice(1), i_21 = 0; i_21 < 1; i_21++) {
    console.log(numberA3_3);
}
for (var multiRobotAInfo_1 = multiRobotA.slice(0), i_22 = 0; i_22 < 1; i_22++) {
    console.log(multiRobotAInfo_1);
}
for (var multiRobotAInfo_2 = getMultiRobot().slice(0), i_23 = 0; i_23 < 1; i_23++) {
    console.log(multiRobotAInfo_2);
}
for (var multiRobotAInfo_3 = ["trimmer", ["trimming", "edging"]].slice(0), i_24 = 0; i_24 < 1; i_24++) {
    console.log(multiRobotAInfo_3);
}
//# sourceMappingURL=sourceMapValidationDestructuringForArrayBindingPattern.js.map