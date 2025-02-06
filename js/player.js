/*
################################################################
#TheNullPlayer: player.js
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

const ID = 'M7lc1UVf-VE'

var stream;

function onYouTubeIframeAPIReady()
{
  stream = new YT.Player('stream',
  {
    height: '390',
    width: '640',
    videoId: ID,
    playerVars:
    {
      'playsinline': 1
    },
    events:
    {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event)
{
  event.target.playVideo();
}

function onPlayerStateChange(event)
{

}

function player()
{
  //stream.playVideo();
}