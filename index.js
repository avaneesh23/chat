var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at http://192.168.1.121:" + app.get('port'))
})
