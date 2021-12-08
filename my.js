function updateProductNumber(product, price, isAdd) {
    const productNumber = document.getElementById(product + '-number');
    if (isAdd) {
        productNumber.value = parseInt(productNumber.value) + 1;
    }
    else {
        if (parseInt(productNumber.value) > 0) {
            productNumber.value = parseInt(productNumber.value) - 1;
        }
    }
    document.getElementById(product + '-price').innerText = productNumber.value * price;

    // sub-total
    const calculateSubTotal = document.getElementById('sub-total').innerText = subTotal();
    // tax
    const calculateTax = document.getElementById('tax').innerText = calculateSubTotal / 10;
    // total
    document.getElementById('total').innerText = calculateSubTotal + calculateTax;
}

function getProductNumber(product) {
    if (product == 'phone') {
        return parseInt(document.getElementById(product + '-number').value);
    }
    else {
        return parseInt(document.getElementById(product + '-number').value);
    }
}
function subTotal() {
    return getProductNumber('phone') * 1278 + getProductNumber('case') * 59;
}



document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1278, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1278, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})