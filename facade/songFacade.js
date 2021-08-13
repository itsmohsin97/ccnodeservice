"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongFacade = void 0;
const facadeResponse = require("../snAppServerResponse/ErrorData");
const ErrorData_1 = require("../snAppServerResponse/ErrorData");
const songDataAccessLayer = require("../dataAccessLayer/songDataAdapter");
class SongFacade {
    constructor() { }
    static createSong(argSongDetails) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createSong(argSongDetails)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } //  public static createSong(argSongDetails: songDTO.SongListDTO)
    static createComposer(argComposer) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createComposer(argComposer)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating composer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating composer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating composer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating composer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } // public static createComposer(argComposer: songDTO.ComposerDTO)
    static createSinger(argSinger) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createSinger(argSinger)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating singer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating singer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating singer', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating singer', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } //  public static createSinger(argSinger: songDTO.SingerDTO)
    static createTalam(argTalam) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createTalam(argTalam)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating talam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating talam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating talam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating talam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } // public static createTalam(argTalam: songDTO.TalamDTO)
    static createRagam(argRagam) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createRagam(argRagam)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating ragam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating ragam', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } // public static createRagam(argRagam: songDTO.RagamDTO)
    static createDeity(argDeity) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.createDeity(argDeity)
            .then((response) => {
            if (response != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
            }
            else {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating deity', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating deity', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating deity', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating deity', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } // public static createDeity(argDeity: songDTO.DeityDTO)
    static getSongById(argId) {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getSongDetailsById(argId)
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } //public static getSongById(): Promise<facadeResponse.snWebResponseEx<songDTO.SongDTO>>
    static getComposers() {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getComposers()
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } // public static getComposers()
    static getSingers() {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getSingers()
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } //public static getSingers()
    static getTalams() {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getTalams()
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } //public static getTalams()
    static getRagams() {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getRagams()
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } //  public static getRagams()
    static getDeitys() {
        let returnValue = new facadeResponse.snWebResponseEx();
        return songDataAccessLayer.SongDataAdapter.getDeitys()
            .then((response) => {
            if (response.Value != null) {
                returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                return returnValue;
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
            return returnValue;
        });
    } //public static getDeitys()
} //export class SongFacade 
exports.SongFacade = SongFacade;
//# sourceMappingURL=songFacade.js.map