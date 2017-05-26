/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

/*    有参考其他学者代码   */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
 var chartWrap = document.getElementById("aqi-chart-wrap");
 var list="";
 var width;
 for(var chartDate in chartData){
  var color=Math.random().toString(16).substring(2,8);
  if(pageState.nowGraTime=="day") width="10px";
  else if (pageState.nowGraTime=="week") width="50px";
  else width="100px";
  list+='<div style="height:'+chartData[chartDate]+'px;width:'+width+';background-color:'+color+';"title="'+ pageState.nowSelectCity + '  ' + chartDate + '  咖啡销量:' + chartData[chartDate]+'"></div>';
   }
  chartWrap.innerHTML=list;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(radio) {
  // 确定是否选项发生了变化 
  if(pageState.nowGraTime==radio.value) return;
  // 设置对应数据
  else pageState.nowGraTime=radio.value;
  // 调用图表渲染函数
  initAqiChartData();
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(select) {
  // 确定是否选项发生了变化 
  if (pageState.nowSelectCity==select.value) {return;}
  // 设置对应数据
  else pageState.nowSelectCity=select.value;
  // 调用图表渲染函数
  initAqiChartData();
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
var radio=document.getElementsByTagName("input");
for (var i = 0; i < radio.length; i++) {
   (function (i) {
            radio[i].addEventListener('change', function () {
                graTimeChange(this);
            });
        })(i);
}
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var select=document.getElementById("city-select");
  var addOption;
  for(var key in aqiSourceData){
    addOption+='<option value="'+key+'">'+key+'</option>';
  }
  select.innerHTML=addOption;
  pageState.nowSelectCity=select.value;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  select.addEventListener('change', function () {
        citySelectChange(this);
    })
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  var Daydata = aqiSourceData[pageState.nowSelectCity];
  function WeekData(){
    var sum=0;
    var i=0;
    var week=1;
    var data={};
    for (var key in Daydata) {
      sum+=Daydata[key];
      i++;
      if(new Date(key).getDay()==0){
        data['2016年第'+week+'周']=parseInt(sum/i);
        week++;
        i=0;
        sum=0;
      }
    }
    return data;
  }
  function MonthData(){
    var sum=0;
    var i=0;
    var month=1;
    var data={};
    for(var key in Daydata){
      var date=new Date(key);
      var year=date.getFullYear();
      var nextMonth=date.getMonth()+1;
      console.log(nextMonth);
      if(nextMonth==12){
        year++;
        nextMonth=0;
      }
       var nextMonthDay = new Date(year, nextMonth, 1); //新建下月的第一天
       var lastDay = new Date(nextMonthDay.getTime() - 1000 * 60 * 60 * 24).getDate(); //下月第一天减掉一天获取到当月最后一天
       sum+=Daydata[key];
       i++;
       if (date.getDate()==lastDay) {
        data[date.getFullYear()+'年'+month+'月']=parseInt(sum/i);
           console.log(data[date.getFullYear()+'年'+month+'月']);
        month++;
        sum=0;
        i=0;
       }
    }
    return data;
  }
  // 处理好的数据存到 chartData 中
  switch(pageState.nowGraTime){
    case "day":chartData=Daydata;break;
    case "week":chartData=WeekData();break;
    case "month":chartData=MonthData();break;
  }
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

window.onload=init;
