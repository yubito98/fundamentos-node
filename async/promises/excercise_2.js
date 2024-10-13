// Online Shopping Order Processing

function processPayment(amount){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(amount){
                resolve(`Payment of ${amount} processed!`)
            }else{
                reject("payment failed")
            }
        }, 1000)
    })
}


function prepareOrder(orderId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(orderId){
                resolve(`Order  ${orderId} is prepared!`)
            }else{
                reject("Order preparation failed!")
            }
        }, 1000)
    })
}

function shipOrder(orderId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(orderId){
                resolve(`Order  ${orderId}  has been shipped!`)
            }else{
                reject("Shipping failed!")
            }
        }, 1000)
    })
}

processPayment(200)
 .then((message) =>{ 
    console.log(message)
    prepareOrder("order Id 25")
     .then((orderMessage) => {
        console.log(orderMessage)
        shipOrder("")
        .then((shippingMessage) =>{ console.log(shippingMessage) })
        .catch((sippingError) => { console.log(sippingError) })
    })
     .catch((orderError) => { console.log(orderError) })
})
.catch((error) => { console.log(error) })
