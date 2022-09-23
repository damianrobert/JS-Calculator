const calculator = document.querySelector('.calculator')
let screenLast = document.querySelector('.screenLast')
let screenCurrent = document.querySelector('.screenCurrent')
const buttons = document.querySelector('.allButtons')
const button = buttons.querySelectorAll('BUTTON')
const operators = document.querySelectorAll('.operators')

let firstOperand
let secondOperand
let selectedOperator
let result
let key
let keyValue

function calculate(first, operator, second){
    if(operator === '+'){
       first + second
    } else  if(operator === '-'){
        first - second
    } else  if(operator === '÷'){
        first / second
    } else  if(operator === 'x'){
        first * second
    } else  if(operator === '%'){
        first % second
    }
}


button.forEach(bttn =>{
    bttn.addEventListener('click', (e) => {
         key = e.target
         keyValue = key.innerText
        if(key.className === 'digits'){
            screenCurrent.innerText = screenCurrent.innerText + keyValue

        } 
        
        if(key.className === 'operators'){
            firstOperand = screenCurrent.innerText
            screenLast.innerText = screenCurrent.innerText + keyValue 
            selectedOperator = keyValue
            console.log(selectedOperator)
            screenCurrent.innerText = ''
        }
         
        if(screenCurrent.innerText.includes('.')){
            return
        } else if(key.className === 'decimal'){
            screenCurrent.innerText = screenCurrent.innerText + keyValue
        }
        
    })
})


button.forEach(bttn => {
    bttn.addEventListener('click', () =>{
        if(key.className === 'equals'){
            secondOperand = screenCurrent.innerText
            firstOperand = parseInt(firstOperand)
            secondOperand = parseInt(secondOperand)
            if(selectedOperator === '+'){
                result = firstOperand + secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === '-'){
                result = firstOperand - secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === 'x'){
                result = firstOperand * secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === '÷'){
                result = firstOperand / secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === '%'){
                result = firstOperand % secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            }
        }
    })
})
