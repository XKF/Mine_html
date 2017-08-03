//太空飞船数量
var space_ship = [];
var MAX_SHIP_NUM = 4;

//太空飞船宽度和高度
var SHIP_SIZE_WIDTH_1 = 100;
var SHIP_SIZE_WIDTH_2 = 45;
var SHIP_SIZE_HEIGHT_1 = 36;
var SHIP_SIZE_HEIGHT_2 = 20;

//飞船总能量
var SHIP_TOTAL_ENERGY = 100;

//飞船飞行时每毫秒消耗能量
var SHIP_FLY_CONSUME = SHIP_TOTAL_ENERGY * 0.05 / 1000;

//飞船每毫秒太阳能充电
var SHIP_CHARGE = SHIP_TOTAL_ENERGY * 0.02 /1000;

//飞船飞行的每毫秒角速度
var SHIP_SPEED_DEG = 100 / 1000;

//飞船轨道高度
var ORBIT_ALTITUDE_1 = 70;
var ORBIT_ALTITUDE_2 = 40;

//星球半径
var PLANET_RADIUS_1 = 100;
var PLANET_RADIUS_2 = 50;

//获取相应的dom对象
var add = document.getElementById("add");
var cir = document.getElementById("circle");
var texta = document.getElementsByTagName("textarea")[0];
var ele = document.getElementById('ship-bt');
//新建一个数组用来存取被销毁的飞船索引，以备后面添加飞船时复用
var len = 0;//计算space_ship实际长度
var index = [];//新数组
var index_l = 0;//新数组长度

//飞船对象
var SpaceShip = function (id, speed, time, deg) {
    this.id = id;
    this.state = 'static';
    this.totalEnergy = SHIP_TOTAL_ENERGY;
    this.remainEnergy = SHIP_TOTAL_ENERGY;
    // 速度用角速度计算
    this.speed = speed;
    this.time = time;
    this.deg = deg;
    this.energy = 100;
};

// 命令对象
var Command = function (shipId, cmd) {
    this.shipId = shipId + 1;
    this.cmd = cmd;
};

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

//设置飞船在宇宙的坐标位置
function getLocation(deg){
	if(window.screen.width > 640){
	var z = PLANET_RADIUS_1 + ORBIT_ALTITUDE_1;
	var x = Math.sin(deg * Math.PI * 2 / 360) * z;
	var y = Math.cos(deg * Math.PI * 2 / 360) * z * -1;
	x += PLANET_RADIUS_1 - SHIP_SIZE_WIDTH_1 / 2;
    y += PLANET_RADIUS_1 - SHIP_SIZE_HEIGHT_1 / 2;
}
else{
	var z = PLANET_RADIUS_2 + ORBIT_ALTITUDE_2;
	var x = Math.sin(deg * Math.PI * 2 / 360) * z;
	var y = Math.cos(deg * Math.PI * 2 / 360) * z * -1;
	x += PLANET_RADIUS_2 - SHIP_SIZE_WIDTH_2 / 2;
    y += PLANET_RADIUS_2 - SHIP_SIZE_HEIGHT_2 / 2;
}
	x = Math.round(x);
	y = Math.round(y);
	return [x,y];
}

//飞船的环绕运动
function degChange(xz,shipID){
	var ship = space_ship[shipID - 1];
	if(ship==undefined) return false;
	ship.deg = ((ship.time++) * SHIP_SPEED_DEG) % 360;
	var loc = getLocation(ship.deg);
	xz.style.top = loc[1] + "px";
	xz.style.left = loc[0] + "px";
	xz.style.transform = 'rotate(' + ship.deg +'deg)';
}

//飞船的环绕运动时间计时器
function TimeChange(xz,shipID){
	var ship = space_ship[shipID - 1];
	var s = setTimeout(function(){
		if(ship==undefined) return false;
		if(ship.state=="static"){
		//能量消耗设计
		if(Math.floor(ship.energy) == 0){
			ship.state="stop";
			Log(shipID+"号飞船能量已耗尽，停机补充中");
		}
		else{
			ship.energy-=0.05;
			//能量百分数表示
			xz.innerHTML=Math.floor(ship.energy)+"%";
		}
		degChange(xz,shipID);
		TimeChange(xz,shipID);
	}
		else if(ship.state=="stop"){
		//能量耗尽停机补充
		if(Math.floor(ship.energy)<SHIP_TOTAL_ENERGY){
			ship.energy+=0.01;
			//能量百分数表示
			xz.innerHTML=Math.floor(ship.energy)+"%";
			TimeChange(xz,shipID);
		}
		else TimeChange(xz,shipID);
	}
		else clearTimeout(s);
},1);
}

