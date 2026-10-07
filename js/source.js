// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 

var artistName;
var artistImg;
var result;

function consoleLogResults(list = []) {
  list.forEach(Item => {
    console.log(Item);
  });
}

async function getArtist(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const artist = await response.json();

  // artistName = artist.name;
  // artistImg = artist.images[0]?.url;
  artistList = [artist.name, artist.images[0]?.url];
  return artistList;
}

async function getAlbum(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const album = await response.json();

  albumList = [album.images[0]?.url, album.name, album.release_date, album.type];
  return albumList;
}

async function getTrack(token, id) {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  const track = await response.json();

  trackList = [track.album.images[0]?.url, track.name, track.album.name, track.track_number, track.duration_ms];
  return trackList;
} 

// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "3MZsBdqDrRTJihTHQrO6Dq");
localStorage.setItem("access_token", "BQDls4iHYkDxCYcQO6_t3y-NHCNDnW6elG6ewAU1KZ34CPcXl5o20-kEvJaR7RojFVFMtWAFuUI1rONB-Yhi0rGgKB2u8tPqy9oBW2PCiY2zXCUArBhOYKfjAxxlHrx_9fvusEklkNiQ");
localStorage.setItem("album_id_1", "5xiwCNC26RvgfwElNmIJoL")
localStorage.setItem("album_id_2", "5mIImcsuqpiSXg8XvFr81I")
localStorage.setItem("album_id_3", "39VuC5rYQHAnR6xQwm1WDk")
localStorage.setItem("album_id_4", "65edimIChzNNK8VGn56pIK")
localStorage.setItem("track_id_1", "6rY5FAWxCdAGllYEOZMbjW?si=828ddff63a764b0c");
localStorage.setItem("track_id_2", "2mlNgAeIBnL78ZriXgrRHz?si=2b5dba916a1d4098");
localStorage.setItem("track_id_3", "42D9aaKTLw47faFhRCQfHF?si=6dbac7eb2eb94d6f");

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");


  result = await getArtist(accessToken, artistID);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID1);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID2);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID3);
  consoleLogResults(result);

  result = await getAlbum(accessToken, albumID4);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID1);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID2);
  consoleLogResults(result);

  result = await getTrack(accessToken, trackID3);
  consoleLogResults(result);

};





    

load();
   