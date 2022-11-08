const express=require('express')
const app=express()
const PORT=3001

app.get('/', (request, response)=>{
    response.send("99 Bottles of beer on the wall")
})
app.get('/num/:bottles', (request, response)=>{
    let bottles=parseInt(request.params.bottles-=1)
    bottles===99
    bottles>=0
    if(bottles>0){
    response.send(`<a href=/num/${bottles}>Take one down, pass it around</a>`)
}else if(bottles===0){
        response.send(`<a href=/>Start over</a>`)
    }
})
app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})
