$(document).ready(function () {
    $(".submit").click(function () {
        var dudaid = $("#dudaid").val();
        var selected = $('#device').children(":selected").val();
        if ($('input[name="iamdesktop"]').is(':checked')) {
            $("#form").attr('action', 'https://my.duda.co/preview/' + dudaid);
            $("#form").attr('method', 'get'); 
        }
        else {$("#form").attr('action', 'https://my.duda.co/site/' + dudaid + '?showOriginal=true&preview=true&insitepreview=true&dm_device=' + selected);}
    });
});

function hideMe(device) {
        
    var chboxs = document.getElementsByName("iamdesktop");
    var vis = "block";
    for(var i=0;i<chboxs.length;i++) { 
        if(chboxs[i].checked){
         vis = "none";
            break;
        }
    }
    document.getElementById(device).style.display = vis;
}