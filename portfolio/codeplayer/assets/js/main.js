/**
 * Created by mustafa on 12/28/16.
 */


var windowHeight = $(window).height() - 1;
var menuBarHeight = $("#menuBar").height();
var codeContainerHeight = windowHeight - menuBarHeight;
$(".codeContainer").height(codeContainerHeight + "px");

$(".toggle").click(function () {
    $(this).toggleClass("selected");
    var activeDiv = $(this).html();
    $("#" + activeDiv + "Container").toggle();

    var showingDivs = $(".codeContainer").filter(function () {
        return ($(this).css("display") != "none");
    }).length;


    var width = 100 / showingDivs;

    $(".codeContainer").width(width + "%");
});

$("#runButton").click(function () {
    $("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

    document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());

});
