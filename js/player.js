/*
################################################################
#TheNullPlayer: player.js
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

const ID = 'M7lc1UVf-VE'
const URL = 'https://www.youtube.com/@TheNullPlayer/live'

var stream;

function onYouTubeIframeAPIReady()
{
  stream = new YT.Player('stream',
  {
    height: '768',
    width: '1024',
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
  
  stream.loadVideoByUrl(URL, 0);
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