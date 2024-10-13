function greet(name){
    return new Promise((resolve, reject) =>{
        if(name){
            resolve(`Hola ${name}`)
        }else{
            reject(`There is no name`)
        }
    })
}


greet("")
.then((data) => console.log(data) )
.catch((error) => console.log(error))