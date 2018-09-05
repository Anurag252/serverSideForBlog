var http = require('http');
var json = assign();
function assign() {
    json = JSON.parse(" {\n            \"response\": [\n              \n                { \n                  \"question\": \"what is csharp\",\n                  \"answer\": \"this is csharp\"\n                }\n              \n            ]\n          }");
    return json;
}
function addData(data) {
    if (data !== undefined) {
        json.response.push(new Responses(data.question, data.answer));
        console.log(json);
        return null;
    }
    else {
        return json;
    }
}
var Responses = /** @class */ (function () {
    function Responses(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    return Responses;
}());
var server = http.createServer(function (req, res) {
    console.log(json);
    var jsonData = JSON.stringify(json);
    if (req.url = "/chsarp") {
        if (req.method == "GET") {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Request-Method', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.write(jsonData);
        }
        if (req.method == "POST") {
            req.on('data', function (data) {
                var resp = JSON.parse(data);
                addData(resp);
            });
            req.on('end', function () {
            });
        }
    }
    if (req.url = "/angular") {
        res.write("");
    }
    if (req.url = "/webApi") {
        res.write("");
    }
    if (req.url = "/sapsecurity") {
        res.write("");
    }
    res.end();
});
server.on('clientError', function (err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(process.env.PORT || 8000);
