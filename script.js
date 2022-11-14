function checkPrime(number) {
    if (number < 2) {
        return false
    }

    // for (let i = 2; i <= Math.sqrt(number); i++)
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0)
            return false;
    }

    return true;
}

function printPrimeNumber() {
    let ipNumber = Number(document.getElementById('number').value);
    let number = '';
    let count = 0;

    for(let i = 0; count < ipNumber; i++) {
        if(checkPrime(i)) {
            number += i + '<br>';
            count++;
        }
    }

    document.getElementById('primenumber').innerHTML = number;
    document.getElementById('count').innerHTML = count;
}
