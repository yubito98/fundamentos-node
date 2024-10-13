function soyAsincrona(miCallback){
    setTimeout(() =>{
        console.log("Estoy siendo asincrona")
        miCallback()
    }, 1000)
}

console.log("Iniciando Proceso...")

soyAsincrona(function(){console.log("Terminando Proceso")})

