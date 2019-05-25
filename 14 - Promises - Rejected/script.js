const promise = new Promise((resolve, reject) => {
    reject("Explicitly reject a promise !");
});

fail = function(message){
    report(message);
};

pass = function(message){
    report(message);
};

promise.then(
    () => fail("Happy path, won't be called !"),
    error => pass("A promise was explicitly rejected !")
);