var jl=1;
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
		var l=document.getElementsByTagName("label");
		if(get.value=="") {alert("不能为空！");return false;}
		else if(get.value<10||get.value>100) {alert("数值必须为 10~100！");return false;}
		else if(l.length>60) {alert("元素数量已饱满，请勿超过60！");return false;}
		else{
		if(l.length!=0){
		for(var i=0;i<l.length;i++){
			l[i].style.marginLeft=(i+2)*21+"px";
		}}
		var newTag=document.createElement("label");
		newTag.style.height=get.value+"px";
		newTag.style.marginLeft="20px";
		newTag.title="值:"+get.value+"px"
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
		var l=document.getElementsByTagName("label");
		if(get.value=="") {alert("不能为空！");return false;}
		else if(get.value<10||get.value>100) {alert("数值必须为 10~100！");return false;}
		else if(document.getElementsByTagName("label").length>60) {alert("元素数量已饱满，请勿超过60！");return false;}
		else{
		var newTag=document.createElement("label");
		newTag.style.height=get.value+"px";
		newTag.style.marginLeft=(l.length+1)*21+"px";
		newTag.title="值:"+get.value+"px"
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
		var s=l[0].style.height.split("px")[0];
		document.getElementById("label").removeChild(l[0]);
		alert("删除的数值为："+s);
		for (var i = 0; i <l.length; i++) {
			l[i].style.marginLeft=parseInt(l[i].style.marginLeft.split("px")[0],10)-21+"px";
			}
	}
}
function RightOut(){
	var l=document.getElementsByTagName("label");
	var get=document.getElementById("text");
	var RO=document.getElementById("RightOut");
	RO.onclick=function(){
		var s=l[l.length-1].style.height.split("px")[0];
		document.getElementById("label").removeChild(l[l.length-1]);
		alert("删除的数值为："+s);
		
	}
}
function deleteLabel(){
	var l=document.getElementsByTagName("label");
	for(var i=0;i<l.length;i++){
		l[i].index=i;
		l[i].onclick=function(){
			var l2=document.getElementsByTagName("label");
			var index=this.index;
			this.parentNode.removeChild(this);
			for (var i = index; i <l2.length; i++) {
			l2[i].style.marginLeft=parseInt(l2[i].style.marginLeft.split("px")[0],10)-21+"px";
			}
			deleteLabel();
		}
	}
}
function sort(){
	document.getElementById("Sort").onclick=function(){
	var l=document.getElementsByTagName("label");
	if(l.length==0||l.length==1) return false;
	var temp;
	var ex_title;
	for(var i=0;i<l.length;i++){
		for (var j = i; j < l.length; j++) {
			if(parseInt(l[i].style.height.split("px")[0])>parseInt(l[j].style.height.split("px")[0])){
				temp=l[i].style.height;
				ex_title=l[i].title;
				l[i].style.height=l[j].style.height;
				l[i].title=l[j].title;
				l[j].style.height=temp;
				l[j].title=ex_title;
			}
		}
	}
	}
}
addLoadEvent(LeftEnter);
addLoadEvent(RightEnter);
addLoadEvent(LeftOut);
addLoadEvent(RightOut);
addLoadEvent(sort);