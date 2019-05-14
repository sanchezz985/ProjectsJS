assert(this===window,"this === window");
var button = {
    clicked: false,
    click : ()=>{
        this.clicked = true;
        assert(button.clicked, "The button has been clicked !")
        assert(this===window, "In arrow function this === window")
        assert(window.clicked, "clicked is stored in window")
    }
};
var element = document.getElementById("test");
element.addEventListener("click", button.click);