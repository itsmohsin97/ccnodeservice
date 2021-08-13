"use strict";
//import { ValidationResult } from "ts.validator.fluent/dist";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDescription = exports.snWebResponse = void 0;
class snWebResponse {
    IsSuccess() {
        if ((this.ErrorDetails.length == 1) && (this.ErrorDetails[0].Number == 0)) {
            return true;
        }
        else
            return false;
    }
    SetSuccessResult(successValue) {
        this.Value = successValue;
        this.ErrorDetails = new Array();
        this.ErrorDetails.push(new ErrorDescription("Success", 0));
    }
    SetSuccessResultv2(successValue, message) {
        this.Value = successValue;
        this.ErrorDetails = new Array();
        this.ErrorDetails.push(new ErrorDescription(message, 0));
    }
    AddErrorDescription(errorNumber, errorMessage, errorReason = null) {
        if (this.ErrorDetails == null) {
            //if (!string.IsNullOrEmpty(errorReason)) {
            if (errorReason != null && errorReason != undefined) {
                this.ErrorDetails = new Array();
                this.ErrorDetails.push(new ErrorDescription(errorMessage + "Reason :" + errorReason, errorNumber));
            }
            else {
                this.ErrorDetails = new Array();
                this.ErrorDetails.push(new ErrorDescription(errorMessage, errorNumber));
            }
        }
        else {
            if (errorReason != null && errorReason != undefined) {
                this.ErrorDetails.push(new ErrorDescription(errorMessage + "Reason :" + errorReason, errorNumber));
            }
            else {
                this.ErrorDetails.push(new ErrorDescription(errorMessage, errorNumber));
            }
        }
    }
    ErrorSummary() {
        {
            let result = '';
            for (let ed in this.ErrorDetails) {
                result = result + this.ErrorDetails[ed].Description;
            }
            return result;
        }
    }
}
exports.snWebResponse = snWebResponse;
class ErrorDescription {
    constructor(argDescription, argNumber) {
        this.Description = argDescription;
        this.Number = argNumber;
    }
    GenerateMessage(param) {
        return this.Description + " " + param;
    }
}
exports.ErrorDescription = ErrorDescription;
//# sourceMappingURL=snAppServerWebResponse.js.map