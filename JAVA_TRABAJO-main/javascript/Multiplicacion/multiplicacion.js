function multiplicar (){
    let numero1 = parseInt(document.getElementById("num1").value)
    let numero2 = parseInt(document.getElementById("num2").value)
    let multiplicacion = numero1 * numero2
    //mostrar el resultado
    document.getElementById("resultado").textContent="la multiplicacion es " + multiplicacion;
}