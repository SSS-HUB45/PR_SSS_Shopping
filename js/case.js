
function updateCaseNumber(isIncrease){
    // 2: get the value inside the case number field (input field)
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    // 3: convert the number to an integer
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;


}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})



// // 1: add event listener to the case plus button
// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     // 2: get the value inside the case number field (input field)
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     // 3: convert the number to an integer
//     const previousCaseNumber = parseInt(caseNumberString);
//     // 4: calculate the new case number
//     const newCaseNumber = previousCaseNumber + 1;
//     // 5: set the value to the case number field
//     caseNumberField.value = newCaseNumber;
// })

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     // 2: get the value inside the case number field (input field)
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     // 3: convert the number to an integer
//     const previousCaseNumber = parseInt(caseNumberString);
//     // 4: calculate the new case number
//     const newCaseNumber = previousCaseNumber - 1;
//     // 5: set the value to the case number field
//     caseNumberField.value = newCaseNumber;
// })

