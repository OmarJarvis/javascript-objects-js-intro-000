var playlist = { DMX: "Slippin"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artistName]
  return playlist
}

