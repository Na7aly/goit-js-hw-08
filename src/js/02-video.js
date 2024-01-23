
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const player = new Vimeo(document.getElementById('vimeo-player'));

  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {

    player.setCurrentTime(parseFloat(storedTime));
  }
  
  player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds.toString());
  }, 1000)); 
});