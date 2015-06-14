/**
 * Created by ры on 2015/6/13.
 */

$(function() {
    var flag1 = false;

    //validate email
    // regular expression refers from http://www.jb51.net/article/19493.htmv
    $('#subscription input[name="email"]').blur(function () {
        // the validate condition to test is the input is follow a normal email address format.
        if ($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1) {
            // the form tag has a empty input validation already, so we don't need to consider the empty situaton.
            if ($(this).val() == "") {
                $(this).next().children().removeClass("appear"); // if the input is empty, clear the feedback icon.
                flag1 = false; // reset the flag value
            }
            else {
                if ($(this).val() != "") {
                    $(this).next().children().removeClass("appear"); // clear the former displayed icon
                    $(this).next().children('img[alt="error"]').addClass("appear"); // show the error icon
                    flag1 = false; // reset the flag value
                }

            }
        }
        else {
                $(this).next().children().removeClass("appear"); //clear the former displayed icon
                $(this).next().children('img[alt="right"]').addClass("appear"); // show the right icon
                flag1 = true; // give flag1 a value to help pass the validation of submit
        }
    });

    // click submit: if all fields are done, the form can be submited.
    $('#subscription input[name="submit"]').click(function () {
        if(flag1) {
            $("form").submit();
        }
        else {
            return false;
        };
    });
});

//Back to the top of this page
$("#back-to-top").click(function(){ // when click a#back-to-top, call this function
    toTop = $("BODY")[0]; // get the DOM position of body tag
    toTop.scrollIntoView(true); // return to the top
});