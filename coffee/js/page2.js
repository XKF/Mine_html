function addLoadEvent(func){
	var oldonload=window.onload;
 	if (typeof window.onload!='function') {
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function time(){
	var d=new Date();
	document.getElementById("time").value=d.getFullYear()+"年"+d.getMonth()+"月"+d.getDate()+"日"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	setTimeout("time()",1000);
}
function changehead() {
document.getElementById("bt").onchange=function(){
  headcolor = document.getElementById("bt").value;
    console.log(headcolor);
   var h=document.getElementsByTagName("h1");
  for (var i = 0; i < h.length; i++) {
  	h[i].style.color=headcolor;}
}}
function changebody() {
document.getElementById("dl").onchange=function(){
  var doccolor = document.getElementById("dl").value;
  console.log(doccolor);
  var p=document.getElementsByTagName("p");
  for (var i = 0; i < p.length; i++) {
  	p[i].style.color=doccolor;}
}}
addLoadEvent(time);
addLoadEvent(changehead);
addLoadEvent(changebody);