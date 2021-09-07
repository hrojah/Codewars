function squareDigits(num){
    if (num === 0) {
        return 0
    } else {
        const result = []
        while (num !== 0) {
            let remain = num % 10;
            num = Math.floor(num / 10)
            result.unshift(Math.pow(remain, 2));
        }
        return +(result.join(''))
    }
}
