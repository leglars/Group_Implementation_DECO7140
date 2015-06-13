/**
 * Created by ры on 2015/6/13.
 */

$(function() {
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;

    //validate email
    // regular expression refers from http://www.jb51.net/article/19493.htmv
    $('#newsletter input[name="email"]').blur(function () {
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
                    flag2 = false; // reset the flag value
                }

            }
        }
        else {
                $(this).next().children().removeClass("appear"); //clear the former displayed icon
                $(this).next().children('img[alt="right"]').addClass("appear"); // show the right icon
                flag2 = true; // give flag2 a value to help pass the validation of submit
        }
    });

    // click submit: if all fields are done, the form can be submited.
    $('#newsletter input[name="submit"]').click(function () {
        if(flag2) {
            $("form").submit();
        }
        else {
            return false;
        };
    });



    //form left validation
    //this function is to switch the relative validation function according to the contact type chose by users
    $('#sign-in input[name="contact"]').blur(function () {
        // justify the type of contact
        if ($('#sign-in select[name="contact"]').val() == "email") {
            validationEmail($(this)); // call email validation function
        }
        else {
            validationPhone($(this)); // call phone validation function
        }
    });

    //validate email format
    function validationEmail(email) {
        // the validate condition to test is the input is follow a normal email address format.
        if (email.val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1) {
            // the form tag has a empty input validation already, so we don't need to consider the empty situaton.
            if (email.val() == "") {
                email.next().children().removeClass("appear"); // if the input is empty, clear the feedback icon.
                flag3 = false; // reset the flag value
            }
            else {
                if (email.val() != "") {
                    email.next().children().removeClass("appear"); // clear the former displayed icon
                    email.next().children('img[alt="error"]').addClass("appear"); // show the error icon
                    flag3 = false; // reset the flag value
                }

            }
        }
        else {
            email.next().children().removeClass("appear"); //clear the former displayed icon
            email.next().children('img[alt="right"]').addClass("appear"); // show the right icon
            flag3 = true; // give flag3 a value to help pass the validation of submit
        }
    }
    //validation the length of input
    function validationPhone(phone) {
        // if the input is empty reset the icon status
        if (phone.val() == "") {
            phone.next().children().removeClass("appear"); // clear the former displayed icon
            flag4 = false; // reset the flag value
        }
        else {
            // phone number should only has 10 numbers
            if (phone.val().length == 10) {
                phone.next().children().removeClass("appear"); // clear the former displayed icon
                phone.next().children('img[alt="right"]').addClass("appear"); // show the error icon
                flag4 = true; // give flag4 a value to help pass the validation of submit
            }
            else {
                phone.next().children().removeClass("appear"); // clear the former displayed icon
                phone.next().children('img[alt="error"]').addClass("appear"); // show the error icon
                flag4 = false; // reset the flag value
            }
        }

    }

    // click submit: if all fields are done, the form can be submited.
    $('#sign-in input[name="submit"]').click(function () {
        if(flag3 || flag4) {
            $("form").submit();
        }
        else {
            return false;
        };
    });

});