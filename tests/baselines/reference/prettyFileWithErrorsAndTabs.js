//// [tests/cases/compiler/prettyFileWithErrorsAndTabs.ts] ////

//// [prettyFileWithErrorsAndTabs.ts]
function f() {
	{
		const x: string = 12;
		const y: string = 12;
		const z: string = 12;
	}
}

//// [prettyFileWithErrorsAndTabs.js]
function f() {
    {
        var x_1 = 12;
        var y_1 = 12;
        var z_1 = 12;
    }
}
