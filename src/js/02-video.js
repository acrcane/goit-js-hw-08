import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const handlePlay = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(handlePlay, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

