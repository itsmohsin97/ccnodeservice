"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnWebResponse = void 0;
class SnWebResponse {
    /**
     * This function is used to decide whether the response is success or error
     * Which is decided if the httpStatusNumber=200 & errorNumber=0 &  errorSource= null
     */
    isSuccess() {
        if (this.httpStatusNumber < 400 && this.errorNumber == 0 && this.errorSource == null) {
            return true;
        }
        else {
            false;
        }
    } //public isSuccess(): boolean 
    /**
     * Set the success response value by passing the following parameters
     * @param successValue
     */
    SetSuccessResult(successValue) {
        this.value = successValue;
        this.errorNumber == 0;
        this.errorSource == null;
        this.httpStatusNumber = 200;
        this.errorType = 0;
    } //  public SetSuccessResult(successValue: T) 
    /**
     * AddErrorDescriion to the snWebResponse by passing the following parameters
     * @param argHttpStatusNumber:number
     * @param errorNumber:number
     * @param errorSource:string
     * @param argsnErrorDetailObject:ISnApplicationError
     */
    AddErrorDescription(argHttpStatusNumber, errorNumber, errorSource, argsnErrorDetailObject = null) {
        this.value = null;
        this.httpStatusNumber = argHttpStatusNumber;
        this.errorNumber = errorNumber;
        this.snErrorDetailObject = argsnErrorDetailObject;
    } // public AddErrorDescription(argHttpStatusNumber: number, errorNumber: number, errorSource: string, snErrorDetailObject: ISnApplicationError=null) {
} //export class SnWebResponse<T>
exports.SnWebResponse = SnWebResponse;
//# sourceMappingURL=SnWebResponse.js.map