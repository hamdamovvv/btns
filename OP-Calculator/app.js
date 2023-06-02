// let operation
//
// function calculator() {
//     let result
//
//     let num1 = Number(document.getElementById('num1').value)
//     let num2 = Number(document.getElementById('num2').value)
//
//     switch (operation) {
//         case '+' :
//             result = num1 + num2
//             break
//         case '-' :
//             result = num1 - num1
//             break
//         case '*' :
//             result = num1 * num2
//             break
//         case '/' :
//             if (num2 === 0) {
//                 document.getElementById('result').textContent = 'Error'
//                 return
//             }
//             result = num1 / num2
//             break
//         default :
//             document.getElementById('result')
//                 .textContent = 'Выберите правильное действие'
//     }
//     document.getElementById('result').innerText = result
// }



const buttons = document.getElementsByTagName('button')

for (let m = 0; m < buttons.length; m++) {
    buttons[m].onclick = (event) => {
        document.body.style.backgroundColor = event.target.innerText
        event.target.style.backgroundColor =  event.target.innerText
    }
}
