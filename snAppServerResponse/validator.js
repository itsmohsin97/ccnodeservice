// import { Korvai, KorvaiPart, KorvaiClip } from '../models/KorvaiModel';
// import { ValidationResult } from 'ts.validator.fluent/dist';
// export class snWebResponseValidator<T>
// {
//     public Value: T;
//     public StatusType: ResponseStatusType;
//     public StatusCode: number; // More or less HTTP Status Code
//     public StatusDescription: string;
//     public ErrorData: ErrorData;
//     public IsSuccess(): boolean {
//         if (this.StatusType === ResponseStatusType.Success &&
//             this.StatusCode === 200 &&
//             this.ErrorData === null) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     public IsWarning(): boolean {
//         if (this.StatusType === ResponseStatusType.Warning &&
//             this.StatusCode === 200 &&
//             this.ErrorData === null) {
//             return true;
//         }
//         else
//             return false;
//     }
//     public SetSuccessResult(successValue: T, argStatusCode: number, argStatusDescription: string) {
//         this.Value = successValue;
//         this.StatusType = ResponseStatusType.Success;
//         this.StatusCode = argStatusCode;
//         this.StatusDescription = argStatusDescription;
//         this.ErrorData = null;
//     }
//     public SetWarningResult(successValue: T, argStatusCode: number, argStatusDescription: string) {
//         this.Value = successValue;
//         this.StatusType = ResponseStatusType.Warning;
//         this.StatusCode = argStatusCode;
//         this.StatusDescription = argStatusDescription;
//         this.ErrorData = null;
//     }
//     public SetErrorResult(argStatusType: ResponseStatusType, argStatusCode: number, argStatusDescription: string,
//         argErrorType: ErrorType, argErrorNumber: number, errorMessage: string, argErrorReason: string,
//         argErrorDescription: string, argErrorSubSystem: ErrorSourceSubSystem, argErrorDetailsList?: IErrorDetails[],
//         argValidationResult?:ValidationResult) {
//         //this.Value = null;
//         this.StatusType = argStatusType;
//         this.StatusCode = argStatusCode;
//         this.StatusDescription = argStatusDescription;
//         this.ErrorData = this.createErrorData(argErrorType, argErrorNumber, errorMessage, argErrorReason,
//             argErrorDescription, argErrorSubSystem, argErrorDetailsList);
//     }
//     public AddErrorDetailsToErrorDetailsList(argErrorDetailsList: IErrorDetails[], argErrorDetails: IErrorDetails) {
//         // if (!this.ErrorData) {
//         //     console.log('Creating general ErrorData');
//         //     this.ErrorData = this.createErrorData(ErrorType.Unknown, 500, 'Internal server error', '',
//         //         'Internal server error', ErrorSourceSubSystem.Unknown, new Array());
//         // }
//         argErrorDetailsList.push(argErrorDetails);
//     }
//     private createErrorData(argErrorType: ErrorType, argErrorNumber: number, errorMessage: string, argErrorReason: string,
//         argErrorDescription: string, argErrorSubSystem: ErrorSourceSubSystem, argErrorDetails: IErrorDetails[]): ErrorData {
//         return new ErrorData(argErrorNumber, argErrorType, argErrorSubSystem,
//             argErrorDescription, argErrorReason, argErrorDetails);
//     }
//     public ErrorSummary(): string {
//         let result: string = '';
//         for (let ed of this.ErrorData.ErrorDetailsList) {
//             result = result + ed.ErrorMessage + ', '
//         }
//         return result;
//     }
// }
// export class ErrorData {
//     constructor(
//         public ErrorNumber: number,
//         public ErrorType: ErrorType,
//         public ErrorSourceSubsystem: ErrorSourceSubSystem,
//         public ErrorDescription: string,
//         public ProbableCause: string,
//         public ErrorDetailsList: IErrorDetails[]) { }
// }
// export enum ErrorType {
//     Unknown = 0,
//     InputError = 1,
//     AuthorizationError = 2,
//     ContentAccessPermissionError = 3,
//     ServerInternalError = 4
// }
// export enum ErrorSourceSubSystem {
//     Unknown = 0,
//     WebAPI = 1,
//     Authorization = 2,
//     Authentication = 3,
//     Node = 4
// }
// export enum ResponseStatusType {
//     Info = 1,
//     Error = 2,
//     Warning = 3,
//     Success = 4
// }
// export interface IErrorDetails {
//     ErrorNumber: number;
//     ErrorMessage: string;
//     ErrorDetails: IErrorDetails;
// }
// // export class KorvaiValidationErrorDetails implements IErrorDetails {
// //     constructor(public ErrorNumber: number,
// //         public ErrorMessage: string,
// //         public ErrorDetails: IErrorDetails,
// //         public ErroredEntity:KorvaiClip|KorvaiPart|Korvai) { }  
// // }
//# sourceMappingURL=validator.js.map