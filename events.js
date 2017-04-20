// Requirements line 1
var output = document.getElementById("output-target");
var sectionItems = document.getElementsByTagName("section");
for(var i = 0; i < sectionItems.length; i++) {
    sectionItems.item(i).addEventListener("click", sectionClick)
}
function sectionClick() {
    var text = event.target.innerHTML;
    output.innerHTML = "You clicked on " + text;
}
// Requirements line 2 & 3
var headerH1 = document.getElementById("page-header");
headerH1.addEventListener("mouseover", handleMouseOver);
headerH1.addEventListener("mouseout", handleMouseOut);
function handleMouseOver() {
    output.innerHTML = "You've moved your mouse over the header.";
}
function handleMouseOut() {
    output.innerHTML = "You left me!!";
}
// Requirements Line 4
var textInput = document.getElementById("keypress-input");
textInput.addEventListener("keyup", handleKeyup);
function handleKeyup() {
    output.innerHTML = textInput.value;
}
// Requirements Line 5
var gp = document.getElementById("guinea-pig");
var addColorButton = document.getElementById("add-color");
addColorButton.addEventListener("click", function() {
    gp.classList.toggle("blue");
});
// Requirements Line 6
var hulkButton = document.getElementById("make-large");
hulkButton.addEventListener("click", function() {
    gp.classList.toggle("large");
});
// Requirements Line 7
var borderButton = document.getElementById("add-border");
borderButton.addEventListener("click", function() {
    gp.classList.toggle("add-border");
});
// Requirements Line 8
var rounderButton = document.getElementById("add-rounding");
rounderButton.addEventListener("click", function() {
    gp.classList.toggle("rounded");
});
// Requirements Line 9
var firstSection = document.getElementsByClassName("article-section").item(0);
firstSection.classList.add("bold");
// Requirements Line 10
var lastSection = document.getElementsByClassName("article-section").item(5);
lastSection.classList.add("bold-em");
// Requirements Line 11
var buttons = document.getElementsByTagName("button");
for(var i = 0; i < buttons.length; i++) {
    buttons.item(i).classList.add("display-block");
}
