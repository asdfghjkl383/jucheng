const express = require("express");
const bodyParser = require("body-parser");
const db = require("./module/db");
const app = express();
const mongodb = require("mongodb");
app.use(bodyParser.json());
// 注册
app.post("/register",async function(req,res){
    const {userName,passWord} = req.body;
    const results = await db.insertOne("userName",{
        userName,
        passWord:passWord/1
    })
    if(results){
        res.json({
            ok:1,
            msg:"注册成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"注册失败"
        })
    }
})
// 登录
app.post("/login",async function(req,res){
    //接收参数
    const {userName,passWord} = req.body;
    // console.log(userName,passWord)
    const results = await db.findOne("userName",{
        userName,
        passWord:passWord/1
    })
    // console.log(result);
    if(results){
        res.json({
            ok:1,
            msg:"登陆成功"
        })
    }else{
        res.json({
            ok:-1,
            msg:"登录失败",
        })
    }
})

app.listen(8060,function(){
    console.log("success");
})