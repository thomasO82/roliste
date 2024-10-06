const express = require('express')
const { PrismaClient } = require('@prisma/client');

require('dotenv').config()

const prisma = new PrismaClient();


const app = express()

app.listen(process.env.PORT, err =>{
    err ? console.log(err) : console.log("Server work on port " + process.env.PORT);
})

app.get('/post',async(req,res)=>{
   const test = await prisma.user.findMany()
   res.json(test)
})