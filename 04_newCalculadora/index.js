

function addCaracter(caracter){
    const valueDisplay = document.querySelector('.display').value
        document.querySelector('.display').value = valueDisplay + caracter
}

function calc(){
    const valueDisplay = document.querySelector('.display').value
        document.querySelector('.display').value = eval(valueDisplay)
}

function cleanDisplay(){
    const valueDisplay = document.querySelector('.display').value
        document.querySelector('.display').value = ('')
}

function reverse(){
    const valueDisplay = document.querySelector('.display').value
        document.querySelector('.display').value = valueDisplay * -1
}