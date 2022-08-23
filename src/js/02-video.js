import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const onPlay = function ({seconds}) {
        localStorage.setItem ('videoplayer-current-time', seconds)
    }

    player.on ('timeupdate', throttle(onPlay, 1000))

    const afterTimeUpdate = localStorage.getItem ('videoplayer-current-time')

    if(afterTimeUpdate) {
        player.setCurrentTime (afterTimeUpdate)
    }