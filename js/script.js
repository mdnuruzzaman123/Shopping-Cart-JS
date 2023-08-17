document.getElementById('btn').addEventListener('click', 
function () {
    const textValue = getElementInnerTextById('flower')

    const newLiContainer = document.getElementById('new-li-div');

    const li = document.createElement('li');
    li.innerText = textValue;

    newLiContainer.appendChild(li);

    const price = getElementTextById('flower-price');

    const total = getElementTextById('total-amount');

    const newTotal = total + price ;

    setElementTextValueById('total-amount' , newTotal)


})

// 
document.getElementById('btn2').addEventListener('click', 
function () {
    const textValue = getElementInnerTextById('tob')

    const newLiContainer = document.getElementById('new-li-div');

    const li = document.createElement('li');
    li.innerText = textValue;

    newLiContainer.appendChild(li);

    const price = getElementTextById('tob-price');

    const total = getElementTextById('total-amount');

    const newTotal = total + price ;

    setElementTextValueById('total-amount' , newTotal)


})

// 
document.getElementById('btn3').addEventListener('click', 
function () {

    const textValue = getElementInnerTextById('mate')

    const newLiContainer = document.getElementById('new-li-div');

    const li = document.createElement('li');
    li.innerText = textValue;

    newLiContainer.appendChild(li);

    const price = getElementTextById('mate-price');

    const total = getElementTextById('total-amount');

    const newTotal = total + price ;

    setElementTextValueById('total-amount' , newTotal)


})


// --------------

function getElementInnerTextById(textId) {
    const textField = document.getElementById(textId);
    const textValue = textField.innerText;
   
    return textValue;
}

// ------
function getElementTextById(textId) {
    const textField = document.getElementById(textId);
    const textValueString = textField.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

// 
function setElementTextValueById(textId, newTotalValue) {
    const textField = document.getElementById(textId)
    textField.innerText = newTotalValue;

}
