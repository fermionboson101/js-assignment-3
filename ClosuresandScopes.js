function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        let current_i = i;
        callbacks.push(function() {
            return current_i;
        });
    }

    return callbacks;
}