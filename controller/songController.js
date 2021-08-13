"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const controllerResponse = require("../snAppServerResponse/ErrorData");
const ErrorData_1 = require("../snAppServerResponse/ErrorData");
const songFacade = require("../facade/songFacade");
class SongController {
    createSong(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const songsDetails = postRequest.body.song;
        console.log("controller", songsDetails);
        return songFacade.SongFacade.createSong(songsDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } //public createSong(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponse<string>>
    createComposer(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const composerDetails = postRequest.body.composer;
        return songFacade.SongFacade.createComposer(composerDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating composer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating composer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating composer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating composer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } //public createComposer(postRequest: express.Request, postResponse: express.Response)
    createSinger(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const singerDetails = postRequest.body.singer;
        return songFacade.SongFacade.createSinger(singerDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating singer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating singer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating singer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating singer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } // public createSinger(postRequest: express.Request, postResponse: express.Response)
    createTalam(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const talamDetails = postRequest.body.talam;
        return songFacade.SongFacade.createTalam(talamDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating talam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating talam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating talam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating talam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } //public createTalam(postRequest: express.Request, postResponse: express.Response)
    createRagam(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const ragamDetails = postRequest.body.ragam;
        return songFacade.SongFacade.createRagam(ragamDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating ragam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating ragam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } // public createRagam(postRequest: express.Request, postResponse: express.Response)
    createDeity(postRequest, postResponse) {
        let returnValue = new controllerResponse.snWebResponseEx();
        const deityDetails = postRequest.body.deity;
        return songFacade.SongFacade.createDeity(deityDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                postResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating deity', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating deity', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating deity', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating deity', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            postResponse.send(returnValue);
            return postResponse;
        });
    } // public createDeity(postRequest: express.Request, postResponse: express.Response)
    getSongDetailsById(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        const songId = getRequest.query.songId;
        return songFacade.SongFacade.getSongById(songId)
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } //public getSongById(getRequest: express.Request, getResponse: express.Response)
    getComposers(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        return songFacade.SongFacade.getComposers()
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting composers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting composers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting composers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting composers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } // public getComposers(getRequest: express.Request, getResponse: express.Response)
    getSingers(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        return songFacade.SongFacade.getSingers()
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting singers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting singers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting singers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting singers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } // public getSingers(getRequest: express.Request, getResponse: express.Response)
    getTalams(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        return songFacade.SongFacade.getTalams()
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting talams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting talams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting talams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting talams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } //public getTalams(getRequest: express.Request, getResponse: express.Response)
    getRagams(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        return songFacade.SongFacade.getRagams()
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting ragams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting ragams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } //public getRagams(getRequest: express.Request, getResponse: express.Response)
    getDeitys(getRequest, getResponse) {
        const returnValue = new controllerResponse.snWebResponseEx();
        return songFacade.SongFacade.getDeitys()
            .then((response) => {
            if (response.Value !== null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                getResponse.send(returnValue);
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting deitys', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting deitys', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            getResponse.send(returnValue);
            return returnValue;
        });
    } //public getDeitys(getRequest: express.Request, getResponse: express.Response)
} //export class SongController 
exports.SongController = SongController;
//# sourceMappingURL=songController.js.map