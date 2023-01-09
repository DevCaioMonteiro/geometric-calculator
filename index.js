let numbBase = ''
let numbBaseM = ''
let numbAltura = ''
let options = ''
let numbPi = ''
function area(base, altura) {
    return base * altura
}

do {
    options = prompt ('Escolha uma opção para calcular:' +
    '\n1. área triângulo \n2. área retângulo \n3. área quadrado \n4. área trápezio \n5. área círculo \n6. sair'
    )
    switch (options) {
        case '1':
            numbBase = prompt ('Insira o valor da base:')
            numbAltura = prompt ('Insira o valor da altura:')

            function areaTriangulo(numbBase, numbAltura) {
                return (numbBase * numbAltura) / 2
            }
            alert ('Resultado: ' + areaTriangulo(numbBase, numbAltura))
        break
        case '2':
            numbBase = prompt ('Insira o valor da base:')
            numbAltura = prompt ('Insira o valor da altura:')

            function areaRetangulo(numbBase, numbAltura) {
                return (numbBase * numbAltura) 
            }
            alert ('Resultado: ' + areaRetangulo(numbBase, numbAltura))
        break
        case '3':
            numbBase = prompt ('Insira o valor do lado:')

            function areaQuadrado(numbBase) {
                return (areaRetangulo(numbBase, numbBase)) 
            }
            alert ('Resultado: ' + areaRetangulo(numbBase, numbBase))
        break
        case '4':
            numbBase = parseFloat(prompt ('Insira o valor da base maior:'))
            numbBaseM = parseFloat(prompt ('Insira o valor da base menor:'))
            numbAltura = prompt ('Insira o valor da altura:')

            function areaTrapezio(numbBase, numbBaseM, numbAltura) {
                return (numbBase + numbBaseM)*numbAltura / 2
            }
            alert ('Resultado: ' + areaTrapezio(numbBase, numbBaseM, numbAltura))
        break
        case '5':
            numbBase = prompt ('Insira o valor do raio:')
            numbPi = 3.14

            function areaCirculo(numbBase, numbPi) {
                return (numbBase * numbBase) * numbPi
            }
            alert ('Resultado: ' + areaCirculo(numbBase, numbPi))
        break
        case '6':
            alert('Saindo...')
        break
        default:
            alert('Opção inválida')
        break
    
    }

}while (options !== '6')