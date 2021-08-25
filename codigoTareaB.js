//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//Fucking <script> va al final en el HTML

const $botonCalcular = document.querySelector('#botonCalcular');

$botonCalcular.onclick = function () {
    const $horas = document.querySelectorAll('.horas');
    const $minutos = document.querySelectorAll('.minutos');
    const $segundos = document.querySelectorAll('.segundos');
    const $tiempoTotalVideos = document.querySelector('#tiempoTotalVideos');
    

    let horasPorVideos = 0;
    let minutosPorVideos = 0;
    let segundosPorVideos = 0;

    for( i = 0; i < $horas.length ; i++ ) {
        horasPorVideos += Number($horas[i].value);
    }

    for ( n = 0; n < $minutos.length; n++) {
        minutosPorVideos += Number($minutos[n].value);
    }

    for ( z = 0; z < $segundos.length; z++) {
        segundosPorVideos += Number($segundos[z].value);
    }

    const sumaTotalSegundos = horasPorVideos*3600 + minutosPorVideos*60 + segundosPorVideos;
    const horasTotalesVideos = sumaTotalSegundos / 3600;
    const minutosTotalesVideos = (sumaTotalSegundos % 360) / 60;
    const segundosTotalesVideos = ((sumaTotalSegundos % 360) % 60);

    
    $tiempoTotalVideos.innerText = `La suma total de los videos es de
    ${Math.trunc(horasTotalesVideos)} horas, ${Math.trunc(minutosTotalesVideos)} minutos, ${Math.trunc(segundosTotalesVideos)} segundos`;

    return false;
}




