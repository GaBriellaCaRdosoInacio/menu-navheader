
 
 //variaveis globais 
 var contador= 0;

 //funcoes do menu de nav
 function clickmenu() {
 contador+=1
 
 if(contador>0){
 if(contador==1){
     mensagem.innerHTML= `<ul class="menu_resp"> 
         <li><a href=" ">Sala A</a></li>
         <li><a href=" ">Sala B</a></li>
         <li><a href=" ">Sala C</a></li>`
 
 } else {
     mensagem.innerHTML= ' ';
     contador=0
 }
 } 
 } 