let inputs = document.getElementsByTagName('input')
// Array.from(inputs).forEach((input) => {
//     input.addEventListener('keydown', function (event) {
//         if (event.keyCode == 13) {
//             focusNextInput(this);
//         }
//     });
// })

function calculate() {
    let startTime = document.getElementById('starttime').value.split('.')
    let endTime = document.getElementById('endtime').value.split('.')
    let amend = Number(startTime[3]) + 10 - (Number(endTime[3]) + 1)
    let samples = document.getElementById('samples')

    startTime = (Number(startTime[0]) * 60 + Number(startTime[1])) * 60 + Number(startTime[2])
    endTime = (Number(endTime[0]) * 60 + Number(endTime[1])) * 60 + Number(endTime[2])

    samples.value = (endTime - startTime + 1) * 10 - Number(amend)
    // alert(startTime)
}

function clearInput() {
    document.getElementById('starttime').value = ''
    document.getElementById('endtime').value = ''
    document.getElementById('samples').value = ''
}

// function focusNextInput(thisInput) {

//     // for (let i = 0; i < inputs.length - 1; i++) {
//     //     if (thisInput == inputs[inputs.length - 2]) {
//     //         inputs[0].focus();
//     //         break;
//     //     } else if (thisInput == inputs[i]) {
//     //         inputs[i + 1].focus();
//     //         break;
//     //     } else {
//     //         document.getElementById('calculate').click();
//     //     }
//     // }
//     for (let i = 0; i < inputs.length - 1; i++) {
//         if (thisInput == inputs[inputs.length - 2]) {
//             document.getElementById('calculate').focus();
//             break;
//         } else {
//             inputs[i + 1].focus();
//         }
//     }
// }
