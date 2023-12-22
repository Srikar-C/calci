var newOne=false;
function one() {
    if(newOne){
        document.getElementById("data").value = "1";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "1";
}
function two() {
    if(newOne){
        document.getElementById("data").value = "2";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "2";
}
function three() {
    if(newOne){
        document.getElementById("data").value = "3";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "3";
}
function four() {
    if(newOne){
        document.getElementById("data").value = "4";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "4";
}
function five() {
    if(newOne){
        document.getElementById("data").value = "5";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "5";
}
function six() {
    if(newOne){
        document.getElementById("data").value = "6";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "6";
}
function seven() {
    if(newOne){
        document.getElementById("data").value = "7";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "7";
}
function eight() {
    if(newOne){
        document.getElementById("data").value = "8";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "8";
}
function nine() {
    if(newOne){
        document.getElementById("data").value = "9";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "9";
}
function zero() {
    if(newOne){
        document.getElementById("data").value = "0";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "0";
}
function plus() {
    if(newOne){
        document.getElementById("data").value = "+";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "+";
}
function minus() {
    if(newOne){
        document.getElementById("data").value = "-";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "-";
}
function multi() {
    if(newOne){
        document.getElementById("data").value = "*";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "*";
}
function divide() {
    if(newOne){
        document.getElementById("data").value = "/";
        newOne=false;
        return;
    }
    document.getElementById("data").value += "/";
}
function clr() {
    document.getElementById("data").value = "";
}
function delet() {
    document.getElementById("data").value = data.value.toString().slice(0, -1);
}
function equal() {
    var str = data.value.toString();
    var a = [];
    if(str[0]=="+"){
        str=str.value.toString().slice(1,str.length);
    }
    for (var i = 0; i < str.length; i++) {
        a.push(str.charAt(i));
    }
    console.log("A: " + a);
    for (var i = 0; i < a.length && a.length >= 3; i++) {
        if (a[i] === "*") {
            var r = parseInt(a[i + 1]);
            var l = parseInt(a[i - 1]);
            var sum = r * l;
            a.splice(i - 1, 3, sum.toString());
            i = 0;
        }
    }
    console.log(a);
    for (var i = 0; i < a.length && a.length >= 3; i++) {
        if (a[i] === "/") {
            var r = parseInt(a[i + 1]);
            var l = parseInt(a[i - 1]);
            var sum = l / r;
            a.splice(i - 1, 3, sum.toString());
            i = 0;
        }
    }
    console.log(a);
    for (var i = 0; i < a.length && a.length >= 3; i++) {
        if (a[i] === "+") {
            var r = parseInt(a[i + 1]);
            var l = parseInt(a[i - 1]);
            var sum = r + l;
            a.splice(i - 1, 3, sum.toString());
            i = 0;
        }
    }
    console.log(a);
    for (var i = 0; i < a.length && a.length >= 3; i++) {
        if (a[i] === "-") {
            var r = parseInt(a[i + 1]);
            var l = parseInt(a[i - 1]);
            var sum = l - r;
            a.splice(i - 1, 3, sum.toString());
            i = 0;
        }
    }
    if (a.length === 2) {
        if (a[i] === "-") {
            console.log(a[0] + a[1]);
            document.getElementById("data").value=a[0]+a[1];
            return;
        }
    }
    console.log(a[0]);
    document.getElementById("data").value=a[0];
    newOne=true;
}
function dot(){
    document.getElementById("data").value += ".";
}
function percent(){
    document.getElementById("data").value=data.value/100;
}