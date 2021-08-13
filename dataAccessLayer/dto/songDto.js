"use strict";
// export class SongListDTO{
//     constructor(public songs: SongDTO[]) { }
// }//export class SongDTO{
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeityDTO = exports.RagamDTO = exports.TalamDTO = exports.SingerDTO = exports.ComposerDTO = exports.SongDTO = void 0;
class SongDTO {
    constructor(id, songName, songUrl, language, filePath, remark, singerId, composerId, talamId, ragamId, deityId) {
        this.id = id;
        this.songName = songName;
        this.songUrl = songUrl;
        this.language = language;
        this.filePath = filePath;
        this.remark = remark;
        this.singerId = singerId;
        this.composerId = composerId;
        this.talamId = talamId;
        this.ragamId = ragamId;
        this.deityId = deityId;
    }
} //export class SongDTO{
exports.SongDTO = SongDTO;
class ComposerDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
} //export class ComposerDTO {
exports.ComposerDTO = ComposerDTO;
class SingerDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
} //export class SingerDTO {
exports.SingerDTO = SingerDTO;
class TalamDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
} //export class TalamDTO {
exports.TalamDTO = TalamDTO;
class RagamDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
} //export class RagamDTO {
exports.RagamDTO = RagamDTO;
class DeityDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
} //export class DeityDTO {
exports.DeityDTO = DeityDTO;
//# sourceMappingURL=songDto.js.map