/**
 * There are two ways of DOM event assignment.
 * Second one is with the addEventListener method built-in on an HTML element,
 * the examples below show how can we use this method.
 */

/**
 * When window is loaded the alert is shown
 */
window.addEventListener("load", function () {
    alert("ON LOAD !");
    var paragraph = document.getElementById("main");
    paragraph.innerText = "Try click on window !";
});

/**
 * We can show an alert every time a user click on window
 */
document.addEventListener("click", function () {
    alert("CLICK !");
});