
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
 function get(id) {  
        return document.getElementById(id);  
    }  

    function createDraggableObject() {  
        return {  
            obj: null, left: 0, top: 0,  
            oldX: 0, oldY: 0, isMouseLeftButtonDown: false,  
            init: function (obj) {  
                this.obj = obj;  
                var that = this;  
                this.obj.onmousedown = function (args) {  
                    var evt = args || event;  
                    this.style.zIndex = 100;  
                    that.isMouseLeftButtonDown = true;  
                    that.oldX = evt.clientX;  
                    that.oldY = evt.clientY;  
                    if (this.currentStyle) {  
                        that.left = parseInt(this.currentStyle.left);  
                        that.top = parseInt(this.currentStyle.top);  
                    }  
                    else {  
                        var divStyle = document.defaultView.getComputedStyle(this, null);  
                        that.left = parseInt(divStyle.left);  
                        that.top = parseInt(divStyle.top);  
                    }  
                };  
                this.obj.onmousemove = function (args) {  
                    that.move(args || event);  
                };  
                this.obj.onmouseup = function () {  
                    that.isMouseLeftButtonDown = false;  
                    this.style.zIndex = 0;  
                };  
            },  
            move: function (evt) {  
                if (this.isMouseLeftButtonDown) {  
                    var dx = parseInt(evt.clientX - this.oldX);  
                    var dy = parseInt(evt.clientY - this.oldY);  
                    this.obj.style.left = (this.left + dx) + 'px';  
                    this.obj.style.top = (this.top + dy) + 'px';  
                }  
            }  
        };  
    }  
function sao(){
            var main=document.getElementById("main");
            main.ondblclick=function(){
                document.getElementById("one").style.transitionTimingFunction="ease-out";
                document.getElementById("two").style.transitionTimingFunction="ease-out";
                document.getElementById("three").style.transitionTimingFunction="ease-out";
                document.getElementById("four").style.transitionTimingFunction="ease-out";
                document.getElementById("one").style.transitionDelay="0s";
                document.getElementById("two").style.transitionDelay="0s";
                document.getElementById("three").style.transitionDelay="0s";
                document.getElementById("one").style.transitionDuration=".2s";
                document.getElementById("two").style.transitionDuration=".4s";
                document.getElementById("three").style.transitionDuration=".6s";
                document.getElementById("four").style.transitionDuration=".8s"; 
                document.getElementById("one").style.top="110%";
                        document.getElementById("two").style.top="220%";
                                document.getElementById("three").style.top="330%";
                                        document.getElementById("four").style.top="440%";
                                        this.ondblclick=function(){
                                        document.getElementById("one").style.top="0";
                                        document.getElementById("two").style.top="0";
                                        document.getElementById("three").style.top="0";
                                        document.getElementById("four").style.top="0";  
                                        document.getElementById("one").style.transitionDuration=".2s";
                                        document.getElementById("two").style.transitionDuration=".4s";
                                        document.getElementById("three").style.transitionDuration=".6s";
                                        document.getElementById("four").style.transitionDuration=".8s"; 
                                        document.getElementById("one").style.transitionDelay=".6s";
                                        document.getElementById("two").style.transitionDelay=".4s";
                                        document.getElementById("three").style.transitionDelay=".2s";
                                        document.getElementById("one").style.transitionTimingFunction="linear";
                                        document.getElementById("two").style.transitionTimingFunction="linear";
                                        document.getElementById("three").style.transitionTimingFunction="linear";
                                        document.getElementById("four").style.transitionTimingFunction="linear";
                                        sao();
                                        }
            }
        }
function time(){
    var d=new Date();
    document.getElementById("time").value=d.getFullYear()+"年"+d.getMonth()+"月"+d.getDate()+"日  "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    setTimeout("time()",1000);
}
function music(){
    document.getElementById("player").onclick=function(){
        document.getElementById("audio1").play();
        document.getElementById("player").onclick=function(){
            document.getElementById("audio1").pause();
            music();
        }
    }
}
 function fileSelected() {
        var file = document.getElementById('fileToUpload').files[0];
        if (file) {
          var fileSize = 0;
          if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
          else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

          document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
          document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
          document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
        }
      }

      function uploadFile() {
        var fd = new FormData();
        fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "UploadMinimal.aspx");
        xhr.send(fd);
      }

      function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('JDT').value = parseInt(percentComplete.toString());
        }
        else {
          document.getElementById('JDT').value = 0;
        }
      }

      function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        alert(evt.target.responseText);
      }

      function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.");
      }

      function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
      }
      function KF(){
    var kf=document.getElementById("kf");
    kf.onclick=function(){
    DispWin = window.open('','注册信息', 'toolbar=no,status=no,width=180,height=180,top=400,left=800')
    message = "<img src='images/ewm.png' style='width:100%;height:100%;position:absolute;left:0;top:0;'>";
    DispWin.document.write(message);}
    return false;
}

