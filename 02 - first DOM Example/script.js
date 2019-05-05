/**
 * Defines a function
 * that adds a message
 * to an element
 * @param element
 * @param message
 */
function addMessage(element, message){
    var messageElement = document.createElement("li");
    messageElement.textContent = message;
    element.appendChild(messageElement);
}

var first = document.getElementById("first");
addMessage(first, "Page loading");

/**
 * Attaches mousemove
 * event handler to body
 */
document.body.addEventListener("mousemove", function() {
    var second = document.getElementById("second");
    addMessage(second, "Event: mousemove");
});

/**
 * Attaches click event
 * handler to body
 */
document.body.addEventListener("click", function(){
    var second = document.getElementById("second");
    addMessage(second, "Event: click");
});