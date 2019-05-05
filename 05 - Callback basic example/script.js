var text = "Domo arigato!";
report("Before defining functions");

/**
 * Defines a function that takes a callback function and immediately invokes it
 * @param ninjaCallback
 * @returns {*}
 */
function useless(ninjaCallback) {
    report("In useless function");
    return ninjaCallback();
}

/**
 * Defines a simple function that returns a global variable
 * @returns {string}
 */
function getText() {
    report("In getText function");
    return text;
}

report("Before making all the calls");

/**
 * Calls our useless function with the getText function as a callback
 */
assert(useless(getText) === text,"The useless function works! " + text);

report("After the calls have been made");