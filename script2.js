
 // EXERCICIO 1 

let idade = prompt("Digite sua idade: ")

if (idade >= 18) {
    console.log("Você é maior de idade")
} else  {
    console.log ("Voçê é menor de idade")
}


// EXERCICIO 2

let numero = prompt("Digite um numero positivo: ")

if (numero % 2 === 0){
    console.log("o numero " + numero, "é PAR")
} else if (numero % 2 != 0) {
    console.log ("o numero " + numero, "é IMPAR")
} else {
    console.log ("o numero precisa ser positivo!!")
}



// EXERCICIO 3

let numero2 = prompt("Digite um numero ")

if (numero2 > 0) {
    console.log("O numero é positivo")
} else if (numero2 < 0) {
    console.log("O numero é negativo")
} else {
    console.log("ZERO")
}


// EXERCICIO 4


function tabuada (number){
    for (let i = 1; i < 11; i++) {
        total = i * number
        console.log(i + " x " + number + " = " + total)
    }
}

tabuada(number = prompt("Digite um numero: "));