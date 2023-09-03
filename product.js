const express=require("express");
const router =express.Router();
const product=[
    {
        name: "Apple",
        price: 100,
        quantity: 10,
        id: 1
    },
    {
        name: "Banana",
        price: 40,
        quantity: 12,
        id: 2
    }
]
router.get("/", (req,res) =>{
    
    res.send(product);
    console.log({
        header: req.headers,
        body: req.body,

    })
}
);

router.get("/:id",(req,res) => {
    console.log({param: req.params})
    const product = products.find((product) => product.id === parseInt(id));
    res.send(product);
    res.send(product[req.params.id - 1])
})

router.post("/",(req,res) =>{
    const productin=req.body;
    productin.id=product.length + 1;
    product.push(productin);
    res.send(product);
    console.log({body});
})


router.put("/:id",(req,res) =>{
    const productin=req.body;
    const id = req.params.id;
    const dbproduct = product[id - 1];
    product[id - 1] = Object.assign(dbproduct,productin);
    res.send(product);
})

router.delete("/:id",(req,res) =>{
    //const productin=req.body;
    const id = req.params.id;
    product.splice(parseInt(id) - 1 , 1);
    res.send(product);
})

module.exports=router;