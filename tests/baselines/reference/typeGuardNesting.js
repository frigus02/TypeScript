//// [tests/cases/conformance/expressions/typeGuards/typeGuardNesting.ts] ////

//// [typeGuardNesting.ts]
let strOrBool: string|boolean;
if ((typeof strOrBool === 'boolean' && !strOrBool) || typeof strOrBool === 'string') {
	let label: string = (typeof strOrBool === 'string') ? strOrBool : "string";
	let bool: boolean = (typeof strOrBool === 'boolean') ? strOrBool : false;
	let label2: string = (typeof strOrBool !== 'boolean') ? strOrBool : "string";
	let bool2: boolean = (typeof strOrBool !== 'string') ? strOrBool : false;
}

if ((typeof strOrBool !== 'string' && !strOrBool) || typeof strOrBool !== 'boolean') {
	let label: string = (typeof strOrBool === 'string') ? strOrBool : "string";
	let bool: boolean = (typeof strOrBool === 'boolean') ? strOrBool : false;
	let label2: string = (typeof strOrBool !== 'boolean') ? strOrBool : "string";
	let bool2: boolean = (typeof strOrBool !== 'string') ? strOrBool : false;
}


//// [typeGuardNesting.js]
var strOrBool;
if ((typeof strOrBool === 'boolean' && !strOrBool) || typeof strOrBool === 'string') {
    var label_1 = (typeof strOrBool === 'string') ? strOrBool : "string";
    var bool_1 = (typeof strOrBool === 'boolean') ? strOrBool : false;
    var label2_1 = (typeof strOrBool !== 'boolean') ? strOrBool : "string";
    var bool2_1 = (typeof strOrBool !== 'string') ? strOrBool : false;
}
if ((typeof strOrBool !== 'string' && !strOrBool) || typeof strOrBool !== 'boolean') {
    var label_2 = (typeof strOrBool === 'string') ? strOrBool : "string";
    var bool_2 = (typeof strOrBool === 'boolean') ? strOrBool : false;
    var label2_2 = (typeof strOrBool !== 'boolean') ? strOrBool : "string";
    var bool2_2 = (typeof strOrBool !== 'string') ? strOrBool : false;
}
