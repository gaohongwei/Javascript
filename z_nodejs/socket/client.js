var net = require('net');

var client = new net.Socket();
client.connect(5000, '127.0.0.1', () => {
  console.log('Connected');
  for(var index=0;index<10;index++)
  client.write('Hello'+index);
  //client.end();
});

client.on('data', (data) => {
  console.log('Received: ' + data);

});

client.on('close', () => {
  console.log('Connection closed');
  client.destroy(); // kill client after server's response
});
