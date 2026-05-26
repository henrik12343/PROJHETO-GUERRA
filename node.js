function lutar(){
    const classe = document.getElementById('guerreiro').value;
    const arma = document.getElementById('armas').value.trim();
    const log = document.getElementById('log');

   if(!arma){
    log.innerHTML= "Você esqueceu de equipar a arma"
   }
   let dado = Math.floor(Math.random() *20) + 1;

   
}