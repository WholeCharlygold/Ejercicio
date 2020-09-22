


function ordenar(arreglo){
    var resultado = new Array;
    var maximo = arreglo[0];
    var size = arreglo.length;
    var index = 0;
   for (var i = 0; i<size-1;i++){
        maximo = arreglo[0];
       for(var j = 0; j<size; j++){
        if(maximo<arreglo[j] && arreglo.length!=2){
            maximo=arreglo[j];
            index = arreglo.indexOf(maximo);
            
        }else if(arreglo.length==2){
                maximo = arreglo[0];
                if(maximo<arreglo[1]){
                    resultado[i] = arreglo[1];
                    resultado[i+1]=arreglo[0];
                }else{
                    resultado[i] = arreglo[0];
                    resultado[i+1]=arreglo[1];
                }
                return resultado;
        }
       }
      arreglo.splice(index,1);
       resultado[i] = maximo;
   }
    return resultado;
    
}


let arreglo = [8, 3, 4, 1, 7];
console.log("Arreglo ordenado: "+ordenar(arreglo));
console.log("Minimo del arreglo:"+ordenar(arreglo)[arreglo.length-1]);