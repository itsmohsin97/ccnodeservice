"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorKVP = exports.ResponseStatusType = exports.ErrorSourceSubSystem = exports.ErrorType = exports.StatusCode = exports.ErrorData = exports.snWebResponseEx = void 0;
class snWebResponseEx {
    IsSuccess() {
        if (this.StatusType === ResponseStatusType.Success &&
            this.StatusCode === 200 &&
            this.ErrorData === null) {
            return true;
        }
        else {
            return false;
        }
    }
    IsWarning() {
        if (this.StatusType === ResponseStatusType.Warning &&
            this.StatusCode === 200 &&
            this.ErrorData === null) {
            return true;
        }
        else
            return false;
    }
    SetSuccessResult(successValue, argStatusCode, argStatusDescription, argErrorData) {
        this.Value = successValue;
        this.StatusType = ResponseStatusType.Success;
        this.StatusCode = argStatusCode;
        this.StatusDescription = argStatusDescription;
        this.ErrorData = argErrorData;
    }
    SetWarningResult(successValue, argStatusCode, argStatusDescription) {
        this.Value = successValue;
        this.StatusType = ResponseStatusType.Warning;
        this.StatusCode = argStatusCode;
        this.StatusDescription = argStatusDescription;
        this.ErrorData = null;
    }
    SetErrorResult(argStatusType, argStatusCode, argStatusDescription, argErrorType, argErrorNumber, errorMessage, argErrorReason, argErrorDescription, argErrorSubSystem, argErrorDetailsList) {
        // this.Value = null;
        this.StatusType = argStatusType;
        this.StatusCode = argStatusCode;
        this.StatusDescription = argStatusDescription;
        this.ErrorData = this.createErrorData(argErrorType, argErrorNumber, errorMessage, argErrorReason, argErrorDescription, argErrorSubSystem, argErrorDetailsList);
    }
    AddErrorDetailsToErrorDetailsList(argErrorDetailsList, argErrorDetails) {
        // if (!this.ErrorData) {
        //     console.log('Creating general ErrorData');
        //     this.ErrorData = this.createErrorData(ErrorType.Unknown, 500, 'Internal server error', '',
        //         'Internal server error', ErrorSourceSubSystem.Unknown, new Array());
        // }
        argErrorDetailsList.push(argErrorDetails);
    }
    createErrorData(argErrorType, argErrorNumber, errorMessage, argErrorReason, argErrorDescription, argErrorSubSystem, argErrorDetails) {
        return new ErrorData(argErrorNumber, argErrorType, argErrorSubSystem, argErrorDescription, argErrorReason, argErrorDetails);
    }
    ErrorSummary() {
        let result = '';
        for (let ed of this.ErrorData.ErrorDetailsList) {
            result = result + ed.ErrorMessage + ', ';
        }
        return result;
    }
}
exports.snWebResponseEx = snWebResponseEx;
class ErrorData {
    constructor(ErrorNumber, ErrorType, ErrorSourceSubsystem, ErrorDescription, ProbableCause, ErrorDetailsList) {
        this.ErrorNumber = ErrorNumber;
        this.ErrorType = ErrorType;
        this.ErrorSourceSubsystem = ErrorSourceSubsystem;
        this.ErrorDescription = ErrorDescription;
        this.ProbableCause = ProbableCause;
        this.ErrorDetailsList = ErrorDetailsList;
    }
}
exports.ErrorData = ErrorData;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["UnAuthorized"] = 401] = "UnAuthorized";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["Unknown"] = 0] = "Unknown";
    ErrorType[ErrorType["InputError"] = 1] = "InputError";
    ErrorType[ErrorType["AuthorizationError"] = 2] = "AuthorizationError";
    ErrorType[ErrorType["ContentAccessPermissionError"] = 3] = "ContentAccessPermissionError";
    ErrorType[ErrorType["ServerInternalError"] = 4] = "ServerInternalError";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var ErrorSourceSubSystem;
(function (ErrorSourceSubSystem) {
    ErrorSourceSubSystem[ErrorSourceSubSystem["Unknown"] = 0] = "Unknown";
    ErrorSourceSubSystem[ErrorSourceSubSystem["WebAPI"] = 1] = "WebAPI";
    ErrorSourceSubSystem[ErrorSourceSubSystem["Authorization"] = 2] = "Authorization";
    ErrorSourceSubSystem[ErrorSourceSubSystem["Authentication"] = 3] = "Authentication";
    ErrorSourceSubSystem[ErrorSourceSubSystem["Node"] = 4] = "Node";
    ErrorSourceSubSystem[ErrorSourceSubSystem["Database"] = 5] = "Database";
})(ErrorSourceSubSystem = exports.ErrorSourceSubSystem || (exports.ErrorSourceSubSystem = {}));
var ResponseStatusType;
(function (ResponseStatusType) {
    ResponseStatusType[ResponseStatusType["Info"] = 1] = "Info";
    ResponseStatusType[ResponseStatusType["Error"] = 2] = "Error";
    ResponseStatusType[ResponseStatusType["Warning"] = 3] = "Warning";
    ResponseStatusType[ResponseStatusType["Success"] = 4] = "Success";
})(ResponseStatusType = exports.ResponseStatusType || (exports.ResponseStatusType = {}));
class ErrorKVP {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}
exports.ErrorKVP = ErrorKVP;
//export class KorvaiImportErrorDetails implements IErrorDetails {
//    constructor(public ErrorNumber: number,
//        public ErrorMessage: string,
//        public ErrorKVPs: ErrorKVP[],
//        public ErrorDetails: IErrorDetails,
//        public ErroredEntity: KorvaiClip[] | KorvaiPart) { }
//    public getValue = (argKey: string): string => {
//        return (this.ErrorKVPs.find((kvp) => {
//            return kvp.Key === argKey;
//        }
//        )).Value;
//    }
// public getPartIndex(): number {
//     return (this.ErrorKVPs.find((kvp) => {
//         console.log(kvp);
//         return kvp.Key === 'Part';
//     }
//     )).Value;
// }
// public getLineIndex(): number {
//     return (this.ErrorKVPs.find((kvp) => {
//         return kvp.Key === 'Line';
//     }
//     )).Value;
// }
// public getClipIndex(): number {
//     return (this.ErrorKVPs.find((kvp) => {
//         return kvp.Key === 'Clip';
//     }
//     ).Value);
// }
//}
//export class KorvaiValidationErrorDetails implements IErrorDetails {
//    constructor(public ErrorNumber: number,
//        public ErrorMessage: string,
//        public ErrorKVPs: ErrorKVP[],
//        public ErrorDetails: IErrorDetails,
//        public ErroredEntity: KorvaiClip[] | KorvaiPart) { }
//    public getValue = (argKey: string): string => {
//        return (this.ErrorKVPs.find((kvp) => {
//            return kvp.Key === argKey;
//        }
//        )).Value;
//    } //public getValue = (argKey: string): string => {
//}//export class KorvaiValidationErrorDetails implements IErrorDetails 
//# sourceMappingURL=ErrorData.js.map