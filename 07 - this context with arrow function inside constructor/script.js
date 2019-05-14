function Button() {
    this.clicked = false;
    this.click = ()=>{
        this.clicked = true;
        assert(button.clicked, "The button has been clicked !")
    }
};

var button = new Button();
var element = document.getElementById("test");
element.addEventListener("click", button.click);