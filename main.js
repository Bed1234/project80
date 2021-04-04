function get_para(){
var inputs= [];
for (var i = 1 ; i <=6 ; i++){
    inputs.push(document.getElementById("para" + i).value);
    inputs.join(" . ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(" . ")
}
}

function get_para2(){
    var inputs1= [];
    for (var j = 1 ; j <=6 ; j++){
        inputs1.push(document.getElementById("type" + j).value);
        inputs1.join(" . ");
        document.getElementById("showParagraph2").innerHTML = inputs1.join(" . ")
}
}
