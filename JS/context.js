//function message(){
    //alert(button);

    //}

//function highlightInput(elm){
    //elm.style.background = "yellow";

//}

//function dows(){
    //window.alert('page is loaded successfully');
    
//}

function displayWindowSize(){
    var w= window.outerWidth;
    var h= window.outerHeight;

    var txt ="window size: width + w" + ",height="+ h;
    document.getElementById("result").innerHTML=html;
}
window.onresize=displayWindowSize;

var now =new Date();
var dayOfWeek = now.getDay();

if (dayOfWeek ==3) {
    alert("What a beautiful Wednesday!");
}

else if (dayOfWeek ==1) {
    alert("Have a nice Wednesday");
}else {
    alert("Have a nice day!");
}
