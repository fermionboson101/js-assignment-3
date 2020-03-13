function prefill(n, v) {
    let arr = [];
    if (n != parseInt(n, 10) || n < 0) {
        throw new TypeError(n + " is invalid");
    }
    for (let i = 0; i < n; i++) {
        arr.push(v);
    }
    return arr;
}