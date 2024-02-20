function menu(sectionId){
    const currentSection = document.querySelector(".active");
    if (currentSection) {
        currentSection.classList.remove("active");
    }

    const selectedSection = document.getElementById(sectionId.replace("section", "exercise"));
    if (selectedSection) {
        selectedSection.classList.add("active");
        clear();
    }
}

let answer;

function exercise1() {
    const input = document.getElementById("ej1Input").value.trim();
    if(input.toLowerCase() === "si") {
        answer = "Ciertamente";
    } else if(input.toLowerCase() === "no") {
        answer = "No te creo";
    } else {
        answer = "respuesta inválida"; 
    }
  
    document.getElementById("ej1Answer").textContent = answer;
}
  
function exercise2() {
    const num = parseInt(document.getElementById("ej2Input").value.trim());
    if (isNaN(num) || num <= 0) {
        alert("Debe ingresar un número valido");
        document.getElementById("ej2Answer").textContent = "";
        return;
    }

    if(num % 2 === 0) {
        answer = `${num} es divisible entre 2`;
    } else {
        answer = `${num} no es divisible entre 2`;
    }
  
    document.getElementById("ej2Answer").textContent = answer;  
}
  
function exercise3() {
    const num = parseInt(document.getElementById("ej3Input").value.trim());
    if (isNaN(num) || num <= 0) {
        alert("Debe ingresar un número valido");
        return;
    }
    
    if(num % 2 === 0) {
        answer = "El número es par";
    } else {
        answer = "El número es impar";
    }
  
    alert(answer);
}
  
function exercise4() {
    const num = parseInt(document.getElementById("ej4Input").value);
    if (isNaN(num) || num < 0) {
        alert("Debe ingresar un número valido");
        document.getElementById("ej4Answer").textContent ="";
        return;
    }
    
    if(num === 1000) {
        answer = "Ganaste un premio";
    } else {
        answer = `Tu número es ${num}. Lo sentimos, sigue participando.`;
    }
  
    document.getElementById("ej4Answer").textContent = answer;
}
  
function exercise5() {
    const num1 = parseInt(document.getElementById("ej5Input1").value);
    const num2 = parseInt(document.getElementById("ej5Input2").value);
    if (isNaN(num1) || isNaN(num2) || num1< 0 || num2 < 0) {
        alert("Debe ingresar un número valido");
        document.getElementById("ej5Answer").textContent = "";
        return;
    }

    if(num1 < num2) {
        answer = `${num1} es menor que ${num2}`; 
    } else if (num2 < num1) {
        answer = `${num2} es menor que ${num1}`;
    } else {
        answer = "Ambos números son iguales";
    }
  
    document.getElementById("ej5Answer").textContent = answer;
}
  
