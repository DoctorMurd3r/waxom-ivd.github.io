/*
Snow Fall 1 - no images - Java Script
Visit http://rainbow.arch.scriptmania.com/scripts/
  for this script and many more
*/

/*
function yeash() {
        window.scrollTo(0, document.body.scrollHeight);
}
*/

///yeash();
// Set the number of snowflakes (more than 30 - 40 not recommended)
var happybr = "С днем рождения"
var snowmax = 200
// Set the colors for the snow. Add as many colors as you like
//var snowcolor=new Array("#b9dff5","#00ff00","#b9dff5","#b9dff5","#b9dff5")
var snowcolor = new Array("#ff5959", "#8a21c2", "#39a350", "#dede3a", "#b9dff5")
// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype = new Array("Times")
// Set the letter that creates your snowflake (recommended: * )🏮
var snowletter = " "
// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed = -0.1

// Set the maximum-size of your snowflakes
//var snowmaxsize=85
var snowmaxsize = 250
// Set the minimal-size of your snowflakes
var snowminsize = 50
// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone = 1
///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////
//var posyty = 800;

//for (it = 800; it >= 600; it--) {
//   posyty = posyty - 5;
//document.write(display.none);

//document.write("<span style='position:absolute;top:" + posyty + "px;   font-size:36px; color:transparent;left:40%;right:40%;  z-index:1001;' >" + happybr + "</span>")
//var posyty = 300;
//var iks = 0;
//function gayorgy(iks) {
//      iks = posyty;

//}

//for (iks = 0; iks < 20; iks++) {
//      setInterval(gayorgy, 1000);
//    document.write("<div style='position:absolute;top:" + posyty + "px;   font-size:36px; color:green;left:40%;right:40%;  z-index:1001;' >" + happybr + "</div>");
//}








//}







//var q_happy = 1
//q_happy == happybr
var marginleft
//if (q_happy == 1) { happybr.posx = marginright / 2 - marginleft }
// Do not edit below this line
var snow = new Array()
var marginbottom
var marginright
var timer
var i_snow = 0
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/)
var ns6 = document.getElementById && !document.all
var opera = browserinfos.match(/Opera/)
var browserok = ie5 || ns6 || opera


var posit = 200;



//document.write("<span id='1' style='position:absolute;top:200px; left:" + block + ";font-size:36px; color:green;left:40%;right:40%;  z-index:1001; ' >" + happybr + "</span>");


document.write("<div id='animate' style='height:50px; position:fixed; font-size:65px; left:32%;color:#bb1e2e;z-index:1010;font-family:Konstanting;text-shadow: black 3px 4px 6px;'> <img src='hurt.png'>С ДНЕМ РОЖДЕНИЯ, АНТОН!<img src='hurt.png'></div>");
//document.write("<audio loop autoplay><source src='happymusic.mp3' type='audio/mp3'></audio>");
//document.write('<embed src="happymusic.mp3" type="audio/mpeg" hidden="true" autostart="true" loop="true" display="none"></embed>')

function randommaker(range) {
        rand = Math.floor(range * Math.random())
        return rand
}

function initsnow() {
        if (ie5 || opera) {
                marginbottom = document.body.scrollHeight
                marginright = document.body.clientWidth - 15
        }
        else if (ns6) {
                marginbottom = document.body.scrollHeight
                marginright = window.innerWidth - 15
        }
        var snowsizerange = snowmaxsize - snowminsize
        for (i = 0; i <= snowmax; i++) {
                crds[i] = 0;
                //lftrght[i] = Math.random()*15;
                lftrght[i] = Math.random() * 100;
                x_mv[i] = 0.03 + Math.random() / 10;
                snow[i] = document.getElementById("s" + i)
                snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
                snow[i].size = randommaker(snowsizerange) + snowminsize
                snow[i].style.fontSize = snow[i].size + 'px';
                snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
                snow[i].style.zIndex = 1000
                snow[i].sink = sinkspeed * snow[i].size / 5
                if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
                if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
                if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
                if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
                snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size)
                snow[i].style.left = snow[i].posx + 'px';
                snow[i].style.top = snow[i].posy + 'px';
        }
        movesnow()
}

function movesnow() {
        for (i = 0; i <= snowmax; i++) {
                crds[i] += x_mv[i];
                snow[i].posy += snow[i].sink
                snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
                snow[i].style.top = snow[i].posy + 'px';

                if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
                        if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
                        if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
                        if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
                        if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
                        snow[i].posy = 0
                }
        }
        var timer = setTimeout("movesnow()", 50)
}
//function movetxt() {

//}

for (q_happy = 1; q_happy >= 2;) {


}



for (i = 0; i <= snowmax; i++) {
        document.write("<div id='s" + i + "' style='position:absolute;top:-" + snowmaxsize + "; background-image:url(sharr.png); background-repeat:no-repeat; background-size:100%; transition:0.06s'>" + snowletter + "</div>")
        // document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
        window.onload = initsnow;

}




myMove();
function myMove() {
        var elem = document.getElementById("animate");
        var pos = 900;
        var id = setInterval(frame, 20);
        function frame() {
                if (pos == 100) {
                        clearInterval(id);
                } else {
                        pos--;
                        elem.style.top = pos + 'px';


                }
        }
}
/*
window.onload = function () {
        window.scrollTo(0, document.body.scrollHeight);
} */
$(window).onload(function () {
        $('html, body').animate({ scrollTop: 0 });
});