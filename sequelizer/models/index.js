'use strict';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM('../../index.html').window.document;
var fs = require('fs');
var path = require('path');
var sequelizeImport = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../../config.json')['dbconfig'][env];
const config = require(path.join(__dirname + '/../../config.js'))[env];
if (config.use_env_variable) {
    // var sequelizeLocal = new sequelizeImport(process.env[config.use_env_variable]);

    // var sequelizeLocal = new sequelizeImport(process.env.database, process.env.db_user_name, process.env.db_password, process.env.databasehost);
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
    sequelizeLocal
        .authenticate()
        .then(function (err) {
            console.log('Successfully connected database...!!!');
            console.log(config);

        }, function (err) {
            console.log(err);
            console.log('Unable to connect to the database: ' + err + "database host is " + config.host);
        });
} else {
    var sequelizeLocal = new sequelizeImport(config.database, config.username, config.password, config);
    sequelizeLocal
        .authenticate()
        .then(function (err) {
            console.log('Successfully connected database...!!!');
            console.log(config);

        }, function (err) {
            console.log('Unable to connect to the database: ' + err + "database host is " + config.host);
        });
}

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = sequelizeImport;
db.sequelize = sequelizeLocal;

db.song = require('./song.js')(sequelizeLocal, sequelizeImport);
db.composer = require('./composer.js')(sequelizeLocal, sequelizeImport);
db.ragam = require('./ragam.js')(sequelizeLocal, sequelizeImport);
db.singer = require('./singer.js')(sequelizeLocal, sequelizeImport);
db.talam = require('./talam.js')(sequelizeLocal, sequelizeImport);
db.deity = require('./deity.js')(sequelizeLocal, sequelizeImport);

db.song.belongsTo(db.composer);
db.composer.hasMany(db.song);

db.song.belongsTo(db.ragam);
db.ragam.hasMany(db.song);

db.song.belongsTo(db.talam);
db.talam.hasMany(db.song);

db.song.belongsTo(db.deity);
db.deity.hasMany(db.song);

db.song.belongsTo(db.singer);
db.singer.hasMany(db.song);



module.exports = db;