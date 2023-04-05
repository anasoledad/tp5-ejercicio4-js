function obtenerHora() {
    let fechaActual = new Date();
    console.log(fechaActual);

    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let ampm;
    let textoDia = fechaActual.getDay();
    console.log(textoDia)
    let dia = fechaActual.getDate();
    console.log(dia);
    let mes = fechaActual.getMonth();
    console.log(mes)
    let anio = fechaActual.getFullYear();
    console.log(anio)
    let hora = fechaActual.getHours();
    let minuto = fechaActual.getMinutes();
    let segundo = fechaActual.getSeconds()
    
    if(hora >= 12){
        hora = hora -12;
        ampm = 'PM';
    }else{
        ampm = 'AM';
    }
     if(hora == 0){
        hora = 12;
     }
     if(hora < 10) {
        hora = '0' + hora;
     }

     if(minuto < 10) {
        minuto = '0' + minuto;
     }

     if(segundo < 10) {
        segundo = '0' + segundo;
     }

    let parrafoFecha = document.getElementById('fecha');

    parrafoFecha.innerHTML = `${diaSemana[textoDia]} ${dia} de ${meses[mes]} del ${anio}`;

    let parrafoHora = document.getElementById('tiempo');

    parrafoHora.innerHTML = `${hora} : ${minuto} : `;

    let parrafoAmPm = document.getElementById('ampm');
    parrafoAmPm.innerHTML = ` ${ampm}`
    let parrafoSegundo = document.getElementById('seg');
    parrafoSegundo.innerHTML = ` ${segundo}`
}

setInterval(obtenerHora,1000);
