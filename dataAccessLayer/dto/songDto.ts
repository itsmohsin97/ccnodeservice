// export class SongListDTO{
//     constructor(public songs: SongDTO[]) { }
// }//export class SongDTO{


export class SongDTO{
    constructor(public id: string,
        public songName: string,
        public songUrl: string,
        public language: string,
        public filePath: string,
        public remark: string,
        public singerId: number,
        public composerId: number,
        public talamId: number,
        public ragamId: number,
        public deityId: number
    ) { }

}//export class SongDTO{

export class ComposerDTO {
    constructor(public id: number,
        public name: string) { }
}//export class ComposerDTO {

export class SingerDTO {
    constructor(public id: number,
        public name: string) { }
}//export class SingerDTO {

export class TalamDTO {
    constructor(public id: number,
        public name: string) { }
}//export class TalamDTO {

export class RagamDTO {
    constructor(public id: number,
        public name: string) { }
}//export class RagamDTO {


export class DeityDTO {
    constructor(public id: number,
        public name: string) { }
}//export class DeityDTO {
