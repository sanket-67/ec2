import express from 'express'; 

const app = express(); 


app.listen(3000,"0.0.0.0",
    ()=>{console.log(`the server is running on http://localhost:${3000}`)
})