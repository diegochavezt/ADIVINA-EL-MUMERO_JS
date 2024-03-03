let numberRandom = Math.floor(Math.random() * 100) + 1
let inputNumber = document.getElementById('numeroEntrada')
let hintMessage = document.getElementById('pista')
let attempts = document.getElementById('intentos')
let attemptsNumb = 0

function checkResult() {
    let numberInput = parseInt(inputNumber.value)
    console.log(numberRandom)
    attemptsNumb ++

    if(numberInput < 1 || numberInput > 100 || isNaN(numberInput)){
        hintMessage.textContent = '!Por favor ingrece un número del 1 al 100¡'
        hintMessage.style.color = 'red';
        inputNumber.desabled = true;
        return
    }

    if(numberInput == numberRandom){
        hintMessage.textContent = '!Felicidades !Adivinaste¡'
        hintMessage.style.color = 'green'
    } else if (numberInput > numberRandom) {
        hintMessage.textContent = '!Te pasaste¡ Elige un número menor'
        hintMessage.style.color = 'blue'
    } else {
        hintMessage.textContent = '!Nop¡ sube más'
        hintMessage.style.color = 'blue'
    }
    console.log(attemptsNumb)
    attempts.textContent = 'Intentos: '+ attemptsNumb

}