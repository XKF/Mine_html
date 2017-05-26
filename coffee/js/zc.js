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
function add1(){
	var s1=document.getElementsByTagName("select")[0];
	s1.onmousedown=function(){
		this.innerHTML="<option value='0'>——</option><option value='1'>广 东</option><option value='2'>湖 南</option><option value='3'>广 西</option><option value='4'>云 南</option>";
	}
}
function add2(){
	var s2=document.getElementsByTagName("select")[1];
	s2.onmousedown=function(){
		if(document.getElementsByTagName("select")[0].value==0) this.innerHTML="<option value='0'>——</option>";
		if(document.getElementsByTagName("select")[0].value==1) this.innerHTML="<option value='0'>——</option><option value='1'>深 圳</option><option value='2'>广 州</option><option value='3'>潮 州</option><option value='4'>汕 头</option>";
		if(document.getElementsByTagName("select")[0].value==2) this.innerHTML="<option value='0'>——</option><option value='1'>长 沙</option><option value='2'>韶 山</option><option value='3'>衡 山</option><option value='4'>宁 乡</option>";
		if(document.getElementsByTagName("select")[0].value==3) this.innerHTML="<option value='0'>——</option><option value='1'>梧 州</option><option value='2'>桂 林</option><option value='3'>柳 州</option><option value='4'>南 宁</option>";
		if(document.getElementsByTagName("select")[0].value==4) this.innerHTML="<option value='0'>——</option><option value='1'>昆 明</option><option value='2'>玉 溪</option><option value='3'>丽 江</option><option value='4'>保 山</option>";
	}
}
function keyup(){
	var card=document.getElementById("idcard");
	card.onblur=function(){
		if(this.value=="") return false;
		else if(!(/^\d{17}[X]$/ig).test(this.value)&&!(/^\d{18}$/ig).test(this.value)){alert("身份证格式错误！请重新输入");} 
	}
}
function show(){
	var container=document.getElementById("container");
	var form=document.getElementsByTagName("form");
	form[0].onsubmit=function(){
		var password=document.getElementById("password").value;
		container.innerHTML="<h1>注册成功</h1><p>用户名: "+document.getElementsByTagName("input")[0].value+"</p><p>账号: "+parseInt(Math.random()*100000000)+"</p><p>密码: "+password+"</p><p>请您务必牢记！！！</p>";
		container.style.border="2px solid white";
		container.style.padding="20px 50px";
		return false;
	}
}
addLoadEvent(add1);
addLoadEvent(add2);
addLoadEvent(keyup);
addLoadEvent(show);