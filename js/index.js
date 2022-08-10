const calcular= document.querySelector ('#calcular');

function calculaImc (){
    const nome= document.getElementById('nome').value;
    const altura= document.getElementById('altura').value;
    const peso= document.getElementById('peso').value;
    const resultado= document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        let imc = (peso/(altura*altura)).toFixed(2);

        let classificacao = '';

        if (imc < 18.5){
            classificacao= 'abaixo do peso ideal.'
        } else if (imc >= 18.5 && imc <= 24.9){
            classificacao= 'no peso ideal.'

        } else if (imc >= 25 && imc <= 29.9){
            classificacao= 'um pouco acima do peso ideal.'
        }
        
        if (imc >= 30){
            classificacao= 'acima do peso ideal.'
        }


        resultado.textContent = `${nome}, seu IMC é igual a ${imc}. Você está ${classificacao} Lembre-se: o IMC não considera a porcentagem (%) de massa magra.`

    } else {
        resultado.textContent = 'Preencha todos os campos, por favor.'
    }
}

calcular.addEventListener('click', calculaImc);

