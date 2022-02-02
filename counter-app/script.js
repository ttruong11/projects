var count = 0;
var reset = 0;

function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}

function clearCount(){
    document.getElementById("count").innerHTML = reset;
}