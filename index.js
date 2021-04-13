// Code your solutions in this file
 const names = ["Ada", "Brendan", "Ali"]
function writeCards(names, event) { 
    let greeting = [] 
    for (let i = 0; i < names.length; i++) {
        greeting.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    } 
    return greeting
     
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber) 
        startingNumber -= 1
    } 
    console.log(startingNumber)
}
    
 
