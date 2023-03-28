function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimes(num) {
    let primes = [];

    for (let i = 2; i < num; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    console.log(primes);

    return primes;
}

getPrimes(100);
