require("dotenv").config();
const express=require("express");
const app=express();
const port =process.env.PORT;


const productRouter = require("./routes/product");

app.use(express.json());
app.use(productRouter);

const logger = (req,res,next) => {
    console.log(`${req.url} was made with ${req.method}`);
    next();
};

app.use(logger);
app.listen(port,()=>
{console.log(`Server is running on ${port}`)}
);
