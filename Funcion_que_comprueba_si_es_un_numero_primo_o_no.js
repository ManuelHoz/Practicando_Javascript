//¿que es un numero primo??
//Un numero primo es aquel que solo es divisible por si mismo y por 1

function es_numero_primo(numero) {
    if(numero <= 1) {
        return false;
    }
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) { //si el numero posee un resto de 0, no es primo
            return false;
        }
    }
    return true; //si el numero no posee un resto de 0 para ningun numero que sea menor a el, es primo
    //(excepto el 1)
}

console.log(es_numero_primo(2));