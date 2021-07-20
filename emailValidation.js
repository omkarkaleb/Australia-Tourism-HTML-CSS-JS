$(document).ready(function () {

    //NAME VALIDATION
    $("#fname").on('keyup', function () {
        var nameval = $("#fname").val();
        console.log(nameval)
        if (nameval == '') {
            $(this).css("border-bottom", "3px solid red");
            $("#fnamel").css("visibility", "hidden");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');

        } else {
            $("#fnamel").css("visibility", "visible");
            $(this).css("border-bottom", "3px solid purple");
        }
    })

    $("#fname").focus(function () {
        var nameval = $("#fname").val();
        if (nameval == '') {
            $(this).css("border-bottom", "3px solid red");
            $("#fnamel").css("visibility", "hidden");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');

        } else {
            $("#fnamel").css("visibility", "visible");
            $(this).css("border-bottom", "3px solid purple");
        }
    })

    //EMAIL VALIDATION

    $("#email").on('keyup', function () {
        var emailval = $("#email").val();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if (emailval == '') {
            $(this).css("border-bottom", "3px solid red");
            $("#emaill").css("visibility", "hidden");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');

        }
        if (regex.test(emailval)) {
            $("#emaill").css("visibility", "visible");
            $(this).css("border-bottom", "3px solid purple");
            $('#submitbtn').prop('disabled', false);
            $('#submitbtn').css('background-color', 'rgb(173, 55, 173)');
        } else {
            $("#emaill").css("visibility", "visible");
            $(this).css("border-bottom", "3px solid red");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');

        }
    })

    $("#email").focus(function () {
        var emailval = $("#email").val();
        if (emailval == '') {
            $(this).css("border-bottom", "3px solid red");
            $("#emaill").css("visibility", "hidden");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');

        } else {
            $("#emaill").css("visibility", "visible");
            $(this).css("border-bottom", "3px solid purple");
        }
    })

    //OPTION VALIDATE
    $('#budget').on('click', function () {
        var budgetval = $('#budget').val();
        if ((budgetval == 'select') || (budgetval == '')) {
            $(this).css("border-bottom", "3px solid red");
            $('#submitbtn').prop('disabled', true);
            $('#submitbtn').css('background-color', 'grey');
        } else {
            $(this).css("border-bottom", "3px solid purple");
            $('#submitbtn').prop('disabled', false);
            $('#submitbtn').css('background-color', 'rgb(173, 55, 173)');
        }
    })


})