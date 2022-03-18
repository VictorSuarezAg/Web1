document.addEventListener("DOMContentLoaded", function() {
    // Ejercicio 1
    var salario = document.querySelector('.salario');
    var btnSalario = document.querySelector('.salario-btn');
    var salud = document.querySelector('.salario-salud');
    var pension = document.querySelector('.salario-pension');
    var salTotal = document.querySelector('.salario-total');

    btnSalario.addEventListener('click', function () {
        var descSalud = salario.value * 0.08;
        var descPension = salario.value * 0.08;
        salud.innerHTML = "La deduccion de salud es $" + descSalud;
        pension.innerHTML = "La deduccion de pension es $" + descPension;
        salTotal.innerHTML = "La salario final es $" + (salario.value - descSalud - descPension);
    })

    // Ejercicio 2
    var base = document.querySelector('.base');
    var altura = document.querySelector('.altura');
    var btnTriangulo = document.querySelector('.triangulo-btn');
    var area = document.querySelector('.area');

    btnTriangulo.addEventListener('click', function () {
        var calcArea = (base.value * altura.value)/2;
        area.innerHTML = "La base del triangulo es " + calcArea;
    })

     // Ejercicio 3
    var num1 = document.querySelector('.num1');
    var num2 = document.querySelector('.num2');
    var btnOperaciones = document.querySelector('.operaciones-btn');
    var suma = document.querySelector('.suma');
    var resta = document.querySelector('.resta');
    var multiplicacion = document.querySelector('.multiplicacion');
    var division = document.querySelector('.division');
    var modulo = document.querySelector('.modulo');

    btnOperaciones.addEventListener('click', function () {
        suma.innerHTML = "La suma de los numero es " + (num1.value + num2.value);
        resta.innerHTML = "La resta de los numero es " + (num1.value - num2.value);
        multiplicacion.innerHTML = "La multiplicacion de los numero es " + (num1.value * num2.value);
        division.innerHTML = "La division de los numero es " + (num1.value / num2.value);
        modulo.innerHTML = "La modulo de los numero es " + (num1.value % num2.value);
    })

    // Ejercicio 4
    var horas = document.querySelector('.horas');
    var extras = document.querySelector('.horaExtra');
    var valHora = document.querySelector('.valHora');
    var valExtra = document.querySelector('.valExtra');
    var btnSalMensual = document.querySelector('.salMensual-btn');
    var horasTrabajadas = document.querySelector('.horasTrabajadas');
    var SalarioMensual = document.querySelector('.SalarioMensual');

    btnSalMensual.addEventListener('click', function () {
        horasTrabajadas = (horas.value - extras.value);
        
        var valorTotal = valHora.value * horasTrabajadas + valExtra.value * extras.value;

        SalarioMensual.innerHTML = "El salario total es: " + valorTotal;
    })

    // Ejercicio 5
    var precio = document.querySelector('.precio');
    var iva = (19*1)/100;
    var btnIva = document.querySelector('.iva-btn');
    var precioProd = document.querySelector('.precioProd');
    var ivaProd = document.querySelector('.iva');
    var PrecioTotal = document.querySelector('.precioTotal');

    btnIva.addEventListener('click', function () {
        var ivaProducto = precio.value * iva;
        precioProd.innerHTML = "El precio del producto sin iva es " + precio.value;
        ivaProd.innerHTML = "El valor del iva es " + ivaProducto;
        PrecioTotal.innerHTML = "El precio del producto con iva es " + (precio.value * iva + parseInt(precio.value));
    })

    // Ejercicio 6
    var hombres = document.querySelector('.hombres');
    var mujeres = document.querySelector('.mujeres');
    var btnPorcentaje = document.querySelector('.porcentaje-btn');
    var porcenHombres = document.querySelector('.porcenHombres');
    var porcenMujeres = document.querySelector('.porcenMujeres');

    btnPorcentaje.addEventListener('click', function () {
        var total = parseInt(hombres.value) + parseInt(mujeres.value);
        porcenHombres.innerHTML = "El porcentaje de hombres es " + hombres.value * 100 / total + "%";
        porcenMujeres.innerHTML = "El porcentaje de Mujeres es " + mujeres.value * 100 / total + "%";
    })

    // Ejercicio 7
    var nota1 = document.querySelector('.nota1');
    var nota2 = document.querySelector('.nota2');
    var nota3 = document.querySelector('.nota3');
    var nota4 = document.querySelector('.nota4');
    var nota5 = document.querySelector('.nota5');
    var btnNota = document.querySelector('.nota-btn');
    var promNota = document.querySelector('.promNota');

    btnNota.addEventListener('click', function () {
        var notaFinal = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value) + parseFloat(nota5.value)) / 5;
        promNota.innerHTML = "Las notas son " + nota1.value + ", " + nota2.value + ", " + nota3.value + ", " + nota4.value + ", " + nota5.value + ", el promedio de la nota es " + notaFinal.toFixed(1);
    })

     // Ejercicio 8
    var num = document.querySelector('.num');
    var btnNumb = document.querySelector('.numb-btn');
    var numb = document.querySelector('.numb');

    btnNumb.addEventListener('click', function () {
        if (Number(num.value) > 0) {
            if (Number(num.value) % 2 == 0) {
                numb.innerHTML = "El numero " + num.value + " es par y es positivo";
            } else {
                numb.innerHTML = "El numero " + num.value + " es impar y es positivo";
            }
        } else {
            if (Number(num.value) % 2 == 0) {
                numb.innerHTML = "El numero " + num.value + " es par y es negativo";
            } else {
                numb.innerHTML = "El numero " + num.value + " es impar y es negativo";
            }
        }
    })

    // Ejercicio 9
    var numb1 = document.querySelector('.numb1');
    var numb2 = document.querySelector('.numb2');
    var btnNumM = document.querySelector('.numM-btn');
    var numM = document.querySelector('.numM');

    btnNumM.addEventListener('click', function () {
        if (Number(numb1.value) > Number(numb2.value)) {
            numM.innerHTML = numb1.value + " Es el numero mayor y " + numb2.value + " es el numero menor";
        } else {
            numM.innerHTML = numb2.value + " Es el numero mayor y " + numb1.value + " es el numero menor";
        }
    })

    // Ejercicio 10
    var dia = document.querySelector('.dia');
    var btnNumD = document.querySelector('.numDia-btn');
    var numDia = document.querySelector('.numDia');

    btnNumD.addEventListener('click', function () {
        switch (dia.value) {
            case '1':
                numDia.innerHTML = "El dia de la semana es Lunes";
                break;
            case '2':
                numDia.innerHTML = "El dia de la semana es Martes";
                break;
            case '3':
                numDia.innerHTML = "El dia de la semana es Miercoles";
                break;
            case '4':
                numDia.innerHTML = "El dia de la semana es Jueves";
                break;
            case '5':
                numDia.innerHTML = "El dia de la semana es Viernes";
                break;
            case '6':
                numDia.innerHTML = "El dia de la semana es Sabado";
                break;
            case '7':
                numDia.innerHTML = "El dia de la semana es Domingo";
                break;
            default:
                numDia.innerHTML = "Lo siento numero equivocado";
        }
    })

    // Ejercicio 11
    var edad = document.querySelector('.edad');
    var btnEdad = document.querySelector('.edad-btn');
    var etapa = document.querySelector('.etapa');

    btnEdad.addEventListener('click', function () {
        if (edad.value < 18) {
            etapa.innerHTML = "La persona tiene " + edad.value + " y se encuentra en etapa adolescente"
        } else if (edad.value >= 18 && edad.value <= 28) {
            etapa.innerHTML = "La persona tiene " + edad.value + " y se encuentra en etapa adulto adolescente"
        } else if (edad.value >= 29 && edad.value <= 49) {
            etapa.innerHTML = "La persona tiene " + edad.value + " y se encuentra en etapa adulta"
        } else if (edad.value >= 50) {
            etapa.innerHTML = "La persona tiene " + edad.value + " y se encuentra en etapa adulto mayor"
        }
    })

    // Ejercicio 12
    var prod1 = document.querySelector('.prod1');
    var prod2 = document.querySelector('.prod2');
    var prod3 = document.querySelector('.prod3');
    var pago = document.querySelector('#pago');
    var btnFactura = document.querySelector('.factura-btn');
    var resulFactura = document.querySelector('.resulFactura');

    btnFactura.addEventListener('click', function () {
        var valorTotal = Number(prod1.value) + Number(prod2.value) + Number(prod3.value);
        var descCupon = valorTotal * 0.3;
        var incrCredito = valorTotal * 0.5;

        if (pago.value == 'cupon') {
            resulFactura.innerHTML = "El valor del producto 1 es $" + prod1.value + ", el valor del producto 2 es $" + prod2.value + ", el valor del producto 3 es $" + prod3.value + ", el total a pagar con " + pago.value + " es $" + (valorTotal - descCupon) + ", con un descuento de $" + descCupon ;
        } else if (pago.value == 'credito') {
            resulFactura.innerHTML = "El valor del producto 1 es $" + prod1.value + ", el valor del producto 2 es $" + prod2.value + ", el valor del producto 3 es $" + prod3.value + ", el total a pagar con " + pago.value + " es $" + (valorTotal + incrCredito) + ", con un incremento de $" + incrCredito;
        } else {
            resulFactura.innerHTML = "El valor del producto 1 es $" + prod1.value + ", el valor del producto 2 es $" + prod2.value + ", el valor del producto 3 es $" + prod3.value + ", el total a pagar con " + pago.value + " es $" + valorTotal;
        }
    })

     // Ejercicio 13
    var not1 = document.querySelector('.not1');
    var not2 = document.querySelector('.not2');
    var not3 = document.querySelector('.not3');
    var btnNivel = document.querySelector('.nivel-btn');
    var nivel = document.querySelector('.nivel');

    btnNivel.addEventListener('click', function () {
        var promedio = (Number(not1.value) + Number(not2.value) + Number(not3.value)) / 3;
        if (promedio >= 0 && promedio <= 10) {
            nivel.innerHTML = "Las notas son " + not1 + ", " + not2 + ", " + not3 + " el promedio es " + promedio + " el nivel del estudiante es Malo";
        } else if (promedio >= 11 && promedio <= 13) {
            nivel.innerHTML = "Las notas son " + not1 + ", " + not2 + ", " + not3 + " el promedio es " + promedio + " el nivel del estudiante es Regular";
        } else if (promedio >= 14 && promedio <= 16) {
            nivel.innerHTML = "Las notas son " + not1 + ", " + not2 + ", " + not3 + " el promedio es " + promedio + " el nivel del estudiante es Bueno";
        } else if (promedio >= 17 && promedio <= 20) {
            nivel.innerHTML = "Las notas son " + not1 + ", " + not2 + ", " + not3 + " el promedio es " + promedio + " el nivel del estudiante es Muy Bueno";
        }
    })

     // Ejercicio 14
    var fecha = document.querySelector('.fecha');
    var btnEdadFecha = document.querySelector('.edadFecha-btn');
    var edadFecha = document.querySelector('.edadFecha');
    

    btnEdadFecha.addEventListener('click', function () {
        var hoy = new Date();
        var cumpleanos = new Date(fecha.value);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var mes = (hoy.getMonth() + 1) - cumpleanos.getMonth();
        var meses = 0;
        var m;

        if (mes < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
            edad --;
        }

        if (hoy.getMonth() > cumpleanos.getMonth()) {
            meses = hoy.getMonth() - cumpleanos.getMonth();
        }else if (hoy.getMonth() < cumpleanos.getMonth()) {
            meses = 12 - (cumpleanos.getMonth() - hoy.getMonth());
        }else if (hoy.getMonth() == cumpleanos.getMonth() && hoy.getDate() > cumpleanos.getDate() ){
            if (hoy.getMonth() - cumpleanos.getMonth() == 0){
                meses=0;
            }else{
                meses=11;
            }
        }

        edadFecha.innerHTML = "La edad es " + edad + " año(s) " + meses + " meses.";
    })

    // Ejercicio 15
    var dHosp = document.querySelector('.dHosp');
    var edadPac = document.querySelector('.edadPac');
    var btnhospitalizacion = document.querySelector('.hospitalizacion-btn');
    var hospitalizacion = document.querySelector('.hospitalizacion');

    btnhospitalizacion.addEventListener('click', function () {
        var recargo;
        var costo;
        var dia;
        var total;

        if (edadPac.value <= 10) {
            if (dHosp.value <= 1) {
                dia = 20000;
                costo = dia * dHosp.value;
                recargo = 0
            } else if (dHosp.value >= 2 && dHosp.value <= 4) {
                dia = 30000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 5 && dHosp.value <= 7) {
                dia = 25000;
                costo = dia * dHosp.value;
                recargo = costo * 0.5;
            } else if (dHosp.value >= 8) {
                dia = 15000;
                costo = dia * dHosp.value;
                recargo = costo * 0.10;
            }
        } else if (edadPac.value >= 11 && edadPac.value <= 17) {
            if (dHosp.value <= 1) {
                dia = 20000;
                costo = dia * dHosp.value;
                recargo = 0
            } else if (dHosp.value >= 2 && dHosp.value <= 4) {
                dia = 30000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 5 && dHosp.value <= 7) {
                dia = 25000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 8) {
                dia = 15000;
                costo = dia * dHosp.value;
                recargo = costo * 0.10;
            }
        } else if (edadPac.value >= 18 && edadPac.value <= 49) {
            if (dHosp.value <= 1) {
                dia = 20000;
                costo = dia * dHosp.value;
                recargo = 0
            } else if (dHosp.value >= 2 && dHosp.value <= 4) {
                dia = 30000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 5 && dHosp.value <= 7) {
                dia = 25000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 8) {
                dia = 15000;
                costo = dia * dHosp.value;
                recargo = costo * 0.15;
            }
        } else if (edadPac.value >= 50) {
            if (dHosp.value <= 1) {
                dia = 20000;
                costo = dia * dHosp.value;
                recargo = 0
            } else if (dHosp.value >= 2 && dHosp.value <= 4) {
                dia = 30000;
                costo = dia * dHosp.value;
                recargo = 0;
            } else if (dHosp.value >= 5 && dHosp.value <= 7) {
                dia = 25000;
                costo = dia * dHosp.value;
                recargo = costo * 0.15;
            } else if (dHosp.value >= 8) {
                dia = 15000;
                costo = dia * dHosp.value;
                recargo = costo * 0.20;
            }
        }
        total = costo + recargo;
        hospitalizacion.innerHTML = "Los dias de hospitalizacion fueron " + dHosp.value + " el valor del día es $" + dia + " el valor del recargo es $" + recargo + " el total a pagar es $" + total;
    })
});
