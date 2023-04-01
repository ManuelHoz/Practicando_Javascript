function Sumatoria_de_elementos_de_un_array(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i]; //suma elemento de array en posicion i
    }
    return suma;
}

array= [1,2,3,4];
console.log(Sumatoria_de_elementos_de_un_array(array))