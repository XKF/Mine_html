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
function KF(){
  var kf=document.getElementById("kf");
  kf.onclick=function(){
  DispWin = window.open('','注册信息', 'toolbar=no,status=no,width=180,height=180,top=400,left=800')
    message = "<img src='images/ewm.png' style='width:100%;height:100%;position:absolute;left:0;top:0;'>";
    DispWin.document.write(message);}
    return false;
}
function shopCar(){
	document.getElementById("shopcar").onclick=function(){
	var sum=0;
	var buylist="";
 	DispWin2 = window.open('','购物车', 'toolbar=no,status=no,width=300,height=200,top=400,left=800');
    for(var i=1;i<=8;i++){
    	if(document.getElementById("c"+i).value!=""){
    sum+=document.getElementById("c"+i).getAttribute("price")*document.getElementById("c"+i).value;
    buylist += document.getElementById("c"+i).name+" x "+document.getElementById("c"+i).value+" 价格 $"+document.getElementById("c"+i).getAttribute("price")*document.getElementById("c"+i).value+"<br><br>";
    }}
    buylist +="总计： $"+sum+"<br><br>";
    DispWin2.document.body.innerHTML=buylist;
};
}
$(document).ready(function(){	
$("#nav-left").hover(function(){
		$("#nav-left li").slideDown(400);
	});
$("#nav-left").mouseleave(function(){
		$("#nav-left li").slideUp(400);
	});
$("#search").keydown(function(e){if(e.keyCode==13) $("#form1").submit();});
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
$("#form2").submit(function(){
	layer.alert("Success：您已注册成功！",{icon: 6,title:'请牢记账号密码'});
	return false;
});
$("#username").keydown(function(e){if(e.keyCode==13) return false;});
$("#password").keydown(function(e){if(e.keyCode==13) return false;});
$("#phone").keydown(function(e){if(e.keyCode==13) return false;});
$("#buy").bind('click', function(){
	if($("#c1").val()==0&&$("#c2").val()==0&&$("#c3").val()==0&&$("#c4").val()==0&&$("#c5").val()==0&&$("#c6").val()==0&&$("#c7").val()==0&&$("#c8").val()==0){layer.msg('请确认数量大于0', {icon: 5});return false;}
	if(!(/^\d*$/ig).test(document.getElementById("c1").value)||!(/^\d*$/ig).test(document.getElementById("c2").value)||!(/^\d*$/ig).test(document.getElementById("c3").value)||!(/^\d*$/ig).test(document.getElementById("c4").value)||!(/^\d*$/ig).test(document.getElementById("c5").value)||!(/^\d*$/ig).test(document.getElementById("c6").value)||!(/^\d*$/ig).test(document.getElementById("c7").value)||!(/^\d*$/ig).test(document.getElementById("c8").value)){alert("数量不能为英文或汉字");return false;}
	if($("#c1").val()>20||$("#c2").val()>20||$("#c3").val()>20||$("#c4").val()>20||$("#c5").val()>20||$("#c6").val()>20||$("#c7").val()>20||$("#c8").val()>20){layer.alert('每种饮品上限20杯，请修改数量', {
  	title:'提示',
    skin: 'layui-layer-lan',
    closeBtn: 0,
    anim: 1 //动画类型
  });
	return false;
}
  	layer.alert('请确认订单^o^：<br><br>拿铁咖啡: '+$("#c1").val()+'杯<br><br>黑咖啡: '+$("#c2").val()+'杯<br><br>焦糖玛奇朵: '+$("#c3").val()+'杯<br><br>摩卡咖啡: '+$("#c4").val()+'杯<br><br>卡布奇诺: '+$("#c5").val()+'杯<br><br>香浓奶咖: '+$("#c6").val()+'杯<br><br>浓香可可: '+$("#c7").val()+'杯<br><br>冰咖啡: '+$("#c8").val()+'杯', {
  	title:'订单',
    skin: 'layui-layer-molv',
    closeBtn: 0,
    anim: 2 //动画类型
  },function(){
  	layer.alert("已加至购物车，请及时付款",{
  	title:'提示',
    skin: 'layui-layer-molv',
    closeBtn: 0,
    anim: 2 //动画类型})
});
 });
shopCar();
});
});
addLoadEvent(KF);


