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
function add1(){
	var get=document.getElementById("text");
	get.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	//判断输入符号，符合时生成标签
	if(e.keyCode==13||e.keyCode==32||e.keyCode==188){
		var label=document.getElementsByClassName("tag1");
	//遍历判断是否有相同标签
		for(var i=0;i<label.length;i++)
	{
		if(label[i].innerHTML==get.value.trim()){
		alert("已有此标签！");
		return false;}
	}
	//标签数超过10时移除开头标签
	if(label.length==10){
		label[0].remove();
	}
	var newTag=document.createElement("label");
	newTag.innerHTML=get.value.trim();
	newTag.className="tag1";
	var t=newTag.innerHTML;
	//点击删除功能
	newTag.onmouseover=function(){
	newTag.innerHTML="点击删除 "+newTag.innerHTML;
	newTag.onclick=function(){
		this.parentNode.removeChild(this);
	}
	}
	//鼠标移开时复原
	newTag.onmouseout=function(){
	newTag.innerHTML=t;
	}
	document.getElementsByTagName("div")[1].appendChild(newTag);}}
}

function add2(){
	var button=document.getElementById("button");
	var text=document.getElementById("textarea");
	button.onclick=function(){
	var label=document.getElementsByTagName("label");
	var l=document.getElementsByClassName("tag2");
	//设置字符串分割符号
	var tl=text.value.trim().split(/[ ,，、\r\n]/);
	for(var j=0;j<tl.length;j++){
	//设置标记，判断是否已有相同标签，有则置1
	var bj=0;
	if(l.length!=0){
	for(var i=0;i<l.length;i++)
	{
		if(l[i].innerHTML==tl[j]){
			var bj=1;
			break;}

	}
}
	if(bj==0){
	//标签数超过10个时删除开头标签
	if(l.length==10){
		l[0].parentNode.remove(l[0]);
	}
	var newTag=document.createElement("label");
	newTag.innerHTML=tl[j];
	newTag.className="tag2";
	document.getElementsByTagName("div")[2].appendChild(newTag);}}}
}

addLoadEvent(add1);
addLoadEvent(add2);
