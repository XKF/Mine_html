function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

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
//输入文本框添加tag标签
function LeftEnter(){
	var get=document.getElementById("text");
	var LE=document.getElementById("LeftEnter");
	LE.onclick=function(){
		if(get.value=="") {alert("不能为空！");return false;}
		else{
		var newTag=document.createElement("label");
		newTag.innerHTML=get.value;
		if(document.getElementsByTagName("label").length!=0)
		document.getElementsByTagName("label")[0].parentNode.insertBefore(newTag,document.getElementsByTagName("label")[0]);
		else document.getElementById("label").appendChild(newTag);
}
deleteLabel();
}
}
function RightEnter(){
	var get=document.getElementById("text");
	var RE=document.getElementById("RightEnter");
	RE.onclick=function(){
		if(get.value=="") {alert("不能为空！");return false;}
		else{
		var newTag=document.createElement("label");
		newTag.innerHTML=get.value;
		document.getElementById("label").appendChild(newTag);
	}
	deleteLabel();
}
}
function LeftOut(){
	var l=document.getElementsByTagName("label");
	var get=document.getElementById("text");
	var LO=document.getElementById("LeftOut");
	LO.onclick=function(){
		var s=l[0].innerHTML;
		document.getElementById("label").removeChild(l[0]);
		alert("删除的数值为："+s);
	}
}
function RightOut(){
	var l=document.getElementsByTagName("label");
	var get=document.getElementById("text");
	var RO=document.getElementById("RightOut");
	RO.onclick=function(){
		var s=l[l.length-1].innerHTML;
		document.getElementById("label").removeChild(l[l.length-1]);
		alert("删除的数值为："+s);
		
	}
}
function deleteLabel(){
	var l=document.getElementsByTagName("label");
	for(var i=0;i<l.length;i++){
		l[i].onclick=function(){
			this.parentNode.removeChild(this);
		}
	}
}
addLoadEvent(LeftEnter);
addLoadEvent(RightEnter);
addLoadEvent(LeftOut);
addLoadEvent(RightOut);