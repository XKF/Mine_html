$(document).ready(function(){	
$("#nav-left").hover(function(){
		$("#nav-left li").slideDown(400);
	});
$("#nav-left").mouseleave(function(){
		$("#nav-left li").slideUp(400);
	});
$("#dl").on('click',function(){
	layer.msg('登录界面，暂未开发！', {icon: 5});return false;
});
$("#dd").on('click',function(){
	layer.msg('订单界面，暂未开发！', {icon: 5});return false;
});
$(".undo").on('click',function(){
	layer.msg('抱歉，该功能暂未开发！', {icon: 5});return false;
});
$("#activity").on('click', function(){
  	layer.alert('近期活动公告：<br><br>拿铁咖啡 买一送一！<br><br>焦糖玛奇朵 限时八折！<br><br>新品印度香辣咖啡限时上架~欢迎品尝！', {
  	title:'优惠活动☆☆☆邀你来喝',
    skin: 'layui-layer-lan',
    closeBtn: 0,
    anim: 4 //动画类型
  });
  return false;
});
$(".frontBg").hover(function(){
	$(this).children(".play").css("display","block");
	$(this).children(".inBg").css({"opacity":"0.6","background-color":"black"});
},function(){
	$(this).children(".play").css("display","none");
	$(this).children(".inBg").css("background-color","transparent");
});
});
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
function change(){
	var b1=document.getElementById("b1");
	var b2=document.getElementById("b2");
	b1.onclick=function(){
		var contain=document.getElementById("container");
		if(parseInt(contain.style.left)==-100) return false;
		else
		contain.style.left=parseInt(contain.style.left) - 25 + "%";
	}
		b2.onclick=function(){
		var contain=document.getElementById("container");
		if(parseInt(contain.style.left)==0) return false;
		else
		contain.style.left=parseInt(contain.style.left) + 25 + "%";
	}
}
function bg(){
	var videoBg=document.getElementById("showPlayer");
	var blackBg=document.getElementById("videoFrontBg");
	videoBg.onmouseleave=function(){
		document.getElementById("videoFrontBg").style.display="block";
	}
	blackBg.onmouseenter=function(){
		this.style.display="none";
	}
}
function KF(){
	var kf=document.getElementById("kf");
	kf.onclick=function(){
	DispWin = window.open('','注册信息', 'toolbar=no,status=no,width=180,height=180,top=400,left=800')
    message = "<img src='images/ewm.png' style='width:100%;height:100%;position:absolute;left:0;top:0;'>";
    DispWin.document.write(message);}
    return false;
}
addLoadEvent(change);
addLoadEvent(bg);
addLoadEvent(KF);