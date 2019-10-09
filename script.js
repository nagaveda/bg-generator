var css=document.querySelector("h3");
var color1=document.getElementsByClassName("color1")[0];
var color2=document.getElementsByClassName("color2")[0];
var body=document.getElementsByTagName("body")[0];

var changeColor=function(){
    body.style.background="linear-gradient(to top right, "+color1.value+" ,  "+color2.value+")";
    css.innerHTML=body.style.background;
}

//color1.addEventListener("input",changeColor)
//color2.addEventListener("input",changeColor)


