//node keyword require allows us to import modules
const myModule = require('./myModule.js')
// const fs = require('fs')

// fs.readFile('story.txt', 'utf8', (err, data)=>{
//     if(err) {
//         console.log("there was a problem reading the file")
//         }else {
//         console.log(data)
//             }
        
// })

//console.log(myModule.beBasic())
//myModule.count()
//console.log(myModule.code());
//console.log("Hello world!")
 
// let i = 0

//  const count = () => {
//      console.log(i)
//      i++
//  }
//  const myTimer = setInterval(count, 1000)

//const today = new Date()

//console.log(today)
const moment = require("moment")
//console.log(moment().format("MMM DD YYYY"))
var myBirthDay = "08.06.1993"
console.log(moment("08/06/1993", "MM DD YYYY").format("dddd [the ] Do  [of ]  MMMM  [ in the year ]  YYYY"))