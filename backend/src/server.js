import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

import notesRoutes from "./routes/noteRoutes.js"
import { connectDB } from './confiq/db.js'
//import rateLimit from './confiq/upstash.js'
import rateLimiter from './middleware/ratelimiter.js'

dotenv.config()

const app= express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

//middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: 'http://localhost:5173',
      })
    );
  }
  

app.use(express.json()) // this middleare will parse JSON odies: req,body
app.use(rateLimiter)

app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
    next()
})
app.use("/api/notes", notesRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"../frontend","dist","index.html")) 
})
}

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server started on PORT:", PORT)
    })
})


