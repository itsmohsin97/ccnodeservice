import * as express from 'express';
import * as controllerResponse from '../snAppServerResponse/ErrorData';
import { ResponseStatusType, ErrorType, ErrorSourceSubSystem, StatusCode } from '../snAppServerResponse/ErrorData';
import * as songFacade from '../facade/songFacade';
import * as commonModel from '../dataAccessLayer/dto/songDto';

export class SongController {

    public createSong(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const songsDetails: commonModel.SongDTO = postRequest.body.song;
            console.log("controller",songsDetails);
            return songFacade.SongFacade.createSong(songsDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                    11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } //public createSong(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponse<string>>
   
    public createComposer(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const composerDetails: commonModel.ComposerDTO = postRequest.body.composer;
            return songFacade.SongFacade.createComposer(composerDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating composer', ErrorType.Unknown,
                    11, 'Error while creating composer', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating composer', ErrorType.Unknown,
                11, 'Error while creating composer', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } //public createComposer(postRequest: express.Request, postResponse: express.Response)

    public createSinger(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const singerDetails: commonModel.SingerDTO = postRequest.body.singer;
            return songFacade.SongFacade.createSinger(singerDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating singer', ErrorType.Unknown,
                    11, 'Error while creating singer', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating singer', ErrorType.Unknown,
                11, 'Error while creating singer', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } // public createSinger(postRequest: express.Request, postResponse: express.Response)

    public createTalam(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const talamDetails: commonModel.TalamDTO = postRequest.body.talam;
            return songFacade.SongFacade.createTalam(talamDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating talam', ErrorType.Unknown,
                    11, 'Error while creating talam', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating talam', ErrorType.Unknown,
                11, 'Error while creating talam', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } //public createTalam(postRequest: express.Request, postResponse: express.Response)

    public createRagam(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const ragamDetails: commonModel.RagamDTO = postRequest.body.ragam;
            return songFacade.SongFacade.createRagam(ragamDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorType.Unknown,
                    11, 'Error while creating ragam', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorType.Unknown,
                11, 'Error while creating ragam', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } // public createRagam(postRequest: express.Request, postResponse: express.Response)

    public createDeity(postRequest: express.Request, postResponse: express.Response): Promise<controllerResponse.snWebResponseEx<string>> {

        let returnValue: controllerResponse.snWebResponseEx<string> = new controllerResponse.snWebResponseEx<string>();

        const deityDetails: commonModel.DeityDTO = postRequest.body.deity;
            return songFacade.SongFacade.createDeity(deityDetails)
            .then((response: controllerResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    postResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating deity', ErrorType.Unknown,
                    11, 'Error while creating deity', '', '', ErrorSourceSubSystem.Node, null);
                    postResponse.send(returnValue);
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating deity', ErrorType.Unknown,
                11, 'Error while creating deity', '', '', ErrorSourceSubSystem.Node, null);
                postResponse.send(returnValue);
                return postResponse;
            })

    } // public createDeity(postRequest: express.Request, postResponse: express.Response)


    public getSongDetailsById(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.SongDTO>> {
        const returnValue: controllerResponse.snWebResponseEx<commonModel.SongDTO> = new controllerResponse.snWebResponseEx<commonModel.SongDTO>();

        const songId: number = getRequest.query.songId;
        return songFacade.SongFacade.getSongById(songId)
            .then((response: controllerResponse.snWebResponseEx<commonModel.SongDTO>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting Song', ErrorType.Unknown,
                    11, 'Error while getting Song', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting Song', ErrorType.Unknown,
                11, 'Error while getting Song', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
  
    } //public getSongById(getRequest: express.Request, getResponse: express.Response)

    public getComposers(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.ComposerDTO[]>> {
       
        const returnValue: controllerResponse.snWebResponseEx<commonModel.ComposerDTO[]> = new controllerResponse.snWebResponseEx<commonModel.ComposerDTO[]>();

        return songFacade.SongFacade.getComposers()
            .then((response: controllerResponse.snWebResponseEx<commonModel.ComposerDTO[]>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting composers', ErrorType.Unknown,
                    11, 'Error while getting composers', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting composers', ErrorType.Unknown,
                11, 'Error while getting composers', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
  
    } // public getComposers(getRequest: express.Request, getResponse: express.Response)

    public getSingers(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.SingerDTO[]>> {
       
        const returnValue: controllerResponse.snWebResponseEx<commonModel.SingerDTO[]> = new controllerResponse.snWebResponseEx<commonModel.SingerDTO[]>();

        return songFacade.SongFacade.getSingers()
            .then((response: controllerResponse.snWebResponseEx<commonModel.SingerDTO[]>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting singers', ErrorType.Unknown,
                    11, 'Error while getting singers', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting singers', ErrorType.Unknown,
                11, 'Error while getting singers', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
  
    } // public getSingers(getRequest: express.Request, getResponse: express.Response)

    public getTalams(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.TalamDTO[]>> {
        
        const returnValue: controllerResponse.snWebResponseEx<commonModel.TalamDTO[]> = new controllerResponse.snWebResponseEx<commonModel.TalamDTO[]>();

        return songFacade.SongFacade.getTalams()
            .then((response: controllerResponse.snWebResponseEx<commonModel.TalamDTO[]>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting talams', ErrorType.Unknown,
                    11, 'Error while getting talams', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting talams', ErrorType.Unknown,
                11, 'Error while getting talams', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
    } //public getTalams(getRequest: express.Request, getResponse: express.Response)

    public getRagams(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.RagamDTO[]>> {
    
        const returnValue: controllerResponse.snWebResponseEx<commonModel.RagamDTO[]> = new controllerResponse.snWebResponseEx<commonModel.RagamDTO[]>();

        return songFacade.SongFacade.getRagams()
            .then((response: controllerResponse.snWebResponseEx<commonModel.RagamDTO[]>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorType.Unknown,
                    11, 'Error while getting ragams', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorType.Unknown,
                11, 'Error while getting ragams', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
  
    } //public getRagams(getRequest: express.Request, getResponse: express.Response)


    public getDeitys(getRequest: express.Request, getResponse: express.Response): Promise<controllerResponse.snWebResponseEx<commonModel.DeityDTO[]>> {

        const returnValue: controllerResponse.snWebResponseEx<commonModel.DeityDTO[]> = new controllerResponse.snWebResponseEx<commonModel.DeityDTO[]>();

        return songFacade.SongFacade.getDeitys()
            .then((response: controllerResponse.snWebResponseEx<commonModel.DeityDTO[]>) => {
                if (response.Value !== null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    getResponse.send(returnValue);
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorType.Unknown,
                    11, 'Error while getting deitys', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorType.Unknown,
                11, 'Error while getting deitys', '', '', ErrorSourceSubSystem.Node, null);
                getResponse.send(returnValue);
                return returnValue;
            });
  
    } //public getDeitys(getRequest: express.Request, getResponse: express.Response)

}//export class SongController 