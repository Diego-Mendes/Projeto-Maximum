let contador=0;


//Função responsável pelo funcionamento das setas:
function passar(){
    let aula = document.getElementById('aulas');
    let cronos = document.getElementById('cronos');
    let estatics = document.getElementById('estatic');
    
    
   contador++;
   
   if(contador == 1){
            aula.style.display = "block";
            cronos.style.display = "none";
            estatics.style.display = "none";
            
        }
        else if(contador == 2){
            aula.style.display = "none";
            cronos.style.display = "block";
            estatics.style.display = "none";

        }else if(contador == 3){
            aula.style.display = "none";
            cronos.style.display = "none";
            estatics.style.display = "block";
        }
        else if(contador > 3){
            contador = 0;
        }
}


    


 

