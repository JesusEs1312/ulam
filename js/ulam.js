function calcular() {
    var idnumero = parseInt(document.getElementById('numero').value); //--- OBTENER NUMERO SELECCIONADO 
    if(idnumero > 0 && idnumero < 51){ //--- VALIDAR SI ESCOGIO UN NUMERO
        document.getElementById('resultado').value = idnumero + ', '; //--- AGREGAR NUMERO 
        var numero; 
        while (idnumero != 1) { //--- VALIDAR SI EL NUMERO LLEGO A 1
            numero = (idnumero % 2); //---  OBTENER EL RESIDUO DE LA DIVISION
            if(numero == 0){ //--- SI EL NUMERO ES PAR
                idnumero = idnumero/2; //--- DIVIDIR EL NUMERO ENTRE 2
                if(idnumero == 1){
                    document.getElementById('resultado').value += idnumero;
                } else { 
                    document.getElementById('resultado').value += idnumero + ', ';
                }
            } else { //--- SI EL NUMERO ES IMPAR
                idnumero = (idnumero * 3) + 1; // MULTIPLICAR EL NUMERO * 3 Y SUMARLE 1
                document.getElementById('resultado').value += idnumero + ', ';
            }
        }
    } else { //--- SI NO ESCOGIO NUMERO
        alert('Escoge un numero');
        document.getElementById('resultado').value = '';
    }
}