const sumar = (v1, v2) => v1 + v2
const restar = (v1, v2) => v1 - v2
const multiplicar = (v1, v2) => v1 * v2
const dividir = (v1, v2) => v1 / v2

var display = document.getElementById("resultado")
var num1
var num2
var operacion

const numero1 = () => {
    if (display.value == "0")
        display.value = "1";
    else
        display.value += "1";
}
const numero2=()=>{
    if(display.value=="0")
        display.value="2"
    else
    display.value+="2"
}
const numero3=()=>{
    if(display.value=="0")
        display.value="3"
    else
    display.value+="3"
}
const numero4=()=>{
    if(display.value=="0")
        display.value="4"
    else
    display.value+="4"
}
const numero5=()=>{
    if(display.value=="0")
        display.value="5"
    else
    display.value+="5"
}
const numero6=()=>{
    if(display.value=="0")
        display.value="6"
    else
    display.value+="6"
}
const numero7=()=>{
    if(display.value=="0")
        display.value="7"
    else
    display.value+="7"
}
const numero8=()=>{
    if(display.value=="0")
        display.value="8"
    else
    display.value+="8"
}
const numero9=()=>{
    if(display.value=="0")
        display.value="9"
    else
    display.value+="9"
}
const numero0=()=>{
    if(display.value=="0")
        display.value="0"
    else
    display.value+="0"
}
const punto=()=>{
    if(display.value.indexOf(".")==-1)
        display.value+="."
}

const borrarC=()=>{
    display.value="0"
}
const borrarUltimo=()=>{
    display.value=display.value.slice(0,-1)
    if(display.value.length==0)
        display.value=="0"
}
const suma=()=>{
    num1=display.value
    operacion="+"
    limpiar()
}
const resta=()=>{
    num1=display.value
    operacion="-"
    limpiar()
}
const multiplicacion=()=>{
    num1=display.value
    operacion="*"
    limpiar()
}
const division=()=>{
    num1=display.value
    operacion="/"
    limpiar()
}
const igual=()=>{
    num2=display.value
    resolver()
}
const borrarCE=()=>{
    limpiar()
}

const limpiar=()=>{
    display.value="";
}

const cambiarSigno=()=>{
    if(display.value != "0")
        display.value=display.value *-1
}

const resolver = () => {
    var resultado = 0
    switch (operacion) {
        case "+":
            resultado = sumar(parseFloat(num1), parseFloat(num2))
            break
        case "-":
            resultado = restar(parseFloat(num1), parseFloat(num2))
            break
        case "*":
            resultado = multiplicar(parseFloat(num1), parseFloat(num2))
            break
        case "/":
            resultado = dividir(parseFloat(num1), parseFloat(num2))
            break
    }

    display.value = resultado;
}




          