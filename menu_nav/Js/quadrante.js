//variaveis globais 
var contador= 0;

//funcoes do menu de nav
function clickmenu() {
contador+=1

if(contador>0){
if(contador==1){
    mensagem2.innerHTML= `<ul class="menu_resp-q"> 
        <li><a href=" ">Painel</a></li>
        <li><a href=" ">Sala A</a></li>
        <li><a href=" ">Sala B</a></li>
        <li><a href=" ">Sala C</a></li>`

} else {
    mensagem2.innerHTML= ' ';
    contador=0
}
} 
} 