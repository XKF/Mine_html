/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var key=document.getElementById("aqi-city-input").value.trim();
	var keynum=document.getElementById("aqi-value-input").value.trim();
aqiData[key]=keynum;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
var tr=document.createElement("tr");
tr.innerHTML="<td>"+document.getElementById("aqi-city-input").value.trim()+"</td><td>"+document.getElementById("aqi-value-input").value.trim()+"</td><td><button>删除</button></td>";
document.getElementById("aqi-table").appendChild(tr);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {

  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(x) {
  // do sth.
  x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode); 
}

function init() {
var tr=document.createElement("tr");
tr.innerHTML="<td>城市</td><td>空气质量</td><td>操作</td>";
document.getElementById("aqi-table").appendChild(tr);
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
document.getElementById("add-btn").onclick=function(){addBtnHandle();
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
 for (var i = 0; i < document.getElementById("aqi-table").getElementsByTagName("button").length; i++) {
document.getElementById("aqi-table").getElementsByTagName("button")[i].onclick=function(){delBtnHandle(this);}
}
}
document.getElementById("aqi-city-input").onblur=function(){
	if(!isNaN(this.value)) alert("城市名不能输入数字！");
}
document.getElementById("aqi-value-input").onblur=function(){
	if(isNaN(this.value)) alert("空气质量必须为数字！");
}
}
window.onload=init;
