function sum(num1, num2){
    return new Promise((resolve, reject) =>{
        if(num1 && num2){
            resolve(num1 + num2)
        }else{
            reject("Add the numbers")
        }
    })
}

sum(2, 4)
.then((result) => console.log(result))
.catch((error) => console.log(error))