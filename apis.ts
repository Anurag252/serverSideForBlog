declare function require(name:string) ;
const http = require('http');
var json : JsonObj = assign();


function assign() : JsonObj
{

json = JSON.parse(
       ` {
            "response": [
              
                { 
                  "question": "what is csharp",
                  "answer": "this is csharp"
                }
              
            ]
          }`);   
            return json;
}


function addData(data : Responses) : any
{
    if(data !== undefined)
    {
json.response.push( new Responses(data.question,data.answer));
console.log(json);
return null;
    }
    else
    {
        return json;
    }
}




interface JsonObj
{
      response :[Responses]
}

 class Responses
{
    question : string
    answer : string
    constructor(question : string , answer: string)
    {
        this.question = question;
        this.answer = answer;
    }
}






const server = http.createServer((req, res) => {
   console.log(json);
    var jsonData = JSON.stringify(json);
    
    if(req.url="/chsarp")
    {
        if(req.method == "GET")
         res.write(jsonData);
        if(req.method == "POST")
        {
           
            req.on('data', function (data) {
        
               let resp : Responses = JSON.parse(data);
               addData(resp);
                
            });
            req.on('end', function () {
              
            });
        }
    }

    if(req.url="/angular")
    {
    res.write("");
    }


    if(req.url="/webApi")
    {
    res.write("");

    }

    if(req.url="/sapsecurity")
    {
    res.write("");
    }
    res.end();
  });
  server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
  server.listen(8000);