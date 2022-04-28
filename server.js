//++기본문법
const express = require("express");
const app = express();
//----

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/pet", function (요청, 응답) {
  응답.send("pet 쇼핑입니다.");
});

app.get("/beauty", function (요청, 응답) {
  응답.send("Beauty용품 쇼핑입니다.");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/write", function (요청, 응답) {
  응답.sendFile(__dirname + "/write.html");
});
//git test
