$(document).ready(function(){
    $("#div1").draggable();

$("#div2 p").draggable({
    containment: "#div2"
});

$("#div3 p").draggable({
    axis: "x"
});

$("#div2 p").draggable({
    axis: "y"
});

})