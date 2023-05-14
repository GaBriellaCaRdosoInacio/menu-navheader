//variaveis globais 
var contador= 0;

//funcoes do menu de nav
function clickmenu() {
contador+=1

if(contador>0){
if(contador==1){
    mensagem3.innerHTML= `<ul class="menu_resp"> 
        <li><a href=" ">Painel Geral</a></li>`

} else {
    mensagem3.innerHTML= ' ';
    contador=0
}
} 
} 