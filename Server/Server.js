import express from "express";

const app = express();




// middleware configuration;


let PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Server  API</h1>");
});

app.listen(PORT,()=>{
    console.log(`server running at PORT: ${PORT}`);
    
})