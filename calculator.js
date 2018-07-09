var box = document.getElementById('display');

function addtoscreen(x){
    box.value+=x;
    if(x==='c'){
        box.value='';
    }
}

function answer(){
    x=box.value
    x=eval(x);
    box.value=x;
}

function backspace(){
    var num = box.value
    box.value = num.substring(0,num.length-1);
}