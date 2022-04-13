// Fig. 12.5: dom.js
// Script to demonstrate basic DOM functionality.

var currentNode; // stores the currently highlighted node
var idcount = 0; // used to assign a unique id to new elements

// register event handlers and initialize currentNode
function start() {
    document.getElementById("byIdButton").addEventListener("click", byId, false);
    document.getElementById("insertButton").addEventListener("click", insert, false);
    document.getElementById("appendButton").addEventListener("click", appendNode, false);
    document.getElementById("replaceButton").addEventListener("click", replaceCurrent, false);
    document.getElementById("removeButton").addEventListener("click", remove, false);
    document.getElementById("parentButton").addEventListener("click", parent, false);

    //initialize currentNode
    currentNode = document.getElementById("bigheading");
} // end function start

//call start after the window laods
window.addEventListener("load", start, false);

//get and highlight an element by its id attribute
function byId() {
    var id = document.getElementById("gbi").value;
    var target = document.getElementById(id);

    if (target) switchTo(target);
} //end function byId
