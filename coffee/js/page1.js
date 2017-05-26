$(document).ready(function(){	
$("#cfd").click(function(){
  $("#menu").css("z-index","9999");
  $("#menu li").slideToggle(500);
  });
$(".undo").on('click',function(){
	layer.msg('抱歉，该功能暂未开发！', {icon: 5});return false;
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
function showGPS(){
	var address = document.getElementById("address");
	address.onclick=function(){
		window.open("gps.html","咖啡馆地址","toolbar=no,status=no,width=450,height=450,top=400,left=800");
		return false;
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
addLoadEvent(showGPS);
addLoadEvent(KF);