var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 5000, host: 'localhost' });

var dogwaterOptions = {
  connections: {
    databaseDB : {
      adapter: 'floppyDisk'
    }
  },
  adapters:{
     floppyDisk : 'sails-disk'
  },
  models: [require('./models/database')]
};

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
