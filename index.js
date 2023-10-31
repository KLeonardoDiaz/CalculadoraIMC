function operacion(){
    var peso = document.getElementById('peso').value
    var altcm = document.getElementById('altura').value
    var altm = parseFloat(altcm)/100
    var imc = parseInt(peso)/(altm * altm)
    document.getElementById('resultado').innerHTML= "Su Indice de Masa Corporal es: " + imc
    var Tacometro1 = document.getElementById("Tacometro1");
    var Tacometro2 = document.getElementById("Tacometro2");
    var Tacometro3 = document.getElementById("Tacometro3");
    var Tacometro4 = document.getElementById("Tacometro4");
    var Tacometro5 = document.getElementById("Tacometro5");
    if(imc < 18.5){
        document.getElementById('condicion').innerHTML= "Su condición es: Bajo Peso"
        Tacometro1.style.display = "block";
        Tacometro2.style.display = "none";
        Tacometro3.style.display = "none";
        Tacometro4.style.display = "none";
        Tacometro5.style.display = "none";
    } else if(imc >= 18.5 && imc < 25){
        document.getElementById('condicion').innerHTML= "Su condición es: Saludable"
        Tacometro1.style.display = "none";
        Tacometro2.style.display = "block";
        Tacometro3.style.display = "none";
        Tacometro4.style.display = "none";
        Tacometro5.style.display = "none";
    } else if(imc >= 25 && imc < 30){
        document.getElementById('condicion').innerHTML= "Su condición es: Sobrepeso"
        Tacometro1.style.display = "none";
        Tacometro2.style.display = "none";
        Tacometro3.style.display = "block";
        Tacometro4.style.display = "none";
        Tacometro5.style.display = "none";
    } else if(imc >= 30 && imc < 40){
        document.getElementById('condicion').innerHTML= "Su condición es: Obesidad"
        Tacometro1.style.display = "none";
        Tacometro2.style.display = "none";
        Tacometro3.style.display = "none";
        Tacometro4.style.display = "block";
        Tacometro5.style.display = "none";
    } else if(imc >= 40){
        document.getElementById('condicion').innerHTML= "Su condición es: Obesidad Severa"
        Tacometro1.style.display = "none";
        Tacometro2.style.display = "none";
        Tacometro3.style.display = "none";
        Tacometro4.style.display = "none";
        Tacometro5.style.display = "block";
    }
}