function bookTicket(movieName){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            let tickets = Math.random() > 0.2;
            if(tickets){
                resolve(`Tickets for ${movieName} are booked!`)
            }else{
                reject(`Tickets for ${movieName} are sold out.`)
            }
        }, 1000)

    })

}


bookTicket("Inception")
 .then((message) => console.log(message) )
 .catch((error) => console.log(error));