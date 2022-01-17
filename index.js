var input = document.querySelector('input');
var items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(i){
    i.addEventListener('click', button() )
})
function button(){
    if(input.innerHTML =='0'){
        input.innerHTML ='';
    }
    if(i.innerHTML='AC'){
        input.innerHTML='0';

    }
    if(i.innerHTML ='DEL'){
        var arrtext =Array.from(input.innerHTML);
        arrtext.splice(arrtext.length-1,1);
    }
    if(arrtext.length !=0) {
        input.innerHTML = arrtext.join('');
    }
    else {
         input.innerHTML='0';
    }
     if(btn.innerHTML=='='){
        input.innerHTML=eval(input.innerHTML);
    }
        else input.innerHTML+=btn.innerHT
}