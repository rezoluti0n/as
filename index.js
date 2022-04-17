function PanhaMa() {
const texts = ['PANHA-FULL STACK DEVELOPER & PHOTOGRAPHER'];
let count = 0;
let index = 0;
let currrentText='';
let letter = '';

(function type(){
currrentText = texts[count];
letter = currrentText.slice(0, ++index);
document.querySelector('.typing').textContent= letter;
if(letter.length === currrentText.length){
    count++;
    index=0;
}
setTimeout(type,100);
}());
}
PanhaMa();

$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });