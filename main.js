function move_top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function down(){
    btn_top.style.transform = "scale(.9)";
}

function up(){
    btn_top.style.transform = "scale(1)";
}

c_nav = document.getElementsByClassName("nav");
txt_heads = [];
txt_cont = [];
txt = document.getElementsByClassName("txt");

setTimeout(() => {
    wilcont.children[0].style.marginLeft = "-264px";
    ml = -264;
    setInterval(() => {
        ml = ml - 284;
        if (wilcont.offsetWidth == 876){
            scrWidth = 832;
        }
        else if (wilcont.offsetWidth == 592){
            scrWidth = 1116;
        }
        else if (wilcont.offsetWidth == 308){
            scrWidth = 1400;
        }
        if (ml < -scrWidth){
            ml = 20;
        }
        wilcont.children[0].style.marginLeft = ml + "px";
    }, 1500);
}, 1500);

for (var i = 0; i < txt.length; i++){
    txt_heads.push(txt[i].getElementsByTagName("h1")[0]);
    txt_cont.push(txt[i].getElementsByClassName("content")[0]);
}

txt_cont.splice(2, 1);

for (var i = 0; i < c_nav.length; i++){
    c_nav[i].addEventListener("mouseover", function(){
        if (window.innerWidth >= 594){
            this.style.boxShadow = "0px 0px 15px #c4d5ec";
        }
    });
    c_nav[i].addEventListener("mouseout", function(){
        if (window.innerWidth >= 594){
            this.style.boxShadow = "";
        }
    });
    setTimeout(() => {
        for (var i = 0; i < c_nav.length; i++){
            c_nav[i].firstChild.firstChild.style.opacity = 100;
        }
    }, 750);
}

navCheck(c_nav);
scrCheck();
opCheck(txt_heads, txt_cont);
btnCheck();

window.addEventListener("scroll", () => {
    navCheck(c_nav);
    scrCheck();
    opCheck(txt_heads, txt_cont);
    btnCheck();
});

function navCheck(cls){
    for (var i = 0; i < cls.length; i++){
        cls[i].firstChild.style.color = "#c4d5ec";
        cls[i].firstChild.style.background = "#0d1333";
    }
    if (window.scrollY >= 0 && window.scrollY < amcont.offsetTop + amcont.offsetHeight - 162){
        cls[0].firstChild.style.color = "#0d1333";
        cls[0].firstChild.style.background = "#c4d5ec";
    }
    else if (window.scrollY >= amcont.offsetTop + amcont.offsetHeight - 162 && window.scrollY < wilcont.offsetTop + wilcont.offsetHeight - 162){
        cls[1].firstChild.style.color = "#0d1333";
        cls[1].firstChild.style.background = "#c4d5ec";
    }
    else if (window.scrollY >= wilcont.offsetTop + wilcont.offsetHeight - 162 && window.scrollY < document.body.scrollHeight - window.innerHeight - 103){
        cls[2].firstChild.style.color = "#0d1333";
        cls[2].firstChild.style.background = "#c4d5ec";
    }
    else if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 103){
        cls[3].firstChild.style.color = "#0d1333";
        cls[3].firstChild.style.background = "#c4d5ec";
    }
}

function scrCheck(){
    if (window.innerWidth >= 594){
        if (window.scrollY >= 27){
            me.style.height = "90px";
            me.style.width = "90px";
            me.style.top = "7.5px";
            navBar_before.style.height = "102px";
            navBar_before.style.width = "102px";
            navBar_before.style.boxShadow = "0px 0px 0px";
            hidden.style.height = "102px";
            hidden.style.width = "102px";
            nav_1.style.right = "calc(50% + 175px)";
            nav_2.style.right = "calc(50% + 15px)";
            nav_3.style.left = "calc(50% + 15px)";
            nav_4.style.left = "calc(50% + 171px)";
            hi.style.right = "calc(50% + 55px)";
            ad.style.left = "calc(50% + 55px)";
        }
        else if (window.scrollY < 27){
            me.removeAttribute("style");
            navBar_before.removeAttribute("style");
            hidden.removeAttribute("style");
            nav_1.removeAttribute("style");
            nav_2.removeAttribute("style");
            nav_3.removeAttribute("style");
            nav_4.removeAttribute("style");
            hi.removeAttribute("style");
            ad.removeAttribute("style");
        }
    }
}

function opCheck(cls1, cls2){
    for (var i = 0; i < cls1.length; i++){
        if (window.innerWidth > 489){
            if (window.scrollY >= (cls1[i].offsetTop + cls1[i].offsetHeight - 180)){
                cls1[i].style.opacity = 0;
            }
            else{
                cls1[i].style.opacity = 100;
            }
        }
        else{
            if (window.scrollY >= (cls1[i].offsetTop + cls1[i].offsetHeight - 145)){
                cls1[i].style.opacity = 0;
            }
            else{
                cls1[i].style.opacity = 100;
            }
        }
    }
    for (var i = 0; i < cls2.length; i++){
        if (window.innerWidth > 489){
            if (window.scrollY >= (cls2[i].offsetTop + cls2[i].offsetHeight - 180)){
                cls2[i].style.opacity = 0;
            }
            else{
                cls2[i].style.opacity = 100;
            }
        }
        else{
            if (window.scrollY >= (cls2[i].offsetTop + cls2[i].offsetHeight - 145)){
                cls2[i].style.opacity = 0;
            }
            else{
                cls2[i].style.opacity = 100;
            }
        }
    }
}

function btnCheck(){
    if (window.scrollY >= 262){
        btn_top.style.visibility = "visible";
        btn_top.style.opacity = 100;
    }
    else {
        btn_top.style.opacity = 0;
        setTimeout(btn_top.style.visibility = "hidden", 150);
    }
}