function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}

function report(text) {
    var li = document.createElement("li");
    li.className = "pass";
    li.appendChild(document.createTextNode(text));
    document.getElementById("results").appendChild(li);
}