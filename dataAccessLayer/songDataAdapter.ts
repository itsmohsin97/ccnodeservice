import * as songDTO from './dto/songDto';
import * as dalResponse from '../snAppServerResponse/ErrorData';
import { ResponseStatusType, ErrorType, ErrorSourceSubSystem, StatusCode } from '../snAppServerResponse/ErrorData';
import { cosh } from 'core-js/fn/number';
let models = require('../sequelizer/models/index.js');
let uuid = require('node-uuid');
let sequelize = models.sequelize;


export class SongDataAdapter {

    ///////////////////////////////////////////  CREATING SONG   ////////////////////////////////////////////////

    public static createSong(argSongDTO: songDTO.SongDTO): Promise<dalResponse.snWebResponseEx<string>> {

        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
       // console.log("DA",argSongDTO.songName);
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.song.create({
                SongName: argSongDTO.songName,
                SongUrl: argSongDTO.songUrl,
                Language: argSongDTO.language,
                Remark: argSongDTO.remark,
                FilePath: argSongDTO.filePath,
                SingerId: argSongDTO.singerId,
                ComposerId:  argSongDTO.composerId,
                TalamId: argSongDTO.talamId,
                RagamId: argSongDTO.ragamId,
                DeityId: argSongDTO.deityId,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
                        returnValue.Value = null;
                        returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                        11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                        return returnValue;
                    }
                })
                .catch((error) => {
                    returnValue.Value = null;
                    console.log("Error while creating Song-DA catch",error);
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while creating Song', ErrorType.Unknown,
                    11, 'Error while creating Song', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                });
        });
    }// public static async createSong(argSongDTO: songDTO.SongListDTO)

    public static createComposer(argComposerDTO: songDTO.ComposerDTO): Promise<dalResponse.snWebResponseEx<string>> {
        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.composer.create({
                name: argComposerDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
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
                });
        });
    }//  public static createComposer(argComposerDTO: songDTO.ComposerDTO)

    public static createSinger(argSingerDTO: songDTO.SingerDTO): Promise<dalResponse.snWebResponseEx<string>> {
        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.singer.create({
                name: argSingerDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
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
                });
        });
    }//  public static createSinger(argSingerDTO: songDTO.SingerDTO)

    public static createTalam(argTalamDTO: songDTO.TalamDTO): Promise<dalResponse.snWebResponseEx<string>> {
        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.talam.create({
                name: argTalamDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
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
                });
        });
    }//   public static createTalam(argTalamDTO: songDTO.TalamDTO)

    public static createRagam(argRagamDTO: songDTO.RagamDTO): Promise<dalResponse.snWebResponseEx<string>> {
        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.ragam.create({
                name: argRagamDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
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
                });
        });
    }//public static createRagam(argRagamDTO: songDTO.RagamDTO)

    public static createDeity(argDeityDTO: songDTO.DeityDTO): Promise<dalResponse.snWebResponseEx<string>> {
        let returnValue: dalResponse.snWebResponseEx<string> = new dalResponse.snWebResponseEx<string>();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.deity.create({
                name: argDeityDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                    if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                        returnValue.SetSuccessResult(createSnVstInstrument.null, StatusCode.Success, "");
                        return returnValue;
                    } else {
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
                });
        });
    }//public static createDeity(argDeityDTO: songDTO.DeityDTO)


    public static getSongDetailsById(argSongId:number): Promise<dalResponse.snWebResponseEx<songDTO.SongDTO>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.SongDTO> = new dalResponse.snWebResponseEx<songDTO.SongDTO>();
        console.log("songId",argSongId);
        return models.song.findOne({
            where: { id: { $eq: argSongId } }
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response.dataValues, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorType.Unknown,
                    11, 'Error while getting SongDetails by Id', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorType.Unknown,
                11, 'Error while getting SongDetails by Id', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
                returnValue.Value = null;
                returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorType.Unknown,
                    11, 'Error while getting SongDetails by Id', '', '', ErrorSourceSubSystem.Node, null);
                return returnValue;
            });
    }//  public static getSongDetailsById(argId:string)

    public static getComposers(): Promise<dalResponse.snWebResponseEx<songDTO.ComposerDTO[]>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.ComposerDTO[]> = new dalResponse.snWebResponseEx<songDTO.ComposerDTO[]>();
        return models.composer.findAll({
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting composers', ErrorType.Unknown,
                    11, 'Error while getting composers', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
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
            });
    }// public static getAllComposers()

    public static getSingers(): Promise<dalResponse.snWebResponseEx<songDTO.SingerDTO[]>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.SingerDTO[]> = new dalResponse.snWebResponseEx<songDTO.SingerDTO[]>();
        return models.singer.findAll({
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting singers', ErrorType.Unknown,
                    11, 'Error while getting singers', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
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
            });
    }// public static getAllSingers()

    public static getTalams(): Promise<dalResponse.snWebResponseEx<songDTO.TalamDTO[]>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.TalamDTO[]> = new dalResponse.snWebResponseEx<songDTO.TalamDTO[]>();
        return models.talam.findAll({
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting talams', ErrorType.Unknown,
                    11, 'Error while getting talams', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
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
            });
    }// public static getTalams()

    public static getRagams(): Promise<dalResponse.snWebResponseEx<songDTO.RagamDTO[]>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.RagamDTO[]> = new dalResponse.snWebResponseEx<songDTO.RagamDTO[]>();
        return models.ragam.findAll({
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorType.Unknown,
                    11, 'Error while getting ragams', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
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
            });
    }//public static getRagams()

    public static getDeitys(): Promise<dalResponse.snWebResponseEx<songDTO.DeityDTO[]>> {

        const returnValue: dalResponse.snWebResponseEx<songDTO.DeityDTO[]> = new dalResponse.snWebResponseEx<songDTO.DeityDTO[]>();
        return models.deity.findAll({
        }).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorType.Unknown,
                    11, 'Error while getting deitys', '', '', ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            } catch (exception) {
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
            });
    }//public static getDeitys()

}// export class SongDataAdapter{
