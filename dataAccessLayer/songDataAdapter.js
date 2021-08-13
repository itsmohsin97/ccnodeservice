"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongDataAdapter = void 0;
const dalResponse = require("../snAppServerResponse/ErrorData");
const ErrorData_1 = require("../snAppServerResponse/ErrorData");
let models = require('../sequelizer/models/index.js');
let uuid = require('node-uuid');
let sequelize = models.sequelize;
class SongDataAdapter {
    ///////////////////////////////////////////  CREATING SONG   ////////////////////////////////////////////////
    static createSong(argSongDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        // console.log("DA",argSongDTO.songName);
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.song.create({
                SongName: argSongDTO.songName,
                SongUrl: argSongDTO.songUrl,
                Language: argSongDTO.language,
                Remark: argSongDTO.remark,
                FilePath: argSongDTO.filePath,
                SingerId: argSongDTO.singerId,
                ComposerId: argSongDTO.composerId,
                TalamId: argSongDTO.talamId,
                RagamId: argSongDTO.ragamId,
                DeityId: argSongDTO.deityId,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
                console.log("Error while creating Song-DA catch", error);
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while creating Song', ErrorData_1.ErrorType.Unknown, 11, 'Error while creating Song', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            });
        });
    } // public static async createSong(argSongDTO: songDTO.SongListDTO)
    static createComposer(argComposerDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.composer.create({
                name: argComposerDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
        });
    } //  public static createComposer(argComposerDTO: songDTO.ComposerDTO)
    static createSinger(argSingerDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.singer.create({
                name: argSingerDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
        });
    } //  public static createSinger(argSingerDTO: songDTO.SingerDTO)
    static createTalam(argTalamDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.talam.create({
                name: argTalamDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
        });
    } //   public static createTalam(argTalamDTO: songDTO.TalamDTO)
    static createRagam(argRagamDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.ragam.create({
                name: argRagamDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
        });
    } //public static createRagam(argRagamDTO: songDTO.RagamDTO)
    static createDeity(argDeityDTO) {
        let returnValue = new dalResponse.snWebResponseEx();
        return sequelize.transaction({ autocommit: true }, function (t) {
            return models.deity.create({
                name: argDeityDTO.name,
                createdAt: sequelize.NOW,
                updatedAt: sequelize.NOW
            }, { transaction: t })
                .then((createSnVstInstrument) => {
                if (createSnVstInstrument !== null && createSnVstInstrument !== undefined) {
                    returnValue.SetSuccessResult(createSnVstInstrument.null, ErrorData_1.StatusCode.Success, "");
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
        });
    } //public static createDeity(argDeityDTO: songDTO.DeityDTO)
    static getSongDetailsById(argSongId) {
        const returnValue = new dalResponse.snWebResponseEx();
        console.log("songId", argSongId);
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
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting SongDetails by Id', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
                returnValue.Value = null;
                returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting SongDetails by Id', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                return returnValue;
            }
        })
            .catch((error) => {
            returnValue.Value = null;
            returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting SongDetails by Id', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting SongDetails by Id', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
            return returnValue;
        });
    } //  public static getSongDetailsById(argId:string)
    static getComposers() {
        const returnValue = new dalResponse.snWebResponseEx();
        return models.composer.findAll({}).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting composers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting composers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
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
    } // public static getAllComposers()
    static getSingers() {
        const returnValue = new dalResponse.snWebResponseEx();
        return models.singer.findAll({}).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting singers', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting singers', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
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
    } // public static getAllSingers()
    static getTalams() {
        const returnValue = new dalResponse.snWebResponseEx();
        return models.talam.findAll({}).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting talams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting talams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
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
    } // public static getTalams()
    static getRagams() {
        const returnValue = new dalResponse.snWebResponseEx();
        return models.ragam.findAll({}).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting ragams', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting ragams', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
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
    } //public static getRagams()
    static getDeitys() {
        const returnValue = new dalResponse.snWebResponseEx();
        return models.deity.findAll({}).then((response) => {
            try {
                if (response !== null) {
                    returnValue.SetSuccessResult(response, response.StatusCode, response.StatusDescription, response.ErrorData);
                    return returnValue;
                }
                else {
                    returnValue.Value = null;
                    returnValue.SetErrorResult(ErrorData_1.ResponseStatusType.Error, 500, 'Error while getting deitys', ErrorData_1.ErrorType.Unknown, 11, 'Error while getting deitys', '', '', ErrorData_1.ErrorSourceSubSystem.Node, null);
                    return returnValue;
                }
            }
            catch (exception) {
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
} // export class SongDataAdapter{
exports.SongDataAdapter = SongDataAdapter;
//# sourceMappingURL=songDataAdapter.js.map