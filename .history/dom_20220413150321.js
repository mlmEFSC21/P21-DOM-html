// Fig. 12.5: dom.js
// Script to demonstrate basic DOM functionality.

var currentNode; // stores the currently highlighted node
var idcount = 0; // used to assign a unique id to new elements

// register event handlers and initialize currentNode
function start() {
    document.getElementById("byIdbutton").addEventListener("click", byId, false);
}
