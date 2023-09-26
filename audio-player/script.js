const audio = document.querySelector('.audio');
const background = document.querySelector('.background');
const backgroundImg = document.querySelector('.background-img');
const playPause = document.querySelector('.playPause');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const nameArtist = document.querySelector('.name-artist');
const nameSong = document.querySelector('.name-song');
const current = document.querySelector('.current');
const progressBar = document.querySelector('.progressBar');
const duration = document.querySelector('.duration');

let songs = [
    {
        nameArtist: 'Lina Bo',
        nameSong: 'Weiblich',
        urlSong: "assets/music/LinaBoWeiblich.mp3",
        urlBackground: 'assets/img/LinaBoWeiblich.jfif'
    },
    {
        nameArtist: 'Lucenzo feat Don Omar',
        nameSong: 'Danza Kuduro',
        urlSong: "assets/music/LucenzofeatDonOmarDanzaKuduro.mp3",
        urlBackground: 'assets/img/LucenzofeatDonOmarDanzaKuduro.jfif'
    },
    {
        nameArtist: 'L.Fonsi feat D.Yankee',
        nameSong: 'Despacito',
        urlSong: "assets/music/LuisFonsifeatDaddyYankeeDespacito.mp3",
        urlBackground: 'assets/img/LuisFonsifeatDaddyYankeeDespacito.jfif'
    },
    {
        nameArtist: 'Rammstein',
        nameSong: 'Sonne',
        urlSong: "assets/music/RammsteinSonne.mp3",
        urlBackground: 'assets/img/RammsteinSonne.jpg'
    },
]

let isPlay = false;
playPause.addEventListener('click', () => {
    if (isPlay) {
        isPlay = false;
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-flex';
    }
    else {
        isPlay = true;
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-flex';
    }
})


let arrSong = 0;

nextBtn.addEventListener('click', () => {
    arrSong++;

    if (arrSong >= songs.length) {
        arrSong = 0;
        isPlay = false;
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-flex';
        changeSong(arrSong);
    } else {
        isPlay = false;
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-flex';
        changeSong(arrSong);
    }
})


prevBtn.addEventListener('click', () => {
    arrSong--;

    if (arrSong < 0) {
        arrSong = songs.length - 1;
        isPlay = false;
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-flex';
        changeSong(arrSong);
    } else {
        isPlay = false;
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-flex';
        changeSong(arrSong);
    }
})

function changeSong(index) {
    audio.src = songs[index].urlSong;
    background.src = songs[index].urlBackground;
    backgroundImg.src = songs[index].urlBackground;
    nameSong.innerHTML = songs[index].nameSong;
    nameArtist.innerHTML = songs[index].nameArtist;
}

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

audio.addEventListener('loadeddata', () => {
    duration.textContent = getTimeCodeFromNum(audio.duration);
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
})


setInterval(() => {
    current.textContent = getTimeCodeFromNum(audio.currentTime);
    progressBar.value = audio.currentTime;
}, 1000);


progressBar.addEventListener('change', () => {
    current.textContent = getTimeCodeFromNum(progressBar.value);
    audio.currentTime = progressBar.value;
})



