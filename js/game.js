/**
 * Created by conor on 11/4/16.
 */

var clicked = false;

var audio1 = $('#greenSound')[0];
var audio2 = $('#redSound')[0];
var audio3 = $('#yellowSound')[0];
var audio4 = $('#blueSound')[0];

//Green button
$(document).on('mousedown', '.leftG', function () {
   $(this).removeClass('leftG').addClass('greenLight');
    $('.green').click(function () {
        audio1.play();
    });
});

$(document).on('mouseup', '.greenLight', function () {
    $(this).removeClass('greenLight').addClass('leftG');
});

//Red button
$(document).on('mousedown', '.rightR', function () {
    $(this).removeClass('rightR').addClass('redLight');
    $('.red').click(function () {
        audio2.play();
    });
});

$(document).on('mouseup', '.redLight', function () {
    $(this).removeClass('redLight').addClass('rightR');
});

//Yellow button
$(document).on('mousedown', '.leftY', function () {
    $(this).removeClass('leftY').addClass('yellowLight');
    $('.yellow').click(function () {
        audio3.play();
    });
});

$(document).on('mouseup', '.yellowLight', function () {
    $(this).removeClass('yellowLight').addClass('leftY');
});

//Blue button
$(document).on('mousedown', '.rightB', function () {
    $(this).removeClass('rightB').addClass('blueLight');
    $('.blue').click(function () {
        audio4.play();
    });
});

$(document).on('mouseup', '.blueLight', function () {
    $(this).removeClass('blueLight').addClass('rightB');
});

$( document ).ready(function() {





});