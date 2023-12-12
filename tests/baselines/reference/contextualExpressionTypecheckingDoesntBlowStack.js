//// [tests/cases/compiler/contextualExpressionTypecheckingDoesntBlowStack.ts] ////

//// [contextualExpressionTypecheckingDoesntBlowStack.ts]
// repro for: https://github.com/Microsoft/TypeScript/issues/23661
export interface IValidationError {
    message: string;
}

export default class Operation {
    validateParameters(parameterValues: any) : IValidationError[] | null {
        let result: IValidationError[] | null = null;
        for(const parameterLocation of Object.keys(parameterValues)) {
            const parameter: any = (this as any).getParameter();;
            const values = (this as any).getValues();

            const innerResult = parameter.validate(values[parameter.oaParameter.name]);
            if(innerResult && innerResult.length > 0) {
                // Commenting out this line will fix the problem.
                result = (result || []).concat(innerResult);
            }
        }

        return result;
    }
}

//// [contextualExpressionTypecheckingDoesntBlowStack.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.prototype.validateParameters = function (parameterValues) {
        var result = null;
        for (var _i = 0, _a = Object.keys(parameterValues); _i < _a.length; _i++) {
            var parameterLocation_1 = _a[_i];
            var parameter_1 = this.getParameter();
            ;
            var values_1 = this.getValues();
            var innerResult_1 = parameter_1.validate(values_1[parameter_1.oaParameter.name]);
            if (innerResult_1 && innerResult_1.length > 0) {
                // Commenting out this line will fix the problem.
                result = (result || []).concat(innerResult_1);
            }
        }
        return result;
    };
    return Operation;
}());
exports.default = Operation;
