var screen=document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}
function clearscreen(){
    screen.value="";
}
function result(){
    var result=eval(screen.value)//eval(10+10)=20
    screen.value=result;
}