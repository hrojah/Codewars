function descendingOrder(n){
    const result = []
    while (n !== 0) {
        let remain = n % 10;
        n = Math.floor(n / 10)
        result.push(remain)
    }
    console.log(result);
}

descendingOrder(1021)
