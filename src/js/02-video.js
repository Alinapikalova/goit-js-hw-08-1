const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//on
player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);


