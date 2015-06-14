/**
 * Created by ры on 2015/6/14.
 */

// create a pop-up form

$("#reg-button").click(function() { // when click register button, the form will pop up.
    $(".mask").css("opacity", 0.8).fadeIn(600); // mask-up level shows up
    $("#register").show().animate({top: 64}, 500, "easeOutQuad"); // register form moves from the top of window.
});

$(".mask, .close").click(function() {
    $("#register").animate({top: -864}, 500, "easeOutQuad", // set move out animation of form
        function() { // form disappears by animation
        $("#register").hide(); // display: none
        });
    $(".mask").fadeOut(600); // mask-up level fadeout
});

//form left validation

$( function() {

    var flag3 = false;
    var flag4 = false;

    //this function is to switch the relative validation function according to the contact type chose by users
    $('#enquiry select[name="contact"]').click(function () { // choose contact type
        // justify the type of contact
        if ($(this).val() == "email") {
            $('#enquiry input[name="email"]').css("display", "block"); // display email input
            $('#enquiry input[name="phone"]').css("display", "none"); // don't display phone number input

        }
        else {
            $('#enquiry input[name="email"]').css("display", "none"); // don't display email input
            $('#enquiry input[name="phone"]').css("display", "block");// display phone number input
        }
    });

    $('#enquiry input[name="email"]').blur(function () {
        validationEmail($(this)); // call email validation function
    });

    $('#enquiry input[name="phone"]').blur(function () {
        validationPhone($(this)); // call phone number validation function
    });

    //validate email format
    function validationEmail(email) {
        // the validate condition to test is the input is follow a normal email address format.
        if (email.val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1) {
            // the form tag has a empty input validation already, so we don't need to consider the empty situaton.
            if (email.val() == "") {
                email.next().next().children().removeClass("appear"); // if the input is empty, clear the feedback icon.
                flag3 = false; // reset the flag value
            }
            else {
                if (email.val() != "") {
                    email.next().next().children().removeClass("appear"); // clear the former displayed icon
                    email.next().next().children('img[alt="error"]').addClass("appear"); // show the error icon
                    flag3 = false; // reset the flag value
                }

            }
        }
        else {
            email.next().next().children().removeClass("appear"); //clear the former displayed icon
            email.next().next().children('img[alt="right"]').addClass("appear"); // show the right icon
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
            if (phone.val().match(/^[0-9]*$/)) { // this validates all chars of this string are digit.
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
            else {
                phone.next().children().removeClass("appear"); // clear the former displayed icon
                phone.next().children('img[alt="error"]').addClass("appear"); // show the error icon
                flag4 = false; // reset the flag value
            }

        }

    }

    // click submit: if all fields are done, the form can be submited.
    $('#enquiry input[name="submit"]').click(function () {
        if(flag3 || flag4) {
            $("form").submit();
        }
        else {
            return false;
        }
    });
});

