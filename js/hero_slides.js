/**
 * Created by ры on 2015/6/13.
 */

var curIndex = 0;
var time = 800;
var slideTime = 5000;
var adTxt = $("#slides .slide .text")

var int = setInterval("autoSlide()", slideTime)

$("#slides-bar>div.point").click(function () {
    //catch the click event and get the index of bar clicked. Then, Using this index finds the corresponding picture.
    show($(this).index("#slides-bar>div.point"));
    window.clearInterval(int) // reset interval time of slides
    int = setInterval("autoSlide()", slideTime)
});

//it lets slider rotate automatically
function autoSlide() {
    curIndex + 1 >= $("#slides .slide").size() ? curIndex = -1 : false; // justify whether this slide is the last one and give the right index.
    show(curIndex + 1);
}

// display function
function show(index) {
    $.easing.def = "easeOutQuad"; // set up default setting
    $("#slides-bar div").eq(curIndex).removeClass("active");// make the former slide point change into inactive status.
    $("#slides-bar div").eq(index).addClass("active"); // make the new relative slide point turn to active status.
    $("#slides .slide").eq(curIndex).stop(false, true).fadeOut(time); // make current picture disappear
    adTxt.eq(curIndex).stop(false, true).animate({ "padding-top": "0", "opacity": "0" }, time/2); // this line defines the fadeout way of the text part in former slide
    $("#slides .slide").eq(index).stop(false, true).fadeIn(time); // make the next picture or chosen picture display
    adTxt.eq(index).css({ "padding-top": "96px", "opacity": "0" }).stop(false, true).animate({ "padding-top": "16px", "opacity": "1" }, time);// this line defines the displaying way of the text part in current slide
    curIndex = index;
}