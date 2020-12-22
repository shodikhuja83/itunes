export const musicPlayerInit = () => {

const audioPlayer = document.querySelector('.audio-player');
const audioButtonPlay = document.querySelector('.audio-button__play');
const audioButtonStop = document.querySelector('.audio-button__stop');
const audioProgress = document.querySelector('.audio-progress__timing');
const audioTimePassed = document.querySelector('.audio-time__passed');
const audioTimeTotal = document.querySelector('.audio-time__total');

const toggleIcon = () => {
    if (audioPlayer.paused) {
      audioButtonPlay.classList.remove('fa-pause');
      audioButtonPlay.classList.add('fa-play');
    } else {
      audioButtonPlay.classList.add('fa-pause');
      audioButtonPlay.classList.remove('fa-play');
    }
}

const togglePlay = () => {
    if (audioPlayer.paused){
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
};
const stopPlay = () => {
    audioPlayer.pause();
    audiooPlayer.currentTime = 0;
};

const addZero = n => n < 10 ? '0'+ n :  n;

audioPlayer.addEventListener('click', togglePlay);
audioButtonPlay.addEventListener('click', togglePlay);

audioPlayer.addEventListener('play', toggleIcon);
audioPlayer.addEventListener('pause', toggleIcon);

audioButtonStop.addEventListener('click', stopPlay);

audioPlayer.addEventListener('timeupdate', () => {

    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    audioProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60);

    
    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);
    
    audioTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
    audioTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
       
});

    audioProgress.addEventListener('change', () =>{
        const duration = audioPlayer.duration;
        const value = audioProgress.value;

        audioPlayer.currentTime = (value * duration) / 100;
    });

};