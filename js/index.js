
window.onload=function(){
    //搜索框的边框颜色事件
    var box = document.getElementById("search");
    var text = document.getElementById("keyword");
    var search = document.getElementById("search_btn");
    var hot = document.getElementById("hot-words");
    var keyword = document.getElementById("keyword_list");
    var flag=true;
    text.onfocus=function(){
        text.style.border="1px solid #FF6700";
        search.style.border="1px solid #FF6700";
        search.style.borderLeft="none";
        hot.style.display="none";
        keyword.style.display="block";
        flag=false;
    };
    text.onblur=function(){
        text.style.border = "1px solid #e0e0e0";
        search.style.border = "1px solid #e0e0e0";
        search.style.borderLeft = "none";
        hot.style.display="block";
        var delay = 0.2;
        setTimeout(function () {
            keyword.style.display="none";
        }, delay * 1000);
        flag=true;
    };
    box.onmouseover= function () {
        if(flag==true) {
            text.style.border = "1px solid #B0B0B0";
            search.style.border = "1px solid #B0B0B0";
            search.style.borderLeft = "none";
        }
    };
    box.onmouseout= function(){
        if(flag==true) {
            text.style.border = "1px solid #e0e0e0";
            search.style.border = "1px solid #e0e0e0";
            search.style.borderLeft = "none";
        }
    };

    //右侧浮动导航栏鼠标经过换图事件
    var list1 = document.getElementById("fixed_list");
    var rt = document.getElementById("return_top");
    var li1 = list1.getElementsByTagName("li");
    var imgId = new Array("img_01","img_02","img_03","img_04","img_05","img_06");
    var imgArr = new Array("../images/right_nav_box_01.png","../images/right_nav_box_02.png","../images/right_nav_box_03.png",
                            "../images/right_nav_box_04.png","../images/right_nav_box_05.png","../images/right_nav_box_06.png");
    var imgHArr = new Array("../images/right_nav_box_01_hover.png","../images/right_nav_box_02_hover.png","../images/right_nav_box_03_hover.png",
                            "../images/right_nav_box_04_hover.png","../images/right_nav_box_05_hover.png","../images/right_nav_box_06_hover.png");
    for(var i = 0;i<li1.length;i++){
        li1[i].index = i;
        li1[i].onmouseover=function(){
            var n = this.index;
            document.getElementById(imgId[n]).src=imgHArr[n];
        }

        li1[i].onmouseout=function(){
            var n = this.index;
            document.getElementById(imgId[n]).src=imgArr[n];
        }
        li1[0].onmouseover=function(){
            document.getElementById(imgId[0]).src=imgHArr[0];
            document.getElementById("float_box").style.display="block";
        }
        li1[0].onmouseout=function(){
            var n = this.index;
            document.getElementById(imgId[0]).src=imgArr[0];
            document.getElementById("float_box").style.display="none";
        }
    }
    rt.onmouseover=function(){
        var n = this.index;
        document.getElementById(imgId[5]).src=imgHArr[5];
    }
    rt.onmouseout=function(){
        var n = this.index;
        document.getElementById(imgId[5]).src=imgArr[5];
    }
    rt.onclick=function(){
        scrollTop(0);
    }

};

//周边推荐的左右按钮
function left_arrow(){
    var rla = document.getElementById("recommend_left_arrow");
    var box1 = document.getElementById("recommend_box");
    var box1_left = getComputedStyle(box1,null).marginLeft;
    var p = box1_left.indexOf("p");
    var num = box1_left.substring(1,p);//分割除margin-left的数字
    if(num>0 && num<=3720){
        var cha = 1240;
        box1.style.marginLeft="-"+(num-cha)+"px";
        rla.style.color="#b0b0b0";
        rla.onmousemover=function(){
            rla.style.color="#FF6700";
        }
    }
    if(num==null){
        rla.style.color="#e0e0e0";
    }
}
function right_arrow(){
    var rra = document.getElementById("recommend_right_arrow");
    var box1 = document.getElementById("recommend_box");
    var box1_left = getComputedStyle(box1,null).marginLeft;
    var p = box1_left.indexOf("p");
    var rla = document.getElementById("recommend_left_arrow");
    var num = box1_left.substring(1,p);//分割除margin-left的数字
    if(num<3720){
        var cha = 1240;
         num =Number(num)+Number(cha);
        box1.style.marginLeft="-"+num+"px";
        rra.style.color="#b0b0b0";
        rra.onmousemover=function(){
            rra.style.color="#FF6700";
        }
    }
    if(num==3720){
        rra.style.color="#e0e0e0";
    }
}
