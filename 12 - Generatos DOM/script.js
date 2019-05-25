function* DomTraversal(element){
    yield element;
    element = element.firstElementChild;
    while (element) {
        yield* DomTraversal(element);
        element = element.nextElementSibling;
    }
}

const subTree = document.getElementById("subTree");
for(let element of DomTraversal(subTree)) {
    assert(element !== null, element.nodeName);
}