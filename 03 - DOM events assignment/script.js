/**
 * There are two ways of DOM event assignment.
 * First one is with functions, the examples below show how can we define functions for every event.
 *
 * This is not recommended because doing so comes with a drawback :
 *  > It’s only possible to register one function handler for a particular event
 *  This means it’s easy to overwrite previous event-handler functions
 *
 */

/**
 * When window is loaded the alert is shown
 */
window.onload = function () {
    alert("ON LOAD !");
    var paragraph = document.getElementById("main");
    paragraph.innerText = "Try click on window !";
};

/**
 * We can show an alert every time a user click on window
 */
document.onclick = function () {
    alert("CLICK !");
};