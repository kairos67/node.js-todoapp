var sql = require('mssql');//++기본문법

const sqlConfig = {
  user: "sa",
  password: 'N41@nouvolution',
  database: 'DoDo',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    cryptoCredentialsDetails: {
      minVersion: 'TLSv1'
    }
  }
}

const express = require("express");
const app = express();
//----

app.listen(9080, function () {
  console.log("listening on 9080");
});

app.get("/pet", function (요청, 응답) {
  응답.send("pet 쇼핑입니다.");
});

app.get("/beauty", function (요청, 응답) {
  응답.send("Beauty용품 쇼핑입니다.");
});

app.get("/sql", function (요청, 응답) {
  //응답.send(result);
  응답.send("test");
});

// try {
//   // make sure that any items are correctly URL encoded in the connection string
//   await sql.connect(sqlConfig)
//   const result = await sql.query`select * from dbo.nvlt_user`
  

//   console.log(result)
//  } catch (err) {
//   // ... error checks
//   console.log("Error");
//   console.log(err)
//  }


app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/write", function (요청, 응답) {
  응답.sendFile(__dirname + "/write.html");
});
//git test
