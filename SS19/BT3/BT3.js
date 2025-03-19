var vndToUsd= parseInt(prompt("VND to USD: "));
var usdToVnd= parseInt(prompt("USD to VND: "));
let vnd=23000;
let usdToVndResult= vndToUsd/vnd;

document.writeln("USD to VND: " + usdToVndResult + "<br>");

let vndToUsdResult= usdToVnd*vnd;

document.writeln("VND to USD: " + vndToUsdResult);