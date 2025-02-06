/*
################################################################
#TheNullPlayer: player.js
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

const ID = 'M7lc1UVf-VE'

function player()
{
    var stream;
      function onYouTubeIframeAPIReady() {
        stream = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: ID,
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
}