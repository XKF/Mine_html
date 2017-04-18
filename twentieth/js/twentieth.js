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
function removeClass(element){
element.className="";
}
function search(){
	document.getElementById("go").onclick=function(){
		var t=document.getElementById("enter").value;
		var p=document.getElementsByTagName("p");
		for (var i = 0; i < p.length; i++) {
			if(p[i].innerHTML.indexOf(t)!=-1){
			p[i].className="BJ";
		}
	}
}
}

function add(){
	var button=document.getElementById("add");
	var text=document.getElementById("textarea");
	button.onclick=function(){
	//设置字符串分割符号
	var tl=text.value.trim().split(/[ ,，、\r\n]/);
	for(var i=0;i<tl.length;i++){
	var newTag=document.createElement("p");
	newTag.innerHTML=tl[i];
	newTag.onclick=function(){
		this.parentNode.removeChild(this);
	}
	newTag.title="点击删除";
	document.getElementById("bottom").appendChild(newTag);
	}
	var p=document.getElementsByTagName("p");
	for(var i=0;i<p.length;i++) removeClass(p[i]);
}
}
function empty(){
	var button=document.getElementById("empty");
	button.onclick=function(){
		document.getElementById("textarea").value="";
	}
}
addLoadEvent(add);
addLoadEvent(search);
addLoadEvent(empty);