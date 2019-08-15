const express = require("express");
const server = express();
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const bodyparser = require("body-parser");

const Mock = require("mockjs");

const config = require("./config");

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({
  extended:false
}));

function mock(data,params){
  if(Object.prototype.toString.call(data)=="[object Object]"){//如果是个对象的话就直接返回
    return Mock.mock(data);
  }
  else if(typeof data === "function"){
    return Mock.mock(data(params));
  }
  else{
    return "error: data should be a function or object";
  }
}

config.forEach(({method,url,data}) => {
  if(method=="get"){
    server.get(url,(req,res)=>{
      res.json(mock(data,req.query));
    });
  }
  else if(method == "post"){
    server.post(url, multipartMiddleware,(req,res)=>{
      res.json(mock(data,req.body));
    });
  }
  else if(method == "jsonp"){
    server.get(url, (req, res) => {
      const query = req.query;

      const mockData = JSON.stringify(mock(data, req.query));

      const callback =
        "typeof " +
        query.callback +
        ' === "function" && ' +
        query.callback +
        "(" +
        mockData +
        ")";

      res.send(callback);
    });
  }
});

let port = 8081;
process.argv.forEach((element,index,array)=>{
  if(element == "--port"){
    port = Number(array[index+1])||8081;
  }
});

module.exports = server.listen(port,()=>{
  console.info(`开始监听${port}端口`);
});