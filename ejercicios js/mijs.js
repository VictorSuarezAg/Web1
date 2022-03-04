/* 
    Calcular el salario 
    de un empleado que gana 2.500.000 
    descontando el 8% de salud y el 10% 
    de pension
*/

var salario = prompt("Digita tu salario");
var salud = parseInt(salario) * 8/100;
var pension = parseInt(salario) * 10/100;
var sueldoApagar = parseInt(salario) - salud - pension;
confirm ('Su sueldo es de: ' + salario + 
        '\n El salario del empleado es: ' + sueldoApagar + 
        '\n Lo que se le descuenta de salud es: ' + salud +
        '\nLo que se le descuenta de pension es: ' + pension);
