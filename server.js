const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/ToDoRoute');
require('dotenv').config()
const app=express()
const cors=require('cors')

const PORT=process.env.PORT||5000 



mongoose.connect(process.env.MONGO_URL).then(()=>console.log(`connected to mongoDB`))
.catch((err)=>console.log(err));
app.listen(PORT, () => console.log(`Listening on:${PORT}`));
app.use(express.json())
app.use(cors())
app.use(routes);
