const axios = require("axios");
let config = require('');

export class SongService {

    public static requestUri: string = "http://" + config.webApi.host + ":" + config.webApi.port + "/";

   // If you want to connect RestApi... do here //

}//export class SongService {