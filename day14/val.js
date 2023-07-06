function displaysVals(){
    var singleValues=$("#single").val();
     var multipleValues=$("#multiple").val();
    $("p").html("<b>Single:<br/>"+singleValues+"<b>Multiple:<br/>"+multipleValues.join(","));
}
$("select").on("change",displaysVals);
displaysVals();