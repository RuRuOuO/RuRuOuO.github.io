var myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/722700.webp") {
        myImage.setAttribute("src", "images/722700_180.png");
    } else {
        myImage.setAttribute("src", "images/722700.webp");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Google Chrome is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Google Chrome is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}