function fetchNumber(number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(number);
      }, 1000); // Resolves with the number 10 after 1 second
    });
  }
  
  function multiplyByTwo(number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000); // Resolves with the number multiplied by 2 after 1 second
    });
  }

async function processNumber(data){
    try{
        let number = await fetchNumber(data);
        let multiply = await multiplyByTwo(number);
        console.log(`Ther result is: ${multiply}`)
    }catch(error){
        console.log(error)
    }

}

processNumber(5)