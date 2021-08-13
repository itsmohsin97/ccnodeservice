import * as express from 'express';
import * as path from 'path';
import * as  http from 'http';
let logger = require('morgan'); // To see log messages on Console
let config = require('./config.json');
let bodyParser = require('body-parser'); // To Read Request, Query and Body
let cors = require('cors'); // Cross Origin

import * as SongController from './controller/songController';

class SongNodeService {

    public express: express.Application;
    private songController: SongController.SongController;
    public isDocker: boolean = true;

    constructor() {
        this.startSNAppServers();
        this.startEMR();
    }


    private startSNAppServers(): void {
        this.songController = new SongController.SongController();

    }//   private startSNAppServers(): void 

    /**
     * Start Express Middleware and Routes.Hence the name EMR
     */
    private startEMR(): void {

        this.express = express();
        this.middleware();
        this.routes();
        this.setNodeConfiguartionFromDockerCommand();
    }// private startEMR(): void

    private middleware(): void {
        const d = new Date();
        this.express.set('port', process.env.Port || '3000');
        //    this.express.set('view engine', 'ejs'); // set up ejs for templating
        this.express.use(express.static(path.join(__dirname, 'dist')));
        this.express.use(logger('dev'));
        this.express.disable('x-powered-by');  //https://github.com/JacksonBates/pair-backend/issues/30
        this.express.use(cors({ origin: '*' }));
        this.express.use(function (req, res, next) {
            /*
             "Access-Control-Allow-Origin", "*"
             * response header indicates whether the response can be shared with resources with the given origin.
             * If the server specifies an origin host rather than "*",
             * then it must also include Origin in the Vary response header to indicate to clients
             that server responses will differ based on the value of the Origin request header.
           */
            res.header("Access-Control-Allow-Origin", "*");
            /*
             "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
              *  The simple headers, Accept, Accept-Language, Content-Language,
              *  Content-Type of either application/x-www-form-urlencoded, multipart/form-data, or text/plain
              *  are always available and don't need to be listed by this header.
            */
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            /*
             "Access-Control-Expose-Headers"
             * The Access-Control-Expose-Headers response header indicates which headers can be exposed
               as part of the response by listing their names
            */
            res.header("Access-Control-Expose-Headers", 'Content-Range,token,errorMesage,Cache-Control,');
            next();
        });

        this.express.use(bodyParser.urlencoded({ extended: true }));//To parse GET request parameters from urls
        this.express.use(bodyParser.json({ limit: '16mb' }));//To parse POST request parameters from request body.

    }//  private middleware(): void

    private routes(): void {
        this.express.get('/', function (req, res) {
            res.sendfile(path.join(__dirname, 'index.html'));
        });
        // this.express.get('/help', function (req, res) {
        //     res.sendfile(path.join(__dirname, 'apidoc/index.html'));
        // });

        /*Routes for SongNodeService*/
        this.express.post('/createSong', this.songController.createSong);
        this.express.post('/createComposer', this.songController.createComposer);
        this.express.post('/createSinger', this.songController.createSinger);
        this.express.post('/createTalam', this.songController.createTalam);
        this.express.post('/createRagam', this.songController.createRagam);
        this.express.post('/createDeity', this.songController.createDeity);
        this.express.get('/getSongById', this.songController.getSongDetailsById);
        this.express.get('/getComposers', this.songController.getComposers);
        this.express.get('/getSingers', this.songController.getSingers);
        this.express.get('/getTalams', this.songController.getTalams);
        this.express.get('/getRagams', this.songController.getRagams);
        this.express.get('/getDeitys', this.songController.getDeitys);

    }//  private routes(): void 

    private setNodeConfiguartionFromDockerCommand() {
        if (this.isDocker) {
            console.log("Docker:The Node server is runing on port " + process.env.Port);
            this.express.listen(process.env.Port);
        } else if (!this.isDocker) {
            console.log("Windows:The Node server is runing on host:" + config.nodeserver.host + " and port " + config.nodeserver.port);
            this.express.listen(config.nodeserver.port);
        }
    }//  private setNodeConfiguartionFromDockerCommand()

}//class SongNodeService //check

export default new SongNodeService().express;