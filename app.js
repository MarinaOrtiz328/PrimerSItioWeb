const http= require('http');
const fs= require('fs');

//http => (request, response)
//const data= fs.readFileSync('./WWW/file.txt');
// HTML, CSS, JS, IMG, sonido, video

http.createServer((request, response)=>{
  console.log(request.url);
  const file = request.url=='/'?'./WWW/index.html': `./WWW${request.url}`;
  //const file2='./WWW/imagen.html';
      //"hola.como estas"=> split(".").pop()
        fs.readFile(file, (err,data)=>{
          if(err){
            response.writeHead(404, {"Content.Type": "text/plain"});
            response.write("not found");
            response.end();
          }else{
            response.writeHead(404, {"Content.Type": "text/plain"});
            response.write(data);
            response.end();
            }
        });

}).listen(8888);
