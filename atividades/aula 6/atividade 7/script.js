function valorPagamento(valorPrestacao, diasAtraso) {
    if (diasAtraso === 0) {
        return valorPrestacao;
    } else {
        let multa = valorPrestacao * 0.03;
        let juros = valorPrestacao * (0.001 * diasAtraso);
        return valorPrestacao + multa + juros;
    }
}

function obterNumeroPositivo(mensagem) {
    let entrada;
    do {
        entrada = prompt(mensagem);
        if (entrada === null) return null; 
        entrada = parseFloat(entrada);
    } while (isNaN(entrada) || entrada < 0);
    return entrada;
}


let valorPrestacao = obterNumeroPositivo("Digite o valor da prestação:");

if (valorPrestacao !== null) {
    let diasAtraso = obterNumeroPositivo("Digite o número de dias em atraso:");
    
    if (diasAtraso !== null) {
        let valorAPagar = valorPagamento(valorPrestacao, diasAtraso);
        
        console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
    } else {
        console.log("Operação cancelada.");
    }
} else {
    console.log("Operação cancelada.");
}