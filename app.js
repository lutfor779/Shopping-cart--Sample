function updateNumber(number, isAdd , isPhone) {
    if (isAdd) {
        number.value = parseInt(number.value) + 1;
    }
    else {
        if (parseInt( number.value) > 0) {
            number.value = parseInt(number.value) - 1;
        }
    }
    if (isPhone) {
        return document.getElementById('phone-price').innerText = 1278 * number.value;
    }
    else {
        return document.getElementById('case-price').innerText = 59 * number.value;
    }
}


function callFunction(plusMinus, issAdd, isPhone) {
    plusMinus.addEventListener('click', function () {
        if (issAdd) {   //click +  
            if (isPhone) {
                const phoneNumber = updateNumber(document.getElementById('phone-number'), true, true);
            }
            else {
                const caseNumber = updateNumber(document.getElementById('case-number'), true, false);
            }
        }
        // for click -
        else {
            if (isPhone) {
                const phoneNumber = updateNumber(document.getElementById('phone-number'), false, true);
            }
            else {
                const caseNumber = updateNumber(document.getElementById('case-number'), false, false);
            }
        }
    })
}

// phone
callFunction(document.getElementById('phone-plus'), true, true);
callFunction(document.getElementById('phone-minus'), false, true);

// case
callFunction(document.getElementById('case-plus'), true, false);
callFunction(document.getElementById('case-minus'), false, false);
