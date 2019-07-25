/**
 * Created by admin on 2019/7/23.
 */
window.onload=function(){
    var box = document.getElementById("banner_box");
    var imgArr = document.getElementById("banner_img_box").getElementsByTagName("img");
    var liArr = document.getElementById("num_list").getElementsByTagName("li");
    var lar = document.getElementById("arrow_left");
    var rar = document.getElementById("arrow_right");
    var timer = setInterval(picLoop, 5000);
    var n = 0;

    //点击序号按钮切换图片
    for(var i=0;i<liArr.length;i++){
        liArr[i].index=i;
        liArr[i].onclick=function(){
            for(var j=0;j<liArr.length;j++){
                liArr[j].style.backgroundColor="rgba(0,0,0,0.6)";
                imgArr[j].style.transition="1s";
                imgArr[j].style.opacity="0";
            }
            var k = this.index;
            n=k;
            this.style.backgroundColor="rgba(255,255,255,0.6)";
            imgArr[k].style.transition="1s";
            imgArr[k].style.opacity="1";
        }
    }

    //自动切换图片
    function picLoop() {
        n++;
        if (n == 5) {
            n = 0;
        }
        for (var j = 0; j < liArr.length; j++) {
            liArr[j].style.backgroundColor = "rgba(0,0,0,0.6)";
            imgArr[j].style.transition = "1s";
            imgArr[j].style.opacity = "0";
        }
        liArr[n].style.backgroundColor = "rgba(255,255,255,0.6)";
        imgArr[n].style.transition = "1s";
        imgArr[n].style.opacity = "1";
    }

    //当鼠标进行切换图片时停止自动轮播
    box.onmouseover=function(){
        clearInterval(timer);
    };
    box.onmouseout=function(){
        timer = setInterval(picLoop, 5000);
    };

    //左切图按钮
    lar.onclick=function(){
        if(n==0){
            n=5;
            n--;
        }else {
            n--;
        }
        for(var j=0;j<liArr.length;j++){
            liArr[j].style.backgroundColor="rgba(0,0,0,0.6)";
            imgArr[j].style.transition="1s";
            imgArr[j].style.opacity="0";
        }
        liArr[n].style.backgroundColor="rgba(255,255,255,0.6)";
        imgArr[n].style.transition="1s";
        imgArr[n].style.opacity="1";
    };

    //右切图按钮
    rar.onclick=function(){
        if(n==4){
            n=-1;
            n++;
        }else {
            n++;
        }
        for(var j=0;j<liArr.length;j++){
            liArr[j].style.backgroundColor="rgba(0,0,0,0.6)";
            imgArr[j].style.transition="1s";
            imgArr[j].style.opacity="0";
        }
        liArr[n].style.backgroundColor="rgba(255,255,255,0.6)";
        imgArr[n].style.transition="1s";
        imgArr[n].style.opacity="1";
    }

}