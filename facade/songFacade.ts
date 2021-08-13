import * as facadeResponse from '../snAppServerResponse/ErrorData';
import { ResponseStatusType, ErrorType, ErrorSourceSubSystem, StatusCode } from '../snAppServerResponse/ErrorData';
import * as songDTO from '../dataAccessLayer/dto/songDto';
import * as songDataAccessLayer from '../dataAccessLayer/songDataAdapter';


export class SongFacade {

    constructor() { }

    public static createSong(argSongDetails: songDTO.SongDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createSong(argSongDetails)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                    11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }//  public static createSong(argSongDetails: songDTO.SongListDTO)

    public static createComposer(argComposer: songDTO.ComposerDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createComposer(argComposer)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating composer', ErrorType.Unknown,
                    11, 'Error while creating composer', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating composer', ErrorType.Unknown,
                11, 'Error while creating composer', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }// public static createComposer(argComposer: songDTO.ComposerDTO)

    public static createSinger(argSinger: songDTO.SingerDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createSinger(argSinger)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating singer', ErrorType.Unknown,
                    11, 'Error while creating singer', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating singer', ErrorType.Unknown,
                11, 'Error while creating singer', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }//  public static createSinger(argSinger: songDTO.SingerDTO)

    public static createTalam(argTalam: songDTO.TalamDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createTalam(argTalam)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating talam', ErrorType.Unknown,
                    11, 'Error while creating talam', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating talam', ErrorType.Unknown,
                11, 'Error while creating talam', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }// public static createTalam(argTalam: songDTO.TalamDTO)

    public static createRagam(argRagam: songDTO.RagamDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createRagam(argRagam)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorType.Unknown,
                    11, 'Error while creating ragam', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating ragam', ErrorType.Unknown,
                11, 'Error while creating ragam', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }// public static createRagam(argRagam: songDTO.RagamDTO)

    public static createDeity(argDeity: songDTO.DeityDTO): Promise<facadeResponse.snWebResponseEx<string>> {

        let returnValue: facadeResponse.snWebResponseEx<string> = new facadeResponse.snWebResponseEx<string>();
        return songDataAccessLayer.SongDataAdapter.createDeity(argDeity)
            .then((response: facadeResponse.snWebResponseEx<string>) => {
                if (response != null) {
                    returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating deity', ErrorType.Unknown,
                    11, 'Error while creating deity', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating deity', ErrorType.Unknown,
                11, 'Error while creating deity', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            })
    }// public static createDeity(argDeity: songDTO.DeityDTO)


    public static getSongById(argId:number): Promise<facadeResponse.snWebResponseEx<songDTO.SongDTO>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.SongDTO> = new facadeResponse.snWebResponseEx<songDTO.SongDTO>();

        return songDataAccessLayer.SongDataAdapter.getSongDetailsById(argId)
            .then((response: facadeResponse.snWebResponseEx<songDTO.SongDTO>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } //public static getSongById(): Promise<facadeResponse.snWebResponseEx<songDTO.SongDTO>>

    public static getComposers(): Promise<facadeResponse.snWebResponseEx<songDTO.ComposerDTO[]>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.ComposerDTO[]> = new facadeResponse.snWebResponseEx<songDTO.ComposerDTO[]>();

        return songDataAccessLayer.SongDataAdapter.getComposers()
            .then((response: facadeResponse.snWebResponseEx<songDTO.ComposerDTO[]>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } // public static getComposers()

    public static getSingers(): Promise<facadeResponse.snWebResponseEx<songDTO.SingerDTO[]>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.SingerDTO[]> = new facadeResponse.snWebResponseEx<songDTO.SingerDTO[]>();

        return songDataAccessLayer.SongDataAdapter.getSingers()
            .then((response: facadeResponse.snWebResponseEx<songDTO.SingerDTO[]>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } //public static getSingers()

    public static getTalams(): Promise<facadeResponse.snWebResponseEx<songDTO.TalamDTO[]>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.TalamDTO[]> = new facadeResponse.snWebResponseEx<songDTO.TalamDTO[]>();

        return songDataAccessLayer.SongDataAdapter.getTalams()
            .then((response: facadeResponse.snWebResponseEx<songDTO.TalamDTO[]>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } //public static getTalams()

    public static getRagams(): Promise<facadeResponse.snWebResponseEx<songDTO.RagamDTO[]>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.RagamDTO[]> = new facadeResponse.snWebResponseEx<songDTO.RagamDTO[]>();

        return songDataAccessLayer.SongDataAdapter.getRagams()
            .then((response: facadeResponse.snWebResponseEx<songDTO.RagamDTO[]>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } //  public static getRagams()

    public static getDeitys(): Promise<facadeResponse.snWebResponseEx<songDTO.DeityDTO[]>> {

        let returnValue: facadeResponse.snWebResponseEx<songDTO.DeityDTO[]> = new facadeResponse.snWebResponseEx<songDTO.DeityDTO[]>();

        return songDataAccessLayer.SongDataAdapter.getDeitys()
            .then((response: facadeResponse.snWebResponseEx<songDTO.DeityDTO[]>) => {
                if (response.Value != null) {
                   returnValue.SetSuccessResult(response.Value, response.StatusCode, response.StatusDescription, response.ErrorData);
                   return returnValue;
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
                return returnValue;
            })

    } //public static getDeitys()



}//export class SongFacade 