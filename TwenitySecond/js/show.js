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

//动画改变颜色
function changeBlue(s,t){
s.classList.add("c_color");
s.style.animationDelay=t+"s";
setTimeout(function(){s.classList.remove('c_color');},t*1000+2000);
}

function del(){
	var color=document.getElementsByClassName("c_color");
	if(color.length>0){
	for(var i=0;i<color.length;i++){
		color[i].setAttribute("class",color[i].getAttribute("class").split("c_color").join(" "));
	}}
}

//前序遍历递归函数
function f_search(left,t){
var y=left.children[0];
var x=left.children[1];
if(y){
changeBlue(y,t);
t+=2;
t=f_search(y,t);
if(x){
changeBlue(x,t);
t+=2;
t=f_search(x,t);
return t;
}
}
if(!y) return t;
}

//前序遍历
function front(){
var x=1;
var first=document.getElementById("first");
changeBlue(first,x);
x+=2;
x=f_search(first,x);
//恢复按钮使用
setTimeout(function(){
document.getElementById("front").disabled=false;
document.getElementById("middle").disabled=false;
document.getElementById("after").disabled=false;},x*1000);
}

//中序遍历
function middle(){
	var x=1;
	var first=document.getElementById("first");
	var one=first.children[0];
	var oneBrother=first.children[1];
	for(var i=0;i<2;i++){
		if(i==0){
		var two=one.children[0];
		var twoBrother=one.children[1];
	}
		else{
		var two=oneBrother.children[0];
		var twoBrother=oneBrother.children[1];
		}
		for(var j=0;j<2;j++){
					if(j==0){
					var third=two.children[0];
					var thirdBrother=two.children[1];
					changeBlue(third,x);
					x+=2;
					changeBlue(two,x);
					x+=2;
					changeBlue(thirdBrother,x);
					x+=2;
					if(i==0){
					changeBlue(one,x);
					x+=2;
				}else{
					changeBlue(oneBrother,x);
					x+=2;
				}
					}
					else{
					var third=twoBrother.children[0];
					var thirdBrother=twoBrother.children[1];
					changeBlue(third,x);
					x+=2;
					changeBlue(twoBrother,x);
					x+=2;
					changeBlue(thirdBrother,x);
					x+=2;
					if(i==0){
					changeBlue(first,x);
					x+=2;
					}
					}
								
}		
}
setTimeout(function(){
document.getElementById("middle").disabled=false;
document.getElementById("after").disabled=false;
document.getElementById("front").disabled=false;},x*1000);
}

//后序遍历
function after(){
	var x=1;
	var first=document.getElementById("first");
	var one=first.childNodes;
	for(var i=0;i<one.length;i++){
		if(one[i].nodeType===1){
		var two=one[i].childNodes;
		for(var j=0;j<two.length;j++){
			if(two[j].nodeType===1){
			var third=two[j].childNodes;
			for(var z=0;z<third.length;z++){
				if(third[z].nodeType===1){
				changeBlue(third[z],x);
				x+=2;
			}
			}
				changeBlue(two[j],x);
				x+=2;
		}
	}
	changeBlue(one[i],x);
	x+=2;
	}
}
changeBlue(first,x);
x+=2;
setTimeout(function(){
document.getElementById("after").disabled=false;
document.getElementById("middle").disabled=false;
document.getElementById("front").disabled=false;},x*1000);
}

//前序遍历绑定事件监听
function b1(){
	document.getElementById("front").onclick=function(){
		//按钮禁用
		document.getElementById("front").disabled=true;
		document.getElementById("middle").disabled=true;
		document.getElementById("after").disabled=true;
		document.getElementsByTagName("h1")[0].innerHTML="前序遍历演示"
		front();
	}
}

//中序遍历绑定事件监听
function b2(){
	document.getElementById("middle").onclick=function(){
		document.getElementById("middle").disabled=true;
		document.getElementById("front").disabled=true;
		document.getElementById("after").disabled=true;
		document.getElementsByTagName("h1")[0].innerHTML="中序遍历演示"
		middle();
	}
}

//后序遍历绑定事件监听
function b3(){
	document.getElementById("after").onclick=function(){
		document.getElementById("after").disabled=true;
		document.getElementById("middle").disabled=true;
		document.getElementById("front").disabled=true;
		document.getElementsByTagName("h1")[0].innerHTML="后序遍历演示"
		after();
	}
}

addLoadEvent(b1);
addLoadEvent(b2);
addLoadEvent(b3);



