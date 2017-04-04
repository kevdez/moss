#! /usr/bin/env node

const blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen({smartCSR: true});

screen.key('q', () => {
  process.exit(0);
});

const yourMusicList = blessed.list({
  top: 0,
  left: 0,
  width: '30%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    selected: {
      fg: 'green', bg: 'blue'
    }
  },
});

yourMusicList.setItems(['Your music', 'Browse', 'Radio']);
screen.key('up', () => {
  yourMusicList.up(1);
  screen.render();
});

const playlistList = blessed.list({
  bottom: 0,
  left: 0,
  width: '30%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    selected: {
      fg: 'green', bg: 'black'
    }
  }
});
playlistList.setItems([
  'Playlists',
  'Discover Weekly',
  'Deep House Relax',
  'Ambient Chill',
  'This Is: Animal Collective'
]);
screen.key('up', () => {
  playlistList.up(1);
  screen.render();
});


screen.key('down', () => {
  playlistList.down(1);
  screen.render();
});
const blueBox = blessed.box({
  height: 10,
  width: 10,
  style: {
    fg: 'white',
    bg: 'green'
  },
  draggable: true
});
blueBox.setContent('10 by 10');

// Append the widgets to the screen
screen.append(yourMusicList);
screen.append(blueBox);
screen.append(playlistList);
// Render the screen.
screen.render();
