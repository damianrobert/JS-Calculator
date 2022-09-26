const calculator = document.querySelector('.calculator')
let screenLast = document.querySelector('.screenLast')
let screenCurrent = document.querySelector('.screenCurrent')
const buttons = document.querySelector('.allButtons')
const button = buttons.querySelectorAll('BUTTON')
const operators = document.querySelectorAll('.operators')

screenCurrent.innerText = '0'
let firstOperand
let secondOperand
let selectedOperator
let result
let key
let keyValue
let currentNumbers

function calculate(first, operator, second){
    if(operator === '+'){
      return first + second
    } else  if(operator === '-'){
      return  first - second
    } else  if(operator === '÷'){
      return  first / second
    } else  if(operator === 'x'){
      return  first * second
    } else  if(operator === '%'){
      return  first % second
    }
}


button.forEach(bttn =>{
    bttn.addEventListener('click', (e) => {
         key = e.target
         keyValue = key.innerText
        if(key.className === 'digits'){
            if(screenCurrent.innerText === '0'){
                screenCurrent.innerText = ''
                screenCurrent.innerText = keyValue
            } else{
            screenCurrent.innerText = screenCurrent.innerText + keyValue
            currentNumbers = screenCurrent.innerText
            }
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

        if(keyValue === 'AC'){
            screenCurrent.innerText = '0'
            screenLast.innerText = ''
        }

        if(keyValue === 'CLEAR'){
            currentNumbers = currentNumbers.slice(0, -1)
            screenCurrent.innerText = currentNumbers
            if(screenCurrent.innerText = ''){
                return
            }
            
        }
        
    })
})


button.forEach(bttn => {
    bttn.addEventListener('click', () =>{
        if(key.className === 'equals'){
            secondOperand = screenCurrent.innerText
            firstOperand = parseFloat(firstOperand)
            secondOperand = parseFloat(secondOperand)

            if(selectedOperator === '+'){
                result = firstOperand + secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === '-'){
                result = firstOperand - secondOperand
                screenLast.innerText = result
                screenCurrent.innerText = ''
            } else if(selectedOperator === '×'){
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
