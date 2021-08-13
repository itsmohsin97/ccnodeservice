"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongService = void 0;
const axios = require("axios");
let config = require('');
class SongService {
} //export class SongService {
exports.SongService = SongService;
SongService.requestUri = "http://" + config.webApi.host + ":" + config.webApi.port + "/";
//# sourceMappingURL=libraryService.js.map