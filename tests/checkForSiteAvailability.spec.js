

it('Server should respond to / with status ok', function (done) {
  request('http://jerkovicl.github.io/', function (error, response, body) {
    expect(response.statusCode).toBe(200);
    done();
  });
});