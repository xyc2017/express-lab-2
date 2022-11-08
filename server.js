const express=require('express')
const app=express()
const PORT=3000
// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".

app.get('/greeting', (request, response)=>{
    response.send("Hello stranger")
// Give the greetingroute a param /:name
// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).
// app.get('/greeting/:name', (request, response)=>{
//     const name=(request.params.name)

//     response.send(`Yo, ${name}`)
// })
// })
// // Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
// // When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).

// app.get('/tip/:total/:tipPercentage', (request, response)=>{
//     const total=parseInt(request.params.total)
//     const tipPercentage=parseInt(request.params.tipPercentage)
//     console.log("Tip Calculator express application created.")
//     response.send(`The tip amount is ${total*tipPercentage/100}`)
// })

// //Magic 8 Ball

// const magic=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
// app.get('/magic/:question',(request, response)=>{
    
//     const randomAnswer=magic[Math.floor(Math.random()*magic.length)]
//     const question=request.params.question
//     console.log("Magic 8 ball express application created")
//     response.send(`${question}?  ${randomAnswer}`)
//     app.get('/magic/:question', (request, response)=>{
//         response.send(`<h1>${randomAnswer}</h1>`)
//     })
// })
// app.listen(PORT, ()=>{
//     console.log(`listening to port ${PORT}`)
// })

