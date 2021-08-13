export class SnWebResponse<T>
{
    public httpStatusNumber: number;
    public value: T;
    public errorNumber: number;
    public errorType: number;
    public errorSource: string;
    public snErrorDetailObject: ISnApplicationError;

    /**
     * This function is used to decide whether the response is success or error
     * Which is decided if the httpStatusNumber=200 & errorNumber=0 &  errorSource= null
     */
    public isSuccess(): boolean {
        if (this.httpStatusNumber < 400 && this.errorNumber == 0 && this.errorSource == null) {
            return true;
        }
        else {
            false;
        }
    }//public isSuccess(): boolean 


    /**
     * Set the success response value by passing the following parameters
     * @param successValue
     */
    public SetSuccessResult(successValue: T) {
        this.value = successValue;
        this.errorNumber == 0;
        this.errorSource == null;
        this.httpStatusNumber = 200;
        this.errorType = 0;
    }//  public SetSuccessResult(successValue: T) 


   /**
    * AddErrorDescriion to the snWebResponse by passing the following parameters
    * @param argHttpStatusNumber:number
    * @param errorNumber:number
    * @param errorSource:string
    * @param argsnErrorDetailObject:ISnApplicationError
    */
    public AddErrorDescription(argHttpStatusNumber: number, errorNumber: number, errorSource: string, argsnErrorDetailObject: ISnApplicationError = null) {
        this.value = null;
        this.httpStatusNumber = argHttpStatusNumber;
        this.errorNumber = errorNumber;
        this.snErrorDetailObject = argsnErrorDetailObject;
    }// public AddErrorDescription(argHttpStatusNumber: number, errorNumber: number, errorSource: string, snErrorDetailObject: ISnApplicationError=null) {
}//export class SnWebResponse<T>


export interface ISnApplicationError {

}