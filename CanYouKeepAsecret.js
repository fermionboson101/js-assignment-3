function createSecretHolder(secret) {
    let obj = {
        getSecret: function() {
            return secret;
        },
        setSecret: function(sec) {
            secret = sec;
        }
    }
    return obj;
}