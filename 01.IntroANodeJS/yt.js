const yt = require("yt-converter");
let url_yt = 'https://www.youtube.com/watch?v=ksZL-qL5i5E&list=PLEpjZ6a3i26dHtp4ujWHMF_l6_TbU_por&index=16'

// Función que obtiene la información de un video de YT.
function getInfoYt(url_yt){
    yt.getInfo(url_yt).then(info => {
        console.log(info);
    });
}

// Función que convierte y descarga un video de YT en formato mp3.
function downloadMp3(url_yt,title){
    yt.convertAudio({
        url: url_yt,
        itag: 140,
        directoryDownload: './files/',
        title : title
    });
}

//getInfoYt(url_yt);
//downloadMp3(url_yt,'GLBTM.mp3');

