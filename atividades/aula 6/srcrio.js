//atividade 01

//function contarVogais(str) {
 //   str = str.toLowerCase();
    
  //  const vogais = ['a', 'e', 'i', 'o', 'u'];
    
 //   let contagem = 0;
    
 //   for (let char of str) {
 //       if (vogais.includes(char)) {
//            contagem++;
 //       }
//    }
    
//    return contagem;
//}

//let entrada = prompt("Digite uma palavra ou frase:");

//let numeroVogais = contarVogais(entrada);
//console.log(`O número de vogais em "${entrada}" é: ${numeroVogais}`);

//atividade 02

//function calcularQuadrado(numero) {
//    return numero * numero;
//}

//let entrada = prompt("Digite um número:");
//let numero = parseFloat(entrada);

//if (!isNaN(numero)) {
//    let resultado = calcularQuadrado(numero);
//    console.log(`O quadrado de ${numero} é ${resultado}`);
//} else {
 //   console.log("Por favor, insira um número válido.");
//}

//atividade 03

//function calcularCirculo(raio) {
    //const PI = Math.PI; 
    //let area = PI * raio * raio;
    
    //let perimetro = 2 * PI * raio;
    
   // return {
  //      area: area,
 //w       perimetro: perimetro
//    };
//}

//let entradaRaio = prompt("Digite o raio do círculo:");
//let raio = parseFloat(entradaRaio);

//if (!isNaN(raio) && raio > 0) {
    //let resultado = calcularCirculo(raio);
    
    //let areaArredondada = resultado.area.toFixed(2);
    //let perimetroArredondado = resultado.perimetro.toFixed(2);
    
   // console.log(`Para um círculo com raio ${raio}:`);
   // console.log(`Área: ${areaArredondada}`);
 //   console.log(`Perímetro: ${perimetroArredondado}`);
//} else {
//    console.log("Por favor, insira um número positivo válido para o raio.");
//}

//atividade 04


//function ehPrimo(numero) {
  //  if (numero <= 1) return false;
    
  //  if (numero === 2) return true;
    
  //  if (numero % 2 === 0) return false;
    
  //  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
  //      if (numero % i === 0) return false;
   // }
    
 //   return true;
//}

//let entrada = prompt("Digite um número para verificar se é primo:");
//let numero = parseInt(entrada);

//if (!isNaN(numero)) {
 //   if (ehPrimo(numero)) {
 //       console.log(`${numero} é um número primo.`);
 //   } else {
  //      console.log(`${numero} não é um número primo.`);
   // }
//} else {
 //   console.log("Por favor, insira um número válido.");
//}

//atividade 05

//const calculadora = function(num1, num2, operacao) {
  //  switch(operacao) {
   //     case '+':
   //         return num1 + num2;
  //      case '-':
   //         return num1 - num2;
  //      case '*':
  //          return num1 * num2;
  //      case '/':
  //          if (num2 === 0) {
 //               return "Erro: Divisão por zero!";
  //          }
  //          return num1 / num2;
  //      default:
  //          return "Operação inválida!";
  //  }
//};

//function obterNumero(mensagem) {
 //   let entrada;
  //  do {
  //      entrada = prompt(mensagem);
   //     if (entrada === null) return null; 
   //     entrada = parseFloat(entrada);
  //  } while (isNaN(entrada));
  //  return entrada;
//}

//let numero1 = obterNumero("Digite o primeiro número:");
//if (numero1 === null) {
 //   console.log("Operação cancelada.");
//} else {
  //  let numero2 = obterNumero("Digite o segundo número:");
  //  if (numero2 === null) {
  //      console.log("Operação cancelada.");
  //  } else {
  //      let operacao = prompt("Digite a operação (+, -, *, /):");

  //
  //      console.log(`Resultado: ${resultado}`);
  //  }
//}

//atividade 06

//const soma = function(a, b) {
 //   return a + b;
//};

//let numero1 = 5;
//let numero2 = 3;
//let resultado = soma(numero1, numero2);
//console.log(`A soma de ${numero1} e ${numero2} é: ${resultado}`);

//atividade 07

