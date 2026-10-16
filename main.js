
// Carrossel
const containerFoto = document.querySelector('.container-foto');
const imagens = containerFoto.querySelectorAll('img');
let indiceAtual = 0;
containerFoto.addEventListener('click', () => {
  imagens[indiceAtual].classList.remove('carousel');
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imagens[indiceAtual].classList.add('carousel');
});

// Playlist
const playlist = [
 'audio/attention.mp3',
 'audio/hype boy.mp3',
 'audio/hurt.mp3',
 'audio/cookie.mp3',
 'audio/ditto.mp3',
 'audio/omg.mp3',
 'audio/zero.mp3',
 'audio/new jeans.mp3',
 'audio/super shy.mp3',
 'audio/eta.mp3',
 'audio/cool with you.mp3',
 'audio/get up.mp3',
 'audio/asap.mp3',
 'audio/gods.mp3',
 'audio/how sweet.mp3',
 'audio/buuble gum.mp3',
 'audio/right now.mp3',
 'audio/supernatural.mp3'
];

const nomes = [
 'Attention',
 'Hype Boy',
 'Hurt',
 'Cookie',
 'Ditto',
 'OMG',
 'Zero',
 'New Jeans',
 'Super Shy',
 'ETA',
 'Cool With You',
 'Get Up',
 'ASAP',
 'Gods',
 'How Sweet',
 'Buuble Gum',
 'Right Now',
 'Supernatural'
];

const audio = document.getElementById('dittoaudio');
const titulo = document.getElementById('dittoinstrumental');
const btn = document.getElementById('btn-play-pause');
const icone = document.getElementById('icone-btn');
const btnMute = document.getElementById('btn-mute');
const iconeMute = document.getElementById('icone-mute');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const displayAtual = document.getElementById('tempo-atual');
const displayTotal = document.getElementById('tempo-total');

let musicaAtual = 0;

function formatarTempo(segundos){
 const min=Math.floor(segundos/60)||0;
 const sec=Math.floor(segundos%60)||0;
 return `${min}:${sec<10?'0':''}${sec}`;
}

function carregarMusica(i){
 musicaAtual=i;
 audio.src=playlist[i];
 titulo.textContent=nomes[i];
 audio.load();
}

function tocarAtual(){
 audio.play();
 icone.src='imagens/pause.png';
}

btn.addEventListener('click',()=>{
 if(audio.paused){tocarAtual();}
 else{audio.pause(); icone.src='imagens/play.png';}
});

btnMute.addEventListener('click',()=>{
 audio.muted=!audio.muted;
 iconeMute.src=audio.muted?'imagens/mute.png':'imagens/speaker.png';
});

btnNext.addEventListener('click',()=>{
 carregarMusica((musicaAtual+1)%playlist.length);
 tocarAtual();
});

btnPrev.addEventListener('click',()=>{
 carregarMusica((musicaAtual-1+playlist.length)%playlist.length);
 tocarAtual();
});

audio.addEventListener('ended',()=>{
 carregarMusica((musicaAtual+1)%playlist.length);
 tocarAtual();
});

audio.addEventListener('timeupdate',()=>{
 displayAtual.textContent=formatarTempo(audio.currentTime);
});

audio.addEventListener('loadedmetadata',()=>{
 displayTotal.textContent=formatarTempo(audio.duration);
});

carregarMusica(0);
