/* Ejemplo
var n = prompt("digite un numero");
var con = 1;
while (con <= parseInt(n)) {
    document.write("<p>" + con + "</p>");
    con = con + 1;
}*/


document.addEventListener("DOMContentLoaded", function() {
    // Ejercicio 1
    var number = document.querySelector('.numNat');
    var btnNumNat = document.querySelector('.sumNumNat-btn')
    var sumNumNat = document.querySelector('.sumNumNat');
    
    btnNumNat.addEventListener('click', function () {
        var cont = 0;
        var suma = 0;

        while (cont <= number.value) {
            suma = suma + cont;
            cont++;
        }
        sumNumNat.innerHTML = "La suma es: " + suma;
    })

    //Ejercicio 2

    var notas = document.querySelector('.notas').value,
        btnNota = document.querySelector('.nota-btn'),
        prom = document.querySelector('.prom');

        btnNota.addEventListener('click', function () {
            while (cont < notas) {
                var labelNota = document.createElement('label');
                labelNota.innerHTML = "Escriba la nota";
                
                var inputNota = document.createElement('input');
                inputNota.setAttribute('type', 'number');
                cont = cont+1
            }
        }) 
    
});