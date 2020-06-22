var obj = document.getElementById("Header");
var ot = obj.offsetTop;
document.onscroll = function () {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    obj.setAttribute("data-fixed",st >= ot?"fixed":"")}