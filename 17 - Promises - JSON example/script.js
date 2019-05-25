function getJSON(url) {
    report("Enter in function");
    return new Promise((resolve, reject) => {
        report("return promise");
        const request = new XMLHttpRequest();

        report("Opening connection");
        request.open("GET", url);

        request.onload = function() {
            report("Inside onload method");
            try {
                if(this.status === 200 ){
                    report("status 200");
                    resolve(JSON.parse(this.response));
                } else{
                    report("can't find URL");
                    reject(this.status + " " + this.statusText);
                }
            } catch(e){
                report("catch");
                reject(e.message);
            }
        };

        request.onerror = function() {
            report("OnError function");
            reject(this.status + " " + this.statusText);
        };

        request.send();
    });
}

function fail(message){
    report(message);
}

getJSON("ninjas.json").then(ninjas => {
    assert(ninjas !== null, "Ninjas obtained!");
}).catch(e => fail("Shouldn't be here:" + e));