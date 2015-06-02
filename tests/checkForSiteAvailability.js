var request = require('request');

it('Server should respond to /', function (done) {
    request.get('http://google.com', function(error, response){
        expect(response.statusCode).toBe(200);
        done();
    });
});​




