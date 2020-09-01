const express = require('express');

const app = express();

app.post('/calc',(req, res)=>{
    var result = 0;
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var opr = (req.query.opr);

    if (opr === '+'){
        result = add(a,b);
    }else if (opr === '-'){
        result = sub(a,b);
    }else if (opr === '*'){
        result = mul(a,b);
    }else if (opr === '/'){
        result = div(a,b);
    }else{
        return Error;
     }
    res.json("Result is: " + result)
});


// var a=8,b=2;
function add(a,b){
    return a+b ;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
// console.log(add(a,b))
// console.log(sub(a,b))
// console.log(mul(a,b))
// console.log(div(a,b))

app.listen(5000, ()=>{
    console.log("server running")
})