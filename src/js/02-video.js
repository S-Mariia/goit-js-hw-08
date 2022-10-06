import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const CURRENTTIME = "videoplayer-current-time";

const player = new Player('vimeo-player');
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({seconds}) {
    localStorage.setItem(CURRENTTIME, seconds);
}

const currentTime = localStorage.getItem(CURRENTTIME) === null ? 0 : localStorage.getItem(CURRENTTIME);

player.setCurrentTime(currentTime);

