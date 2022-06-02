1
function printAlert(){
    var myAlert = document.getElementsByid("h1_id");
    alert("Welcome")
}
2
function printMyName(){
    var getName = document.getElementsByTagName("p")
    console.log("Yonatan Itzhak");
}
3
function changeColor(){
    var myColor = document.getElementById("id_color")
    myColor.style.color = "blue"
}
4
function changeMySize(){
    var myFontSize = document.getElementById("h1_name")
    myFontSize.style.fontSize = "60px"
}
5
function changeText(){
    var text = document.getElementById("id_myText")
    text.innerText = "Yonatan A Melech"
}
6
function getNameByButtom(userNmae){
    var userName = prompt("Enter your full name")
    document.write(userName)
}
7
function myTime(){
    var time = new Date()
    if(12>time.getHours()){
    document.body.style.backgroundColor = "yellow"
    document.write("<br>Have a nice day")
    }
    else{
        document.body.style.backgroundColor = "blue"
        document.write("<br>good evening")
    }
}
myTime()
8
window.onload = function () {
  var userAge = +prompt("Enter your age");
  if (userAge > 18) {
    var mycolor = document.getElementById("h1_colorchange");
    mycolor.innerText = "Welcome";
    mycolor.style.color = "red";
  } else {
    var mycolor = document.getElementById("h1_colorchange");
    mycolor.innerText = "Welcome";
    mycolor.style.color = "blue";
  }
};
function changeToGreen(){
    var changeGreen = document.getElementById("h1_colorchange")
    changeGreen.style.color = "green"
}
9
function lotto() {
    var userNum  = +prompt("enter your number bettwen 56-0")
    for (var i = 0; i < 5; i++) {
        document.write(userNum+" ")
    }
    var zeroToFiveSix = Math.floor(Math.random() * 56 + 1);
    document.write("<br>"+zeroToFiveSix)
    if(userNum==zeroToFiveSix){
        alert("Success")
    }
    else{
        alert("Failed")
    }
}
// 2 - exercise
function getMyTime(){
    var myClock = document.getElementById("id_timer")
    document.write(new Date())
}
