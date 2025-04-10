function calcularIMC() {
    let nome = document.getElementById("nome").value;
    let altura = parseFloat(document.getElementById("altura").value) / 100; // Converter cm para metros
    let peso = parseFloat(document.getElementById("peso").value);

    let imc = peso / (altura * altura);
    let classificacao;

    if (imc < 16) {
        classificacao = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classificacao = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    document.getElementById("resultado").textContent = `${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;
}