//新建飞船
function addShip(){
var id = 1;
add.onclick=function(){
			var ship = document.createElement("div");
			ship.className = "space-ship";
			ship.style.borderColor = "#" + Math.random().toString(16).substring(2,8);
			ship.id = "number"+id;
			//飞船数上限为4
			if(len==4){
            	alert("轨道飞船已打上限!请销毁飞船后添加");
            }
            else{
            //未超4辆飞船时可添加飞船
            cir.appendChild(ship);
            var idx;
            len++;
            //暂未销毁过飞船添加飞船
            if(index.length==0){
			idx = id % 5 - 1;
			}
			else{
			//销毁飞船后再次添加飞船
			idx = index[0];
			index.shift();//把index第一个元素弹出栈
			index_l--;//新数组长度减1
			}
			space_ship[idx] = new SpaceShip(id,SHIP_SPEED_DEG,0,1);//新建SpaceShip对象
			ship.innerHTML = space_ship[idx].energy+"%";
			//添加操控条
            var control = document.createElement('div');
            control.id = "con-" + id;
            if(window.screen.width > 640){
          	control.innerHTML = '<div id="control-' + id + '">' +
                '<label>对'+id+'号飞船下达指令:</label>' +
                '<input onclick="commander.fly('+idx+","+id+')" type="button" value="开始飞行">' +
                '<input onclick="commander.stop('+idx+","+id+')" type="button" value="停止飞行">' +
                '<input onclick="commander.dispose('+idx+","+id+')"  type="button" value="销毁">' +
                '</div>';	
            }
            else{
            control.innerHTML = '<div id="number' + id + '">' +
                '<label>对'+id+'号飞船下达指令:</label><br>' +
                '<input onclick="commander.fly('+idx+","+id+')" type="button" value="开始飞行">' +
                '<input onclick="commander.stop('+idx+","+id+')" type="button" value="停止飞行">' +
                '<input onclick="commander.dispose('+idx+","+id+')"  type="button" value="销毁">' +
                '</div>';	
            }
            Log("Success: "+(id++)+" 号飞船已发送到指定轨道!");
            ele.appendChild(control);
            }
}
}

//输出内容
function Log(text){
texta.value += text + '\n';
texta.scrollTop = texta.scrollHeight;
}

//丢包设计and各命令对应执行语句
var Mediator = {
    // 命令丢包率
    errorRate: 0.3,
    broadcast: function (cmd,Id) {
        if (Math.random() <= this.errorRate) {
            Log('Administrator: 命令传输受到干扰, 丢包');
            return;
        }
        // 命令传输存在 1 秒的延迟
        setTimeout(function () {
            Log('Administrator: 命令传输成功, 让编号为' + Id + '的飞船 ' + cmd.cmd);
            // 广播命令
            var ship = document.getElementById("number"+Id);
            //开始命令对应执行语句
  			if(cmd.cmd=="start"){
  			if(space_ship[cmd.shipId - 1].state=="stop"){
  			space_ship[cmd.shipId - 1].state="static";
  			}
  			else{
  			TimeChange(ship,cmd.shipId);
  			}
  			}
  			//停止命令对应执行语句
  			else if(cmd.cmd=="stop"){
  			space_ship[cmd.shipId - 1].state="stop";
  			}
  			//销毁命令对应执行语句
  			else if(cmd.cmd=="dispose"){
  			cir.removeChild(ship);
  			ele.removeChild(document.getElementById("con-"+Id));
  			space_ship[cmd.shipId - 1] = undefined;
  			index[index_l++] = cmd.shipId - 1;
  			//销毁时索引数组添加元素并排序
  			index.sort();
  			//space_ship实际长度减1
  			len--;
  			}
        }, 1000);
    }
};

//指挥官对象
var commander = {
	init: function(){
        for (var i = 0; i < MAX_SHIP_NUM; i++) {
            space_ship[i] = undefined;
        }
	},
	fly: function(shipNumber,id){
		//每个按钮触发事件
		var cmd = new Command(shipNumber,"start");//建一个命令对象cmd
		Log("命令已发出：编号 " + id + " 飞船请启动!");//指挥官控制台输出语句
		Mediator.broadcast(cmd,id);//执行命令对应的语句
	},
	stop: function(shipNumber,id){
		var cmd = new Command(shipNumber,"stop");
		Log("命令已发出：编号 " + id + " 飞船请停止!");
		Mediator.broadcast(cmd,id);
	},
	dispose: function(shipNumber,id){
		var cmd = new Command(shipNumber,"dispose");
		Log("命令已发出：编号 " + id + " 飞船请自爆!");
		Mediator.broadcast(cmd,id);
	}
}

addLoadEvent(addShip);