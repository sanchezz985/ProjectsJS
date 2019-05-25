const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;
});

fail = function(message){
    report(message);
};

pass = function(message){
    report(message);
};

promise.then(() => fail("Happy path, won't be called !"))
       .catch(() => pass("Third promise was also rejected!"));