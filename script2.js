function calculadora (a, b, operacao) {

    a = Number(a);
    b = Number(b);
    
    let resultado;

    switch(operacao)
    {
        case '1':
            resultado = a + b
            break;
        case '2':
            resultado = a - b
            break;
        case '3':
            resultado = a * b
            break;
        case '4':
            resultado = a / b
            break; 
        default:
            console.log('opção inváliada')
            return
    }

    console.log('resultado:', resultado)
}
function operacaoEscolha (){
    let operacao = prompt(
        "Escolha a operação:\n1. SOMAR\n2. SUBTRAIR\n3. MULTIPLICAR\n4. DIVIDIR"
    );
    return operacao
}


let valorA = prompt('Digite o valor de A:')
let valorB = prompt("Digite o valor de B:")
let operacao = operacaoEscolha();

calculadora(valorA, valorB, operacao);

