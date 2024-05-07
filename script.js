let countNumber = document.querySelector('.countNumber')
let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')
let inputIncrement = document.querySelector('#inputIncrement')


plusBtn.addEventListener('click', function () {
    let count = Number(countNumber.innerHTML);
    let incrementValue = Number(inputIncrement.value)
    if (incrementValue === 0) {
        countNumber.innerHTML = count + 1
    } else {
        countNumber.innerHTML = count + incrementValue
    }

})

minusBtn.addEventListener('click', function () {
    let count = Number(countNumber.innerHTML);
    let incrementValue = Number(inputIncrement.value);
    if (incrementValue === 0) {
        countNumber.innerHTML = count - 1;
    } else if (incrementValue < 0) {
        alert('Please enter a positive Nunmber')
    }
    else {
        countNumber.innerHTML = count - incrementValue;
    }

})