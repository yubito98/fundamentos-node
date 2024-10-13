function processOrder(order, prepareOrder, serveOrder) {
    console.log(`Your order ${order} has been taken`)
    setTimeout(() =>{
        prepareOrder(serveOrder)
    }, 3000)
  }
  
  function prepareOrder(callback) {
    console.log("The order is being prepared.");
    setTimeout(() =>{
        callback()
    }, 2000)
  }
  
  function serveOrder() {
    console.log("The order is ready and being served.");
  }
  
  // Call processOrder with the order and the two callbacks
  processOrder("Burger and Fries", prepareOrder, serveOrder);