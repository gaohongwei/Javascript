var HOST = '127.0.0.1';
var PORT = 1337;
var net = require('net');
var server = net.createServer(sock_processor);
function logger(str){
  console.log(str);
}

function sock_processor(sock) {
    // A connection - a socket object is assigned to the connection automatically
    logger('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    // Add a 'data','close' event handler to this instance of socket
    sock.on('data', function(data) {
        logger(sock.remoteAddress + ': ' + data);
        sock.write('Back: ' + data +'\n');
    });
    sock.on('end', function() {
      logger('server disconnected');
    });
    sock.on('close', function(data) {
        logger('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
}

server.listen(PORT, function() { //'listening' listener
  logger('Server is listening on ' + HOST +':'+ PORT);
});

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    logger('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
