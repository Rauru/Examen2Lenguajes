'use strict';


var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var exp = '{ "Type": " * ", "Left": { "Type": "+" , "Left": "1", "Right": "2" }, "Right": "3" }';
var exp1 = '{ "Type": " * ", "Left": "2", "Right": "3" }';
const expresion = { Type: '*', Left: { Type: '+', Left: 1, Right: 3 }, Right: 3 }
var val = "";
var valeval = "";
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var obj = JSON.parse(exp, function (key, value) {
    if (key == "Type") {
        val += value + " ";
        //console.log(value );
        return value + " ";
    } else if (key == "Left") {
        if (isNumber(value)) {
            val += value + " ";
        }
        //console.log(value);
    } else if (key == "Right") {
        if (isNumber(value)) {
            val += value + " ";
        }
    }
    else {
        //console.log("no");
        return value;
    }
});
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var temp = "";
var temp1 = "";
var result = "";
for (var i = 0; i < val.length; i++) {
    
    if (val[i] == "+" || val[i] == "-" || val[i] == "*" || val[i] == "/") {
        temp += val[i];
    } else if (isNumber(val[i])) {
        temp1 += val[i];
    }
}
var itert = 0;
for (var i = 0; i < temp1.length; i++) {
    var iter = 0;
    result += temp1[i];
    if (itert < temp.length) {
        result += temp[itert];
        itert++;
    }
}





/*for (var i = 0; i < val.length; i++) {
    var temp = "";
    var temp1 = "";
    var result = "";
    if (val[i] == "+" || val[i] == "-" || val[i] == "*" || val[i] == "/") {
        temp += val[i];
    } else if (isNumber(val[i]) )
    {
        temp1 += val[i];
    }
    for (var i = 0; i < temp.length; i++) {
        result += temp1[i] + temp[i];
        console.log(result);
    }
//* + 1 2 3
}*/

console.log(eval(result));
//console.log('Hello world' + document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth);