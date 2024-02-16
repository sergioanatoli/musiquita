const ejercicio = (array)=>{
    let soma = 0;
    for(let numero of array){
        soma += numero;
    }
    let media = soma / array.length;
    return media;
}

let arrayNumeros = [10,10,10,10];
