var button = {
    clicked: false,
    click : function(){
        this.clicked = true;
        assert(button.clicked, "The button has been clicked !");
    }
};
var element = document.getElementById("test");
element.addEventListener("click", button.click.bind(button));

var boundFunction = button.click.bind(button);
assert(boundFunction!=button.click, "Calling bind creates a completely new funtion")