function exercise6() {
    const num1 = parseInt(document.getElementById("ej6Input1").value);
    const num2 = parseInt(document.getElementById("ej6Input2").value);
    const num3 = parseInt(document.getElementById("ej6Input3").value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1< 0 || num2 < 0 || num3 < 0) {
        alert("Debe ingresar un número valido");
        document.getElementById("ej6Answer").textContent = "";
        return;
    }
    
    if (num1 > num2 && num1 > num3) {
        answer = `El número mayor es ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        answer = `El número mayor es ${num2}`;
    } else if (num3 > num1 && num3 > num2) {
        answer = `El número mayor es ${num3}`;
    } else {
        answer = "Los números son iguales";
    }
  
    document.getElementById("ej6Answer").textContent = answer;
}
  
function exercise7() {
    const dia = document.getElementById("ej7Input").value.toLowerCase();
  
    switch(dia) {
        case "lunes":
            answer = "¡Que tengas un buen inicio de semana!";
            break;
        case "viernes":
            answer = "¡Ya casi es fin de semana!";
            break;
        case "sábado":
        case "domingo":
            answer = "¡Disfruta el fin de semana!";
            break;  
        case "martes":
        case "miercoles":
        case "jueves":
            answer = "¡Continua dando lo mejor de ti!";
            break; 
        default:
            answer = "Ese no es un día válido";
            break;    
    }
    document.getElementById("ej7Answer").textContent = answer;
}
  
function exercise8() {
    const calificacion = parseInt(document.getElementById("ej8Input").value);  
    if(calificacion < 1 || calificacion > 10 || isNaN(calificacion) ) {
        document.getElementById("ej8Answer").textContent = "Calificación inválida";
        return;
    }

    if(calificacion < 6) {
        answer = "Reprobado";
    } else if(calificacion >= 6 && calificacion < 9) {
        answer = "Regular";
    } else if(calificacion === 9) {
        answer = "Bien";
    } else {
        answer = "Excelente";
    }
  
    document.getElementById("ej8Answer").textContent = answer;  
}
  
function exercise9() {
    const helado = document.getElementById("ej9Helado").value;
    let precio = 50;
  
    switch(helado) {
        case "sin topping":
            precio;
            break;
        case "oreo":
            precio += 10;
            break;
        case "kitkat":
            precio += 15;
            break;
        case "brownie":
            precio += 20;
            break;
        default:
            document.getElementById("ej9Answer").textContent = "No tenemos mas toppings, lo sentimos.";
            return;
    }
  
    document.getElementById("ej9Answer").textContent = `El precio es $${precio} MXN`;
}
  
function exercise10() {
    const programa = document.getElementById("ej10Programa").value;
    const beca = document.getElementById("ej10Beca").value;
  
    let precioMensual;
    let duracionMeses;
  
    switch(programa) {
        case "course":
            precioMensual = 4999;
            duracionMeses = 2;
            break;
        case "carrera":  
            precioMensual = 3999;
            duracionMeses = 6;
            break;
        case "master":
            precioMensual = 2999;
            duracionMeses = 12;
            break;      
    }
  
    let descuento;
    switch(beca) {
        case "facebook":
            descuento = 0.2;
            break;
        case "google":
            descuento = 0.15;
            break;
        case "jesua":
            descuento = 0.5;
            break;
        default:
            descuento = 0;
    }
  
    const precioConDescuento = precioMensual * (1 - descuento);
    const total = precioConDescuento * duracionMeses;
  
    document.getElementById("ej10Answer").innerHTML = `Precio mensual: $${precioConDescuento.toFixed(2)} MXN <br> Total por el curso: $${total.toFixed(2)} MXN`;
}
  
function exercise11() {
    const vehiculo = document.getElementById("ej11Vehiculo").value;
    const kms = parseFloat(document.getElementById("ej11Kms").value);
    const litros = parseFloat(document.getElementById("ej11Litros").value);
    let precioKms;

    if (isNaN(kms) || isNaN(litros) || kms< 0 || litros < 0) {
        alert("Debe ingresar un número valido");
        return;
    }

    switch(vehiculo) {
        case "coche":
            precioKms = 0.2;
            document.getElementById("ej11Kms").value="";
            document.getElementById("ej11Litros").value="";
            document.getElementById("ej11Kms").removeAttribute("disabled");
            document.getElementById("ej11Litros").removeAttribute("disabled");
            break;
        case "moto":
            precioKms = 0.1;
            document.getElementById("ej11Kms").value="";
            document.getElementById("ej11Litros").value="";
            document.getElementById("ej11Kms").removeAttribute("disabled");
            document.getElementById("ej11Litros").removeAttribute("disabled");
            break;
        case "autobus":
            precioKms = 0.5;
            document.getElementById("ej11Kms").value="";
            document.getElementById("ej11Litros").value="";
            document.getElementById("ej11Kms").removeAttribute("disabled");
            document.getElementById("ej11Litros").removeAttribute("disabled");
            break;      
    }
  
    let extraLitros = 0;
    if(litros > 0 && litros <= 100) {
        extraLitros = 5;
    } else if(litros > 100) {
        extraLitros = 10;
    }
  
    const total = (precioKms * kms) + extraLitros;
  
    document.getElementById("ej11Answer").textContent = `Total a pagar: $${total.toFixed(2)} MXN`;
}

function complementValues() {
    const kms = parseFloat(document.getElementById("ej11Kms").value);
    const litros = parseFloat(document.getElementById("ej11Litros").value);
    if(kms == 0.0 || litros== 0.0){
        document.getElementById("ej11Kms").value ="0.0";
        document.getElementById("ej11Litros").value="0.0";
        document.getElementById("ej11Kms").setAttribute("disabled", true);
        document.getElementById("ej11Litros").setAttribute("disabled", true);
        return;
    }
}

function clear(){
    document.getElementById("ej1Input").value="";
    document.getElementById("ej1Answer").textContent="";
    document.getElementById("ej2Input").value="";
    document.getElementById("ej2Answer").textContent ="";
    document.getElementById("ej3Input").value="";
    document.getElementById("ej4Input").value="";
    document.getElementById("ej4Answer").textContent ="";
    document.getElementById("ej5Input1").value="";
    document.getElementById("ej5Input2").value="";
    document.getElementById("ej5Answer").textContent ="";
    document.getElementById("ej6Input1").value="";
    document.getElementById("ej6Input2").value="";
    document.getElementById("ej6Input3").value="";
    document.getElementById("ej6Answer").textContent ="";
    document.getElementById("ej7Input").value="";
    document.getElementById("ej7Answer").textContent ="";
    document.getElementById("ej8Input").value="";
    document.getElementById("ej8Answer").textContent ="";
    document.getElementById("ej9Helado").value="sin topping";
    document.getElementById("ej9Answer").textContent ="";
    document.getElementById("ej10Programa").value="course";
    document.getElementById("ej10Beca").value="ninguna";    
    document.getElementById("ej10Answer").textContent ="";
    document.getElementById("ej11Vehiculo").value="coche";
    document.getElementById("ej11Kms").value="";
    document.getElementById("ej11Litros").value="";
    document.getElementById("ej11Answer").textContent ="";
}